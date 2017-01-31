<?php

namespace Charcoal\Admin\Widget;

use \RuntimeException;

// From Pimple
use \Pimple\Container;

// From 'charcoal-core'
use \Charcoal\Model\ModelInterface;

// From 'charcoal-factory'
use \Charcoal\Factory\FactoryInterface;

// From 'charcoal-property'
use \Charcoal\Property\PropertyInterface;

// From 'charcoal-translation'
use \Charcoal\Translation\TranslationString;

// From 'charcoal-view'
use \Charcoal\View\ViewableInterface;

// From 'charcoal-admin'
use \Charcoal\Admin\AdminWidget;
use \Charcoal\Admin\Ui\CollectionContainerInterface;
use \Charcoal\Admin\Ui\CollectionContainerTrait;

/**
 * The table widget displays a collection in a tabular (table) format.
 */
class TableWidget extends AdminWidget implements CollectionContainerInterface
{
    use CollectionContainerTrait {
        CollectionContainerTrait::parsePropertyCell as parseCollectionPropertyCell;
        CollectionContainerTrait::parseObjectRow as parseCollectionObjectRow;
    }

    /**
     * @const integer
     */
    const DEFAULT_ACTION_PRIORITY = 10;

    /**
     * @var array $properties
     */
    protected $properties;

    /**
     * @var boolean $parsedProperties
     */
    protected $parsedProperties = false;

    /**
     * @var array $propertiesOptions
     */
    protected $propertiesOptions;

    /**
     * @var boolean $sortable
     */
    protected $sortable;

    /**
     * @var boolean $showTableHeader
     */
    protected $showTableHeader = true;

    /**
     * @var boolean $showTableHead
     */
    protected $showTableHead = true;

    /**
     * @var boolean $showTableFoot
     */
    protected $showTableFoot = false;

    /**
     * @var FactoryInterface $propertyFactory
     */
    private $propertyFactory;

    /**
     * @var mixed $adminMetadata
     */
    private $adminMetadata;

    /**
     * @var array|null
     */
    private $defaultListActions;

    /**
     * @var array $listActions
     */
    private $listActions;

    /**
     * @var integer $actionsPriority
     */
    protected $actionsPriority;

    /**
     * @var boolean $parsedListActions
     */
    protected $parsedListActions = false;

    /**
     * @var array|null
     */
    private $defaultObjectActions;

    /**
     * @var array|null
     */
    private $objectActions;

    /**
     * @var boolean $parsedListActions
     */
    protected $parsedObjectActions = false;

    /**
     * @param Container $container Pimple DI container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        $this->setView($container['view']);
        $this->setPropertyFactory($container['property/factory']);
        $this->setPropertyDisplayFactory($container['property/display/factory']);
    }

    /**
     * @param FactoryInterface $factory The property factory, to create properties.
     * @return TableWidget Chainable
     */
    protected function setPropertyFactory(FactoryInterface $factory)
    {
        $this->propertyFactory = $factory;

        return $this;
    }

    /**
     * @throws RuntimeException If the property factory was not previously set / injected.
     * @return FactoryInterface
     */
    public function propertyFactory()
    {
        if ($this->propertyFactory === null) {
            throw new RuntimeException(
                'Property factory is not set for table widget'
            );
        }

        return $this->propertyFactory;
    }

    /**
     * @param array|ArrayInterface $data The widget data.
     * @return TableWidget Chainable
     */
    public function setData($data)
    {
        parent::setData($data);

        $this->mergeDataSources($data);

        return $this;
    }

    /**
     * Retrieve the default data source filters (when setting data on an entity).
     *
     * Note: Adapted from {@see \Slim\CallableResolver}.
     *
     * @link   https://github.com/slimphp/Slim/blob/3.x/Slim/CallableResolver.php
     * @param  mixed $toResolve A callable used when merging data.
     * @return callable|null
     */
    protected function resolveDataSourceFilter($toResolve)
    {
        if (is_string($toResolve)) {
            $model = $this->proto();

            $resolved = [ $model, $toResolve ];

            // check for slim callable as "class:method"
            $callablePattern = '!^([^\:]+)\:([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)$!';
            if (preg_match($callablePattern, $toResolve, $matches)) {
                $class = $matches[1];
                $method = $matches[2];

                if ($class === 'parent') {
                    $resolved = [ $model, $class.'::'.$method ];
                }
            }

            $toResolve = $resolved;
        }

        return parent::resolveDataSourceFilter($toResolve);
    }

