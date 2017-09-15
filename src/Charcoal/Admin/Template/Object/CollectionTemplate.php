<?php

namespace Charcoal\Admin\Template\Object;

use Exception;
use InvalidArgumentException;

// From PSR-7
use Psr\Http\Message\RequestInterface;

// From Pimple
use Pimple\Container;


// From 'charcoal-admin'
use Charcoal\Admin\AdminTemplate;
use Charcoal\Admin\Ui\CollectionContainerInterface;
use Charcoal\Admin\Ui\CollectionContainerTrait;
use Charcoal\Admin\Ui\DashboardContainerInterface;
use Charcoal\Admin\Ui\DashboardContainerTrait;
use Charcoal\Admin\Widget\SearchWidget;

/**
 * Object collection template (table with a list of objects).
 */
class CollectionTemplate extends AdminTemplate implements
    CollectionContainerInterface,
    DashboardContainerInterface
{
    use CollectionContainerTrait;
    use DashboardContainerTrait;

    /**
     * The template header's Search Widget.
     *
     * Note: Widget is based on the template's dashboard config.
     *
     * @var SearchWidget|null
     */
    private $searchWidget;

    /**
     * The template header's Search Widget configset.
     *
     * Note: Widget settings retrieved from the template's dashboard config.
     *
     * @var array|null
     */
    private $searchConfig;

    /**
     * Whether to show the header's Search widget.
     *
     * Note: Condition is based on the template's dashboard config.
     *
     * @var boolean|null
     */
    private $showSearch;

    /**
     * @param Container $container DI Container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        // Required collection dependencies
        $this->setModelFactory($container['model/factory']);
        $this->setCollectionLoader($container['model/collection/loader']);

        // Required dashboard dependencies.
        $this->setDashboardBuilder($container['dashboard/builder']);
    }

    /**
     * @param RequestInterface $request PSR-7 request.
     * @return boolean
     */
    public function init(RequestInterface $request)
    {
        parent::init($request);
        $this->createObjTable();

        return true;
    }

    /**
     * @return void
     */
    private function createObjTable()
    {
        $obj = $this->proto();
        if (!$obj) {
            return;
        }

        if (!$obj->source()->tableExists()) {
            $obj->source()->createTable();
            $this->addFeedback('notice', strtr(
                $this->translator()->translate('The "{{ objType }}" table has been created.'),
                [
                    '{{ objType }}' => $obj->objType()
                ]
            ));
        }
    }

    /**
     * @throws Exception If the dashboard config can not be loaded.
     * @return array
     */
    protected function createDashboardConfig()
    {
        $adminMetadata  = $this->objAdminMetadata();
        $dashboardIdent = $this->dashboardIdent();

        if (!$dashboardIdent) {
            $dashboardIdent = $this->metadataDashboardIdent();
        }

        if (!isset($adminMetadata['dashboards']) || !isset($adminMetadata['dashboards'][$dashboardIdent])) {
            throw new Exception(
                'Dashboard config is not defined.'
            );
        }

        $dashboardConfig = $adminMetadata['dashboards'][$dashboardIdent];

        /** Setup the header's earch widget */
        $this->showSearch   = true;
        $this->searchConfig = [];
        if (isset($dashboardConfig['widgets']['search'])) {
            $this->searchConfig = $dashboardConfig['widgets']['search'];
            unset($dashboardConfig['widgets']['search']);
        }

        if (isset($this->searchConfig['active'])) {
            $this->setShowSearch($this->searchConfig['active']);
        }

        if (isset($dashboardConfig['show_search'])) {
            $this->setShowSearch($dashboardConfig['show_search']);
        }

        return $dashboardConfig;
    }

    /**
     * Retrieve the sidemenu.
     *
     * @return SidemenuWidgetInterface|null
     */
    public function sidemenu()
    {
        if ($this->sidemenu === null) {
            $dashboardConfig = $this->dashboardConfig();

            if (isset($dashboardConfig['sidemenu'])) {
                $this->sidemenu = $this->createSidemenu($dashboardConfig['sidemenu']);
            } else {
                $this->sidemenu = $this->createSidemenu();
            }
        }

        return $this->sidemenu;
    }

    /**
     * Retrieve the header menu.
     *
     * @return array
     */
    public function headerMenu()
    {
        if ($this->headerMenu === null) {
            $dashboardConfig = $this->dashboardConfig();

            if (isset($dashboardConfig['sidemenu'])) {
                $this->headerMenu = $this->createHeaderMenu($dashboardConfig['sidemenu']);
            } else {
                $this->headerMenu = $this->createHeaderMenu();
            }
        }

        return $this->headerMenu;
    }

    /**
     * Toggle whether the SearchWidget should be shown in the header.
     *
     * @param  boolean $show The show search widget flag.
     * @return AdminTemplate Chainable
     */
    public function setShowSearch($show)
    {
        $this->showSearch = !!$show;
        return $this;
    }

    /**
     * Determine if the SearchWidget should be shown in the header.
     *
     * @return boolean
     */
    public function showSearch()
    {
        if ($this->showSearch === null) {
            $this->dashboardConfig();
        }

        return $this->showSearch;
    }

    /**
     * Retrieve the optional search widget.
     *
     * @return SearchWidget|null
     */
    public function searchWidget()
    {
        if ($this->searchWidget === null) {
            $this->searchWidget = $this->createSearchWidget();
        }

        return $this->searchWidget;
    }

    /**
     * Create the search widget.
     *
     * Note:
     * - Uses the "default_search_list" ident that should point
     *   to a list ident in the "lists" set.
     * - If the ident doesn't match a list, the widget will
     *   return basicly every properties of the object.
     *
     * @return SearchWidget
     */
    protected function createSearchWidget()
    {
        $this->dashboardConfig();

        $widget = $this->widgetFactory()->create(SearchWidget::class);
        $widget->setObjType($this->objType());
        $widget->setCollectionIdent($this->metadataListIdentForSearch());
        $widget->setData($this->searchConfig);

        return $widget;
    }

    /**
     * @return string
     */
    private function metadataListIdentForSearch()
    {
        $adminMetadata = $this->objAdminMetadata();

        if (isset($adminMetadata['default_search_list'])) {
            return $adminMetadata['default_search_list'];
        } elseif (isset($adminMetadata['default_list'])) {
            return $adminMetadata['default_list'];
        } else {
            return 'default';
        }
    }

    /**
     * @throws Exception If no default collection is defined.
     * @return string
     */
    private function metadataDashboardIdent()
    {
        $dashboardIdent = filter_input(INPUT_GET, 'dashboard_ident', FILTER_SANITIZE_STRING);
        if ($dashboardIdent) {
            return $dashboardIdent;
        }

        $adminMetadata = $this->objAdminMetadata();
        if (!isset($adminMetadata['default_collection_dashboard'])) {
            throw new Exception(sprintf(
                'No default collection dashboard defined in admin metadata for %s.',
                get_class($this->proto())
            ));
        }

        return $adminMetadata['default_collection_dashboard'];
    }

    /**
     * @throws Exception If the object's admin metadata is not set.
     * @return \ArrayAccess
     */
    private function objAdminMetadata()
    {
        $obj = $this->proto();

        $objMetadata = $obj->metadata();

        $adminMetadata = isset($objMetadata['admin']) ? $objMetadata['admin'] : [];

        return $adminMetadata;
    }

    /**
     * Retrieve the title of the page.
     *
     * @return \Charcoal\Translator\Translation
     */
    public function title()
    {
        if (isset($this->title)) {
            return $this->title;
        }

        try {
            $config = $this->dashboardConfig();

            if (isset($config['title'])) {
                $this->title = $this->translator()->translation($config['title']);
                return $this->title;
            }
        } catch (Exception $e) {
            $this->logger->error($e->getMessage());
        }

        $model    = $this->proto();
        $metadata = $model->metadata();
        $objLabel = null;

        if (!$objLabel && isset($metadata['admin']['lists'])) {
            $adminMetadata = $metadata['admin'];

            $listIdent = filter_input(INPUT_GET, 'collection_ident', FILTER_SANITIZE_STRING);
            if (!$listIdent) {
                $listIdent = $this->collectionIdent();
            }

            if (!$listIdent) {
                $listIdent = $this->collectionIdentFallback();
            }

            if ($listIdent && $model->view()) {
                $listIdent = $model->render($listIdent);
            }

            if (isset($adminMetadata['lists'][$listIdent]['label'])) {
                $objLabel = $this->translator()->translation($adminMetadata['lists'][$listIdent]['label']);
            }
        }

        if (!$objLabel && isset($metadata['labels']['all_items'])) {
            $objLabel = $this->translator()->translation($metadata['labels']['all_items']);
        }

        if (!$objLabel) {
            $objType = (isset($metadata['labels']['name']) ? $this->translator()->translation($metadata['labels']['name']) : null);

            $objLabel = $this->translator()->translation('Collection: {{ objType }}');

            if ($objType) {
                $objLabel = strtr($objLabel, [
                    '{{ objType }}' => $objType
                ]);
            }
        }

        if ($model->view()) {
            $this->title = $model->render((string)$objLabel, $model);
        } else {
            $this->title = (string)$objLabel;
        }

        return $this->title;
    }
}
