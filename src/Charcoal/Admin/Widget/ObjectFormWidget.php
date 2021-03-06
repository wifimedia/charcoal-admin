<?php

namespace Charcoal\Admin\Widget;

use \UnexpectedValueException;
use \InvalidArgumentException;

// From Pimple
use \Pimple\Container;

// From 'charcoal-ui'
use \Charcoal\Ui\FormGroup\FormGroupInterface;

// From 'charcoal-admin'
use \Charcoal\Admin\Widget\FormWidget;
use \Charcoal\Admin\Widget\FormPropertyWidget;

use \Charcoal\Admin\Ui\ObjectContainerInterface;
use \Charcoal\Admin\Ui\ObjectContainerTrait;

/**
 * Object Admin Form
 */
class ObjectFormWidget extends FormWidget implements
    ObjectContainerInterface
{
    use ObjectContainerTrait;

    /**
     * @var string
     */
    protected $formIdent;

    /**
     * @var array
     */
    protected $formData;

    /**
     * @return string
     */
    public function widgetType()
    {
        return 'charcoal/admin/widget/objectForm';
    }

    /**
     * Retrieve the default label for the form submission button.
     *
     * @return Translation|string|null
     */
    public function defaultSubmitLabel()
    {
        if ($this->objId()) {
            return $this->translator()->translation('Update');
        }

        return parent::defaultSubmitLabel();
    }

    /**
     * @param array $data The widget data.
     * @return ObjectForm Chainable
     */
    public function setData(array $data)
    {
        parent::setData($data);

        $this->mergeDataSources($data);

        return $this;
    }

    /**
     * Set the key for the form structure to use.
     *
     * @param  string $formIdent The form identifier.
     * @throws InvalidArgumentException If the identifier is not a string.
     * @return ObjectForm Chainable
     */
    public function setFormIdent($formIdent)
    {
        if (!is_string($formIdent)) {
            throw new InvalidArgumentException(
                'Form identifier must be a string'
            );
        }

        $this->formIdent = $formIdent;

        return $this;
    }

    /**
     * Retrieve a key for the form structure to use.
     *
     * If the form key is undefined, resolve a fallback.
     *
     * @return string
     */
    public function formIdentFallback()
    {
        $metadata = $this->obj()->metadata();

        if (isset($metadata['admin']['default_form'])) {
            return $metadata['admin']['default_form'];
        }

        return '';
    }

    /**
     * Retrieve the key for the form structure to use.
     *
     * @return string
     */
    public function formIdent()
    {
        return $this->formIdent;
    }

    /**
     * @param string $url The next URL.
     * @throws InvalidArgumentException If argument is not a string.
     * @return ActionInterface Chainable
     */
    public function setNextUrl($url)
    {
        if (!is_string($url)) {
            throw new InvalidArgumentException(
                'URL needs to be a string'
            );
        }

        if (!$this->obj()) {
            $this->nextUrl = $url;

            return $this;
        }

        $obj = $this->obj();
        if ($obj->view()) {
            $this->nextUrl = $obj->render($url);
        }

        return $this;
    }

    /**
     * Form action (target URL)
     *
     * @return string Relative URL
     */
    public function action()
    {
        $action = parent::action();
        if (!$action) {
            $obj = $this->obj();
            $objId = $obj->id();
            if ($objId) {
                return 'object/update';
            } else {
                return 'object/save';
            }
        } else {
            return $action;
        }
    }

    /**
     * Retrieve the object's properties as form controls.
     *
     * @param  array $group An optional group to use.
     * @throws UnexpectedValueException If a property data is invalid.
     * @return FormPropertyWidget[]|Generator
     */
    public function formProperties(array $group = null)
    {
        $obj   = $this->obj();
        $props = $obj->metadata()->properties();

        // We need to sort form properties by form group property order if a group exists
        if (!empty($group)) {
            $props = array_merge(array_flip($group), $props);
        }

        foreach ($props as $propertyIdent => $propertyMetadata) {
            if (method_exists($obj, 'filterPropertyMetadata')) {
                $propertyMetadata = $obj->filterPropertyMetadata($propertyMetadata, $propertyIdent);
            }

            if (!is_array($propertyMetadata)) {
                throw new UnexpectedValueException(sprintf(
                    'Invalid property data for "%1$s", received %2$s',
                    $propertyIdent,
                    (is_object($propertyMetadata) ? get_class($propertyMetadata) : gettype($propertyMetadata))
                ));
            }

            $formProperty = $this->createFormProperty();
            $formProperty->setViewController($this->viewController());
            $formProperty->setPropertyIdent($propertyIdent);
            $formProperty->setData($propertyMetadata);
            $formProperty->setPropertyVal($obj[$propertyIdent]);

            if ($formProperty->hidden()) {
                $this->hiddenProperties[$propertyIdent] = $formProperty;
            } else {
                yield $propertyIdent => $formProperty;
            }
        }
    }

    /**
     * Retrieve an object property as a form control.
     *
     * @param  string $propertyIdent An optional group to use.
     * @throws InvalidArgumentException If the property identifier is not a string.
     * @throws UnexpectedValueException If a property data is invalid.
     * @return FormPropertyWidget
     */
    public function formProperty($propertyIdent)
    {
        if (!is_string($propertyIdent)) {
            throw new InvalidArgumentException(
                'Property ident must be a string'
            );
        }

        $propertyMetadata = $this->obj()->metadata()->property($propertyIdent);

        if (!is_array($propertyMetadata)) {
            throw new UnexpectedValueException(sprintf(
                'Invalid property data for "%1$s", received %2$s',
                $propertyIdent,
                (is_object($propertyMetadata) ? get_class($propertyMetadata) : gettype($propertyMetadata))
            ));
        }

        $p = $this->createFormProperty();
        $p->setViewController($this->viewController());
        $p->setPropertyIdent($propertyIdent);
        $p->setData($propertyMetadata);

        return $p;
    }

    /**
     * Set the form's auxiliary data.
     *
     * This method is called via {@see self::setData()} if a "form_data" parameter
     * is present on the HTTP request.
     *
     * @param array $data Data.
     * @return ObjectFormWidget Chainable.
     */
    public function setFormData(array $data)
    {
        $objData = $this->objData();
        $merged = array_replace_recursive($objData, $data);

        // Remove null values
        $merged = array_filter($merged, function ($val) {
            if ($val === null) {
                return false;
            }

            return true;
        });

        $this->formData = $merged;
        $this->obj()->setData($merged);

        return $this;
    }

    /**
     * Retrieve the form's auxiliary  data.
     *
     * @return array
     */
    public function formData()
    {
        if (!$this->formData) {
            $this->formData = $this->objData();
        }

        return $this->formData;
    }

    /**
     * Object data.
     * @return array Object data.
     */
    public function objData()
    {
        return $this->obj()->data();
    }

    /**
     * Retrieve the widget's data options for JavaScript components.
     *
     * @return array
     */
    public function widgetDataForJs()
    {
        return [
            'obj_id'        => $this->objId(),
            'obj_type'      => $this->objType(),
            'form_selector' => '#'.$this->widgetId(),
            'tab'           => $this->isTabbable(),
        ];
    }

    /**
     * @param Container $container The DI container.
     * @return void
     */
    protected function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        // Fill ObjectContainerInterface dependencies
        $this->setModelFactory($container['model/factory']);
    }

    /**
     * Retrieve the default data sources (when setting data on an entity).
     *
     * @return string[]
     */
    protected function defaultDataSources()
    {
        return [ static::DATA_SOURCE_REQUEST, static::DATA_SOURCE_OBJECT ];
    }

    /**
     * Retrieve the default data source filters (when setting data on an entity).
     *
     * @return array
     */
    protected function defaultDataSourceFilters()
    {
        return [
            'request' => null,
            'object'  => 'array_replace_recursive'
        ];
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
            $obj = $this->obj();

            $resolved = [ $obj, $toResolve ];

            // check for slim callable as "class:method"
            $callablePattern = '!^([^\:]+)\:([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)$!';
            if (preg_match($callablePattern, $toResolve, $matches)) {
                $class = $matches[1];
                $method = $matches[2];

                if ($class === 'parent') {
                    $resolved = [ $obj, $class.'::'.$method ];
                }
            }

            $toResolve = $resolved;
        }

        return parent::resolveDataSourceFilter($toResolve);
    }

    /**
     * Retrieve the accepted metadata from the current request.
     *
     * @return array
     */
    protected function acceptedRequestData()
    {
        return array_merge(
            parent::acceptedRequestData(),
            [ 'obj_type', 'obj_id', 'template' ]
        );
    }

    /**
     * Fetch metadata from the current object type.
     *
     * @return array
     */
    protected function dataFromObject()
    {
        $obj           = $this->obj();
        $objMetadata   = $obj->metadata();
        $adminMetadata = (isset($objMetadata['admin']) ? $objMetadata['admin'] : null);

        $formIdent = $this->formIdent();
        if (!$formIdent) {
            $formIdent = $this->formIdentFallback();
        }

        if ($formIdent && $obj->view()) {
            $formIdent = $obj->render($formIdent);
        }

        if (isset($adminMetadata['forms'][$formIdent])) {
            $objFormData = $adminMetadata['forms'][$formIdent];
        } else {
            $objFormData = [];
        }

        if (isset($objFormData['groups']) && isset($adminMetadata['form_groups'])) {
            $extraFormGroups = array_intersect(
                array_keys($adminMetadata['form_groups']),
                array_keys($objFormData['groups'])
            );
            foreach ($extraFormGroups as $groupIdent) {
                $objFormData['groups'][$groupIdent] = array_replace_recursive(
                    $adminMetadata['form_groups'][$groupIdent],
                    $objFormData['groups'][$groupIdent]
                );
            }
        }

        if (isset($objFormData['sidebars']) && isset($adminMetadata['form_sidebars'])) {
            $extraFormSidebars = array_intersect(
                array_keys($adminMetadata['form_sidebars']),
                array_keys($objFormData['sidebars'])
            );
            foreach ($extraFormSidebars as $sidebarIdent) {
                $objFormData['sidebars'][$sidebarIdent] = array_replace_recursive(
                    $adminMetadata['form_sidebars'][$sidebarIdent],
                    $objFormData['sidebars'][$sidebarIdent]
                );
            }
        }

        return $objFormData;
    }

    /**
     * Parse a form group.
     *
     * @param  string                   $groupIdent The group identifier.
     * @param  array|FormGroupInterface $group      The group object or structure.
     * @throws InvalidArgumentException If the identifier is not a string or the group is invalid.
     * @return FormGroupInterface
     */
    protected function parseFormGroup($groupIdent, $group)
    {
        $group = parent::parseFormGroup($groupIdent, $group);

        if (method_exists($this->obj(), 'filterAdminFormGroup')) {
            $group = $this->obj()->filterAdminFormGroup($group, $groupIdent);
        }

        return $group;
    }

    /**
     * Create a new form group widget.
     *
     * @see    \Charcoal\Ui\Form\FormTrait::createFormGroup()
     * @param  array|null $data Optional. The form group data to set.
     * @return FormGroupInterface
     */
    protected function createFormGroup(array $data = null)
    {
        if (isset($data['type'])) {
            $type = $data['type'];
        } else {
            $type = $this->defaultGroupType();
        }

        $group = $this->formGroupFactory()->create($type);
        $group->setForm($this);

        if ($group instanceof ObjectContainerInterface) {
            if (empty($group->objType())) {
                $group->setObjType($this->objType());
            }

            if (empty($group->objId()) && !empty($this->objId())) {
                $group->setObjId($this->objId());
            }
        }

        if ($data !== null) {
            $group->setData($data);
        }

        return $group;
    }

    /**
     * Update the given form group widget.
     *
     * @see    \Charcoal\Ui\Form\FormTrait::updateFormGroup()
     * @param  FormGroupInterface $group      The form group to update.
     * @param  array|null         $groupData  Optional. The new group data to apply.
     * @param  string|null        $groupIdent Optional. The new group identifier.
     * @return FormGroupInterface
     */
    protected function updateFormGroup(
        FormGroupInterface $group,
        array $groupData = null,
        $groupIdent = null
    ) {
        $group->setForm($this);

        if ($groupIdent !== null) {
            $group->setIdent($groupIdent);
        }

        if ($group instanceof ObjectContainerInterface) {
            if (empty($group->objType())) {
                $group->setObjType($this->objType());
            }

            if (empty($group->objId()) && !empty($this->objId())) {
                $group->setObjId($this->objId());
            }
        }

        if ($groupData !== null) {
            $group->setData($groupData);
        }

        return $group;
    }
}