    /**
     * Fetch metadata from the current request.
     *
     * @return array
     */
    public function dataFromRequest()
    {
        return array_intersect_key($_GET, array_flip($this->acceptedRequestData()));
    }

    /**
     * Retrieve the accepted metadata from the current request.
     *
     * @return array
     */
    public function acceptedRequestData()
    {
        return [
            'collection_ident',
            'obj_id',
            'obj_type',
            'sortable',
            'template'
        ];
    }

    /**
     * Fetch metadata from the current object type.
     *
     * @return array
     */
    public function dataFromObject()
    {
        $objMetadata = $this->proto()->metadata();
        $adminMetadata = (isset($objMetadata['admin']) ? $objMetadata['admin'] : null);

        if (empty($adminMetadata['lists'])) {
            return [];
        }

        $collectionIdent = $this->collectionIdent();
        if (!$collectionIdent) {
            $collectionIdent = $this->collectionIdentFallback();
        }

        $objListData = isset($adminMetadata['lists'][$collectionIdent]) ?
            $adminMetadata['lists'][$collectionIdent] : [];

        $collectionConfig = [];

        if (isset($objListData['list_actions']) && isset($adminMetadata['list_actions'])) {
            $extraListActions = array_intersect(
                array_keys($adminMetadata['list_actions']),
                array_keys($objListData['list_actions'])
            );
            foreach ($extraListActions as $listIdent) {
                $objListData['list_actions'][$listIdent] = array_replace_recursive(
                    $adminMetadata['list_actions'][$listIdent],
                    $objListData['list_actions'][$listIdent]
                );
            }
        }

        if (isset($objListData['object_actions']) && isset($adminMetadata['list_object_actions'])) {
            $extraObjectActions = array_intersect(
                array_keys($adminMetadata['list_object_actions']),
                array_keys($objListData['object_actions'])
            );
            foreach ($extraObjectActions as $listIdent) {
                $objListData['object_actions'][$listIdent] = array_replace_recursive(
                    $adminMetadata['list_object_actions'][$listIdent],
                    $objListData['object_actions'][$listIdent]
                );
            }
        }

        if (isset($objListData['orders']) && isset($adminMetadata['list_orders'])) {
            $extraOrders = array_intersect(
                array_keys($adminMetadata['list_orders']),
                array_keys($objListData['orders'])
            );
            foreach ($extraOrders as $listIdent) {
                $collectionConfig['orders'][$listIdent] = array_replace_recursive(
                    $adminMetadata['list_orders'][$listIdent],
                    $objListData['orders'][$listIdent]
                );
            }
        }

        if (isset($objListData['filters']) && isset($adminMetadata['list_filters'])) {
            $extraFilters = array_intersect(
                array_keys($adminMetadata['list_filters']),
                array_keys($objListData['filters'])
            );
            foreach ($extraFilters as $listIdent) {
                $collectionConfig['filters'][$listIdent] = array_replace_recursive(
                    $adminMetadata['list_filters'][$listIdent],
                    $objListData['filters'][$listIdent]
                );
            }
        }

        if ($collectionConfig) {
            $this->mergeCollectionConfig($collectionConfig);
        }

        return $objListData;
    }

    /**
     * Sets and returns properties
     * Manages which to display, and their order, as set in object metadata
     * @return  FormPropertyWidget  Generator function
     */
    public function properties()
    {
        if ($this->properties === null || $this->parsedProperties === false) {
            $this->parsedProperties = true;

            $model = $this->proto();
            $properties = $model->metadata()->properties();

            $listProperties = null;
            if ($this->properties === null) {
                $collectionConfig = $this->collectionConfig();
                if (isset($collectionConfig['properties'])) {
                    $listProperties = array_flip($collectionConfig['properties']);
                }
            } else {
                $listProperties = array_flip($this->properties);
            }

            if ($listProperties) {
                // Replacing values of listProperties from index to actual property values
                $properties = array_replace($listProperties, $properties);
                // Get only the keys that are in listProperties from props
                $properties = array_intersect_key($properties, $listProperties);
            }

            $this->properties = $properties;
        }

        return $this->properties;
    }

