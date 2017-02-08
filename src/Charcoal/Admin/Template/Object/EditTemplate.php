<?php

namespace Charcoal\Admin\Template\Object;

use Exception;
use InvalidArgumentException;

// From Pimple
use Pimple\Container;

// From 'charcoal-translation'
use Charcoal\Translation\TranslationString;

// From 'charcoal-factory'
use Charcoal\Factory\FactoryInterface;

// From 'charcoal-ui'
use Charcoal\Ui\DashboardBuilder;

// From 'charcoal-admin'
use Charcoal\Admin\AdminTemplate;
use Charcoal\Admin\Ui\DashboardContainerInterface;
use Charcoal\Admin\Ui\DashboardContainerTrait;
use Charcoal\Admin\Ui\ObjectContainerInterface;
use Charcoal\Admin\Ui\ObjectContainerTrait;
use Charcoal\Admin\Widget\SidemenuWidget;

/**
 * Object Edit Template
 */
class EditTemplate extends AdminTemplate implements
    DashboardContainerInterface,
    ObjectContainerInterface
{
    use DashboardContainerTrait;
    use ObjectContainerTrait;

    /**
     * @var SideMenuWidgetInterface $sidemenu
     */
    private $sidemenu;

    /**
     * @param Container $container DI container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        // Required ObjectContainerInterface dependencies
        $this->setModelFactory($container['model/factory']);

        // Required dependencies.
        $this->setWidgetFactory($container['widget/factory']);
        $this->dashboardBuilder = $container['dashboard/builder'];
    }

    /**
     * @return array
     */
    protected function createDashboardConfig()
    {
        return $this->objEditDashboardConfig();
    }

    /**
     * @return SidemenuWidgetInterface|null
     */
    public function sidemenu()
    {
        $dashboardConfig = $this->objEditDashboardConfig();

        if (isset($dashboardConfig['sidemenu'])) {
            return $this->createSidemenu($dashboardConfig['sidemenu']);
        } else {
            return $this->createSidemenu();
        }
    }

    /**
     * @throws Exception If the object's admin metadata is not set.
     * @return \ArrayAccess
     */
    private function objAdminMetadata()
    {
        $obj = $this->obj();

        $objMetadata = $obj->metadata();

        $adminMetadata = isset($objMetadata['admin']) ? $objMetadata['admin'] : null;
        if ($adminMetadata === null) {
            throw new Exception(sprintf(
                'The object %s does not have an admin metadata.',
                get_class($obj)
            ));
        }

        return $adminMetadata;
    }

    /**
     * Get the dashboard config for the current object.
     *
     * This method loads the "dashboard config" from the object's admin metadata.
     *
     * @throws Exception If the object's dashboard config can not be loaded.
     * @return array
     */
    private function objEditDashboardConfig()
    {
        $adminMetadata = $this->objAdminMetadata();

        $dashboardIdent  = $this->dashboardIdent();

        if ($dashboardIdent === false || $dashboardIdent === null || $dashboardIdent === '') {
            $dashboardIdent = filter_input(INPUT_GET, 'dashboard_ident', FILTER_SANITIZE_STRING);
        }

        if ($dashboardIdent === false || $dashboardIdent === null || $dashboardIdent === '') {
            if (!isset($adminMetadata['default_edit_dashboard'])) {
                throw new Exception(sprintf(
                    'No default edit dashboard defined in admin metadata for %s',
                    get_class($this->obj())
                ));
            }

            $dashboardIdent = $adminMetadata['default_edit_dashboard'];
        }

        if (!isset($adminMetadata['dashboards']) || !isset($adminMetadata['dashboards'][$dashboardIdent])) {
            throw new Exception(
                'Dashboard config is not defined.'
            );
        }

        $dashboardConfig = $adminMetadata['dashboards'][$dashboardIdent];

        return $dashboardConfig;
    }

    /**
     * Retrieve the title of the page.
     *
     * @return TranslationString|string|null
     */
    public function title()
    {
        if (isset($this->title)) {
            return $this->title;
        }

        try {
            $config = $this->objEditDashboardConfig();

            if (isset($config['title'])) {
                $this->title = new TranslationString($config['title']);

                return $this->title;
            }
        } catch (Exception $e) {
            $this->logger->error($e->getMessage());
        }

        $obj      = $this->obj();
        $objId    = $this->objId();
        $objType  = $this->objType();
        $metadata = $obj->metadata();
        $objLabel = null;

        if (!$objLabel && isset($metadata['admin']['forms'])) {
            $adminMetadata = $metadata['admin'];
            $formIdent     = filter_input(INPUT_GET, 'form_ident', FILTER_SANITIZE_STRING);

            if ($formIdent === false || $formIdent === null || $formIdent === '') {
                $formIdent = (isset($adminMetadata['default_form']) ? $adminMetadata['default_form'] : '');
            }

            if (isset($adminMetadata['forms'][$formIdent]['label'])) {
                $objLabel = $adminMetadata['forms'][$formIdent]['label'];

                if (TranslationString::isTranslatable($objLabel)) {
                    $objLabel = new TranslationString($objLabel);
                }
            }
        }

        if (!$objLabel && isset($metadata['labels']['edit_item'])) {
            $objLabel = $metadata['labels']['edit_item'];

            if (TranslationString::isTranslatable($objLabel)) {
                $objLabel = new TranslationString($objLabel);
            }
        }

        if (!$objLabel && isset($metadata['labels']['edit_model'])) {
            $objLabel = $metadata['labels']['edit_model'];

            if (TranslationString::isTranslatable($objLabel)) {
                $objLabel = new TranslationString($objLabel);
            }
        }

        if (!$objLabel) {
            $objType = (isset($metadata['labels']['singular_name']) ? $metadata['labels']['singular_name'] : null);
            if (TranslationString::isTranslatable($objType)) {
                $objType = new TranslationString($objType);
            }

            if ($objId) {
                $objLabel = $this->translate('Edit: {{ objType }} #{{ id }}');
            } else {
                $objLabel = $this->translate('Create: {{ objType }}');
            }

            if ($objType) {
                $objLabel = strtr($objLabel, [
                    '{{ objType }}' => $objType
                ]);
            }
        }

        if ($obj && $obj->view()) {
            $this->title = $obj->render((string)$objLabel, $obj);
        } else {
            $this->title = (string)$objLabel;
        }

        return $this->title;
    }
}
