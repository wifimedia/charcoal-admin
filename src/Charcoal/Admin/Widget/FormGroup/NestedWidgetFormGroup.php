<?php

namespace Charcoal\Admin\Widget\FormGroup;

use RuntimeException;

// From Pimple
use Pimple\Container;

// From 'charcoal-factory'
use Charcoal\Factory\FactoryInterface;

// From 'charcoal-ui'
use Charcoal\Ui\FormGroup\AbstractFormGroup;

// From 'charcoal-admin'
use Charcoal\Admin\Ui\NestedWidgetContainerInterface;
use Charcoal\Admin\Ui\NestedWidgetContainerTrait;

/**
 * Nested Widget Form Group
 *
 * Allows UI widgets to be embedded into a form group and rendered using the current object, if any.
 *
 * Based on {@link https://bitbucket.org/beneroch/charcoal-utils/src/faa819a/src/Utils/Widget/FormGroup/WidgetFormGroup.php `WidgetFormGroup`}
 * from _beneroch/charcoal-utils_.
 *
 * Usage:
 * ```json
 * {
 *     "title": "My Nested Collection",
 *     "type": "charcoal/admin/widget/form-group/nested-widget",
 *     "widget_data": {
 *         "type": "charcoal/admin/widget/table",
 *         "obj_type": "foobar/model/item",
 *         "collection_ident": "grouped",
 *         "sortable": true
 *     },
 *     "renderable_data": {
 *         "collection_config": {
 *             "filters": [
 *                 {
 *                     "property": "category",
 *                     "val": "{{ id }}"
 *                 }
 *             ],
 *             "list_actions": [
 *                 {
 *                     "ident": "create",
 *                     "url": "object/edit?obj_type=foobar/model/item&form_data[category]={{ id }}"
 *                 }
 *             ]
 *         }
 *     }
 * }
 * ```
 */
class NestedWidgetFormGroup extends AbstractFormGroup implements
    NestedWidgetContainerInterface
{
    use NestedWidgetContainerTrait;

    /**
     * @var string
     */
    private $widgetId;

    /**
     * Store the widget factory instance for the current class.
     *
     * @var FactoryInterface
     */
    private $widgetFactory;

    /**
     * Whether notes shoudl be display before or after the form fields.
     *
     * @var boolean
     */
    private $showNotesAbove = false;

    /**
     * @param  Container $container The DI container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        $this->setWidgetFactory($container['widget/factory']);

        // Satisfies {@see Charcoal\View\ViewableInterface} dependencies
        $this->setView($container['view']);
    }

    /**
     * Set the widget factory.
     *
     * @param FactoryInterface $factory The factory to create widgets.
     * @return self
     */
    protected function setWidgetFactory(FactoryInterface $factory)
    {
        $this->widgetFactory = $factory;

        return $this;
    }

    /**
     * Retrieve the widget factory.
     *
     * @throws RuntimeException If the widget factory was not previously set.
     * @return FactoryInterface
     */
    protected function widgetFactory()
    {
        if ($this->widgetFactory === null) {
            throw new RuntimeException(sprintf(
                'Widget Factory is not defined for "%s"',
                get_class($this)
            ));
        }

        return $this->widgetFactory;
    }

    /**
     * Retrieve the widget's ID.
     *
     * @return string
     */
    public function widgetId()
    {
        if (!$this->widgetId) {
            $this->widgetId = uniqid();
        }

        return $this->widgetId;
    }

    /**
     * Set the widget's ID.
     *
     * @param  string $widgetId The widget identifier.
     * @return self
     */
    public function setWidgetId($widgetId)
    {
        $this->widgetId = $widgetId;

        return $this;
    }

    /**
     * @return Translation|string|null
     */
    public function description()
    {
        return $this->renderTemplate((string)parent::description());
    }

    /**
     * @return Translation|string|null
     */
    public function notes()
    {
        return $this->renderTemplate((string)parent::notes());
    }

    /**
     * Show/hide the widget's notes.
     *
     * @param  boolean|string $show Whether to show or hide notes.
     * @return FormGroupWidget Chainable
     */
    public function setShowNotes($show)
    {
        $this->showNotesAbove = ($show === 'above');

        return parent::setShowNotes($show);
    }

    /**
     * @return boolean
     */
    public function showNotesAbove()
    {
        return $this->showNotesAbove;
    }
}