    /**
     * @param boolean $sortable The sortable flag.
     * @return TableWidget Chainable
     */
    public function setSortable($sortable)
    {
        $this->sortable = !!$sortable;

        return $this;
    }

    /**
     * @return boolean
     */
    public function sortable()
    {
        return $this->sortable;
    }

    /**
     * Retrieve the property customizations for the collection.
     *
     * @return array|null
     */
    public function propertiesOptions()
    {
        if ($this->propertiesOptions === null) {
            $this->propertiesOptions = $this->defaultPropertiesOptions();
        }

        return $this->propertiesOptions;
    }

    /**
     * Retrieve the default property customizations.
     *
     * The default configset is determined by the collection ident and object type, if assigned.
     *
     * @return array|null
     */
    protected function defaultPropertiesOptions()
    {
        $collectionConfig = $this->collectionConfig();

        if (empty($collectionConfig['properties_options'])) {
            return [];
        }

        return $collectionConfig['properties_options'];
    }

    /**
     * Retrieve the view options for the given property.
     *
     * @param  string $propertyIdent The property identifier to lookup.
     * @return array
     */
    public function viewOptions($propertyIdent)
    {
        if (!$propertyIdent) {
            return [];
        }

        if ($propertyIdent instanceof PropertyInterface) {
            $propertyIdent = $propertyIdent->ident();
        }

        $options = $this->propertiesOptions();

        if (isset($options[$propertyIdent]['view_options'])) {
            return $options[$propertyIdent]['view_options'];
        } else {
            return [];
        }
    }

    /**
     * Properties to display in collection template, and their order, as set in object metadata
     *
     * @return  FormPropertyWidget         Generator function
     */
    public function collectionProperties()
    {
        $props = $this->properties();

        foreach ($props as $propertyIdent => $property) {
            $propertyMetadata = $props[$propertyIdent];

            $p = $this->propertyFactory()->create($propertyMetadata['type']);
            $p->setIdent($propertyIdent);
            $p->setData($propertyMetadata);

            $column = [
                'label' => trim($p->label())
            ];

            $column['classes'] = $this->parsePropertyCellClasses($p);
            if (is_array($column['classes'])) {
                $column['classes'] = implode(' ', array_unique($column['classes']));
            }

            if (empty($column['classes'])) {
                unset($column['classes']);
            }

            yield $column;
        }
    }

    /**
     * Filter the property before its assigned to the object row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  ModelInterface    $object        The current row's object.
     * @param  PropertyInterface $property      The current property.
     * @param  string            $propertyValue The property $key's display value.
     * @return array
     */
    protected function parsePropertyCell(
        ModelInterface $object,
        PropertyInterface $property,
        $propertyValue
    ) {
        $cell = $this->parseCollectionPropertyCell($object, $property, $propertyValue);

        $cell['classes'] = $this->parsePropertyCellClasses($property, $object);
        if (is_array($cell['classes'])) {
            $cell['classes'] = implode(' ', array_unique($cell['classes']));
        }

        if (empty($cell['classes'])) {
            unset($cell['classes']);
        }

        return $cell;
    }

    /**
     * Filter the table cell's CSS classes before the property is assigned
     * to the object row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  PropertyInterface   $property The current property.
     * @param  ModelInterface|null $object   Optional. The current row's object.
     * @return array
     */
    protected function parsePropertyCellClasses(
        PropertyInterface $property,
        ModelInterface $object = null
    ) {
        unset($object);

        $ident = $property->ident();
        $classes = [ sprintf('property-%s', $ident) ];
        $options = $this->viewOptions($ident);

        if (isset($options['classes'])) {
            if (is_array($options['classes'])) {
                $classes = array_merge($classes, $options['classes']);
            } else {
                $classes[] = $options['classes'];
            }
        }

        return $classes;
    }

    /**
     * Filter the object before its assigned to the row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  ModelInterface $object           The current row's object.
     * @param  array          $objectProperties The $object's display properties.
     * @return array
     */
    protected function parseObjectRow(ModelInterface $object, array $objectProperties)
    {
        $row = $this->parseCollectionObjectRow($object, $objectProperties);
        $row['objectActions'] = $this->objectActions();
        $row['showObjectActions'] = count($row['objectActions']);

        return $row;
    }

    /**
     * Determine if the table's object actions should be shown.
     *
     * @return boolean
     */
    public function showObjectActions()
    {
        $actions = $this->objectActions();

        return count($actions);
    }

    /**
     * Retrieve the table's object actions.
     *
     * @return array
     */
    public function objectActions()
    {
        if ($this->objectActions === null || $this->parsedObjectActions === false) {
            $this->parsedObjectActions = true;
            $this->objectActions = $this->createObjectActions();
        }

        $objectActions = [];
        if (is_array($this->objectActions)) {
            $objectActions = $this->parseAsObjectActions($this->objectActions);
        }

        return $objectActions;
    }

    /**
     * Set table's object actions.
     *
     * @param  array $actions One or more actions.
     * @return TableWidget Chainable.
     */
    public function setObjectActions(array $actions)
    {
        $this->objectActions = $actions;

        return $this;
    }

    /**
     * Build the table's object actions (row).
     *
     * Object actions should come from the collection data pointed out by the "collection_ident".
     * It is still possible to completly override those externally by setting the "object_actions"
     * with the {@see self::setObjectActions()} method.
     *
     * @return array Object actions.
     */
    public function createObjectActions()
    {
        if ($this->objectActions === null) {
            $collectionConfig = $this->collectionConfig();
            if (isset($collectionConfig['object_actions'])) {
                $actions = $collectionConfig['object_actions'];
            } else {
                $actions = [];
            }
        } else {
            $actions = $this->objectActions;
        }

        $objectActions = $this->parseActions(array_merge(
            $this->defaultObjectActions(),
            $actions
        ));

        return $objectActions;
    }

    /**
     * Parse the given actions as (row) object actions.
     *
     * @param  array $actions Actions to resolve.
     * @return array
     */
    protected function parseAsObjectActions(array $actions)
    {
        $objectActions = [];
        foreach ($actions as $action) {
            if (isset($action['url'])) {
                $action['url'] = $this->parseActionUrl($action['url'], $action);
            }

            if (isset($action['ident'])) {
                if ($action['ident'] === 'edit' && !$this->isObjEditable()) {
                    $action['active'] = false;
                } elseif ($action['ident'] === 'delete' && !$this->isObjDeletable()) {
                    $action['active'] = false;
                }
            }

            if ($action['actions']) {
                $action['actions'] = $this->parseAsObjectActions($action['actions']);
            }

            $objectActions[] = $action;
        }

        return $objectActions;
    }

    /**
     * Retrieve the table's default object actions.
     *
     * @return array
     */
    public function defaultObjectActions()
    {
        if ($this->defaultObjectActions === null) {
            $edit = [
                'label'    => new TranslationString([
                    'fr' => 'Modifier',
                    'en' => 'Modify',
                ]),
                'url'      => $this->objectEditUrl().'&obj_id={{id}}',
                'ident'    => 'edit',
                'priority' => 1
            ];
            $this->defaultObjectActions = [ $edit ];
        }

        return $this->defaultObjectActions;
    }

    /**
     * Determine if the table's empty collection actions should be shown.
     *
     * @return boolean
     */
    public function showEmptyListActions()
    {
        $actions = $this->emptyListActions();

        return count($actions);
    }

    /**
     * Retrieve the table's empty collection actions.
     *
     * @return array
     */
    public function emptyListActions()
    {
        $actions = $this->listActions();

        return array_filter($actions, function ($action) {
            return $action['empty'];
        });
    }

    /**
     * Determine if the table's collection actions should be shown.
     *
     * @return boolean
     */
    public function showListActions()
    {
        $actions = $this->listActions();

        return count($actions);
    }

    /**
     * Retrieve the table's collection actions.
     *
     * @return array
     */
    public function listActions()
    {
        if ($this->listActions === null || $this->parsedListActions === false) {
            $this->parsedListActions = true;
            $this->listActions = $this->createListActions();
        }

        return $this->listActions;
    }

    /**
     * Set table's collection actions.
     *
     * @param  array $actions One or more actions.
     * @return TableWidget Chainable.
     */
    public function setListActions(array $actions)
    {
        $this->listActions = $actions;

        return $this;
    }

    /**
     * Build the table collection actions.
     *
     * List actions should come from the collection data pointed out by the "collection_ident".
     * It is still possible to completly override those externally by setting the "list_actions"
     * with the {@see self::setListActions()} method.
     *
     * @todo Convert to Charcoal\Ui\Menu\GenericMenu
     * @return array List actions.
     */
    public function createListActions()
    {
        if ($this->listActions === null) {
            $collectionConfig = $this->collectionConfig();
            if (isset($collectionConfig['list_actions'])) {
                $actions = $collectionConfig['list_actions'];
            } else {
                $actions = [];
            }
        } else {
            $actions = $this->listActions;
        }

        $actions = array_merge($this->defaultListActions(), $actions);

        $this->actionsPriority = self::DEFAULT_ACTION_PRIORITY;

        $listActions = $this->parseAsListActions($actions);

        return $listActions;
    }

    /**
     * Parse the given actions as collection actions.
     *
     * @param  array $actions Actions to resolve.
     * @return array
     */
    protected function parseAsListActions(array $actions)
    {
        $listActions = [];
        foreach ($actions as $ident => $action) {
            $ident = $this->parseActionIdent($ident, $action);
            $action = $this->parseActionItem($action, $ident);

            if (isset($action['url'])) {
                $action['url'] = $this->parseActionUrl($action['url'], $action);
            }

            if ($action['ident'] === 'create') {
                $action['empty'] = true;
            } else {
                $action['empty'] = (isset($action['empty']) ? boolval($action['empty']) : false);
            }

            if (is_array($action['actions'])) {
                $action['actions'] = $this->parseAsListActions($action['actions']);
            }

            if (isset($listActions[$ident])) {
                $listActions[$ident] = array_replace($listActions[$ident], $action);
            } else {
                $listActions[$ident] = $action;
            }
        }

        usort($listActions, [ $this, 'sortActionsByPriority' ]);

        while (($first = reset($listActions)) && $first['isSeparator']) {
            array_shift($listActions);
        }

        while (($last = end($listActions)) && $last['isSeparator']) {
            array_pop($listActions);
        }

        return $listActions;
    }

    /**
     * Retrieve the table's default collection actions.
     *
     * @return array
     */
    public function defaultListActions()
    {
        if ($this->defaultListActions === null) {
            $this->defaultListActions = [];
        }

        return $this->defaultListActions;
    }

    /**
     * Parse the given table actions.
     *
     * @todo   Convert to Charcoal\Ui\Menu\GenericMenu
     * @param  array $actions Actions to resolve.
     * @return array List actions.
     */
    protected function parseActions(array $actions)
    {
        $this->actionsPriority = self::DEFAULT_ACTION_PRIORITY;

        $parsedActions = [];
        foreach ($actions as $ident => $action) {
            $ident = $this->parseActionIdent($ident, $action);
            $action = $this->parseActionItem($action, $ident);

            if (!isset($action['priority'])) {
                $action['priority'] = $this->actionsPriority++;
            }

            if (isset($parsedActions[$ident])) {
                $parsedActions[$ident] = array_replace($parsedActions[$ident], $action);
            } else {
                $parsedActions[$ident] = $action;
            }
        }

        usort($parsedActions, [ $this, 'sortActionsByPriority' ]);

        while (($first = reset($parsedActions)) && $first['isSeparator']) {
            array_shift($parsedActions);
        }

        while (($last = end($parsedActions)) && $last['isSeparator']) {
            array_pop($parsedActions);
        }

        return $parsedActions;
    }

    /**
     * Parse the given table action identifier.
     *
     * @param  string $ident  The action identifier.
     * @param  mixed  $action The action structure.
     * @return string Resolved action identifier.
     */
    protected function parseActionIdent($ident, $action)
    {
        if (isset($action['ident'])) {
            $ident = $action['ident'];
        }

        return $ident;
    }

    /**
     * Parse the given table action structure.
     *
     * @todo   Convert to Charcoal\Ui\Menu\GenericMenu
     * @param  mixed  $action The action structure.
     * @param  string $ident  The action identifier.
     * @return array Resolved action structure.
     */
    protected function parseActionItem($action, $ident)
    {
        if ($action === '|') {
            $action = $this->defaultActionStruct();
            $action['isSeparator'] = true;
        } elseif (is_array($action)) {
            // Normalize structure keys
            foreach ($action as $key => $val) {
                $attr = $this->getter($key);
                if ($key !== $attr) {
                    $action[$attr] = $val;
                    unset($action[$key]);
                }
            }

            if (isset($action['ident'])) {
                if ($action['ident'] === 'create' && !$this->isObjCreatable()) {
                    $action['active'] = false;
                }
            } else {
                $action['ident'] = $ident;
            }

            if (!isset($action['buttonType'])) {
                switch ($action['ident']) {
                    case 'create':
                        $action['buttonType'] = 'info';
                        break;

                    case 'edit':
                        $action['buttonType'] = 'primary';
                        break;

                    default:
                        $action['buttonType'] = 'default';
                        break;
                }
            }

            if (isset($action['label']) && TranslationString::isTranslatable($action['label'])) {
                $action['label'] = new TranslationString($action['label']);
            } elseif ($action['ident']) {
                $action['label'] = ucwords(str_replace([ '.', '_' ], ' ', $action['ident']));
            } else {
                $action['label'] = null;
                $action['active'] = false;
            }

            if (isset($action['url']) && TranslationString::isTranslatable($action['url'])) {
                $action['url'] = new TranslationString($action['url']);
                $action['isText'] = false;
                $action['isLink'] = true;
                $action['isButton'] = false;
            } else {
                $action['url'] = '#';
            }

            if (isset($action['actions']) && is_array($action['actions'])) {
                $action['actions'] = $this->parseActions($action['actions']);
                $action['hasActions'] = boolval($action['actions']);
            } else {
                $action['actions'] = [];
                $action['hasActions'] = false;
            }

            $action = array_replace($this->defaultActionStruct(), $action);
        }

        return $action;
    }

    /**
     * Parse the given table action URL.
     *
     * @param  string                 $url      The action's URL.
     * @param  mixed                  $action   The action structure.
     * @param  ViewableInterface|null $renderer The renderer.
     * @return array Resolved action structure.
     */
    protected function parseActionUrl($url, $action = null, ViewableInterface $renderer = null)
    {
        unset($action);
        if ($renderer === null) {
            $renderer = isset($this->currentObj) ? $this->currentObj : $this->proto();
        }

        if ($url instanceof TranslationString) {
            $url = $url->fallback();
        }

        $url = $renderer->renderTemplate($url);

        if ($url && strpos($url, ':') === false && !in_array($url[0], [ '/', '#', '?' ])) {
            $url = $this->adminUrl().$url;
        }

        return $url;
    }

    /**
     * Retrieve the default action structure.
     *
     * @return array
     */
    protected function defaultActionStruct()
    {
        return [
            'ident'       => null,
            'priority'    => null,
            'active'      => true,
            'empty'       => false,
            'label'       => null,
            'showLabel'   => true,
            'icon'        => null,
            'glyphicon'   => false,
            'url'         => null,
            'isText'      => false,
            'isLink'      => false,
            'isButton'    => true,
            'isHeader'    => false,
            'isSeparator' => false,
            'buttonType'  => null,
            'splitButton' => false,
            'hasActions'  => false,
            'actions'     => [],
        ];
    }

    /**
     * @return PaginationWidget
     */
    public function paginationWidget()
    {
        $pagination = new PaginationWidget([
            'logger' => $this->logger
        ]);
        $pagination->setData([
            'page'         => $this->page(),
            'num_per_page' => $this->numPerPage(),
            'num_total'    => $this->numTotal()
        ]);

        return $pagination;
    }

    /**
     * @return array
     */
    public function sublistActions()
    {
        return [
            [
                'label' => 'Inline Edit',
                'ident' => 'inline-edit'
            ],
            [
                'label' => 'Delete',
                'ident' => 'Delete'
            ]
        ];
    }

    /**
     * @param boolean $show The show flag.
     * @return TableWidget Chainable
     */
    public function setShowTableHeader($show)
    {
        $this->showTableHeader = !!$show;

        return $this;
    }

    /**
     * @return boolean
     */
    public function showTableHeader()
    {
        return $this->showTableHeader;
    }

    /**
     * @param boolean $show The show flag.
     * @return TableWidget Chainable
     */
    public function setShowTableHead($show)
    {
        $this->showTableHead = !!$show;

        return $this;
    }

    /**
     * @return boolean
     */
    public function showTableHead()
    {
        return $this->showTableHead;
    }

    /**
     * @param boolean $show The show flag.
     * @return TableWidget Chainable
     */
    public function setShowTableFoot($show)
    {
        $this->showTableFoot = !!$show;

        return $this;
    }

    /**
     * @return boolean
     */
    public function showTableFoot()
    {
        return $this->showTableFoot;
    }

    /**
     * @return string
     */
    public function jsActionPrefix()
    {
        return ($this->currentObj) ? 'js-obj' : 'js-list';
    }

    /**
     * Generate URL for editing an object
     * @return string
     */
    public function objectEditUrl()
    {
        return 'object/edit?main_menu={{ main_menu }}&obj_type='.$this->objType();
    }

    /**
     * Generate URL for creating an object
     * @return string
     */
    public function objectCreateUrl()
    {
        $actions = $this->listActions();
        if ($actions) {
            foreach ($actions as $action) {
                if (isset($action['ident']) && $action['ident'] === 'create') {
                    if (isset($action['url'])) {
                        $model = $this->proto();
                        if ($model->view() !== null) {
                            $action['url'] = $model->render((string)$action['url']);
                        } else {
                            $action['url'] = preg_replace('~{{\s*id\s*}}~', $this->currentObjId, $action['url']);
                        }

                        return $action['url'];
                    }
                }
            }
        }

        return $this->objectEditUrl();
    }

    /**
     * Determine if the object can be created.
     *
     * If TRUE, the "Create" button is shown. Objects can still be
     * inserted programmatically or via direct action on the database.
     *
     * @return boolean
     */
    public function isObjCreatable()
    {
        $model = $this->proto();
        $method = [ $model, 'isCreatable' ];

        if (is_callable($method)) {
            return call_user_func($method);
        }

        return true;
    }

    /**
     * Determine if the object can be modified.
     *
     * If TRUE, the "Modify" button is shown. Objects can still be
     * updated programmatically or via direct action on the database.
     *
     * @return boolean
     */
    public function isObjEditable()
    {
        $model = ($this->currentObj) ? $this->currentObj : $this->proto();
        $method = [ $model, 'isEditable' ];

        if (is_callable($method)) {
            return call_user_func($method);
        }

        return true;
    }

    /**
     * Determine if the object can be deleted.
     *
     * If TRUE, the "Delete" button is shown. Objects can still be
     * deleted programmatically or via direct action on the database.
     *
     * @return boolean
     */
    public function isObjDeletable()
    {
        $model = ($this->currentObj) ? $this->currentObj : $this->proto();
        $method = [ $model, 'isDeletable' ];

        if (is_callable($method)) {
            return call_user_func($method);
        }

        return true;
    }

    /**
     * To be called with uasort()
     *
     * @param  array $a First action object to sort.
     * @param  array $b Second action object to sort.
     * @return integer
     */
    protected static function sortActionsByPriority(array $a, array $b)
    {
        $a = isset($a['priority']) ? $a['priority'] : 0;
        $b = isset($b['priority']) ? $b['priority'] : 0;

        return ($a < $b) ? (-1) : 1;
    }
}
