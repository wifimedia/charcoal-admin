<?php

namespace Charcoal\Admin\Property\Input;

use \RuntimeException;
use \UnexpectedValueException;

// From Pimple
use \Pimple\Container;

// From 'charcoal-factory'
use \Charcoal\Factory\FactoryInterface;

// From 'charcoal-admin'
use \Charcoal\Admin\Property\AbstractPropertyInput;

/**
 * Static Control Value Property
 *
 * {@todo Note:} This input should be replaced with {@see \Charcoal\Admin\Widget\FormPropertyWidget} modified to support
 * {@see \Charcoal\Admin\Property\AbstractPropertyDisplay} natively.
 */
class ReadonlyInput extends AbstractPropertyInput
{
    /**
     * Whether the input property has a value.
     *
     * @var boolean|null
     */
    protected $hasValue;

    /**
     * Store the factory instance for the current class.
     *
     * @var FactoryInterface
     */
    private $propertyDisplayFactory;

    /**
     * @param Container $container Pimple DI container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        $this->setPropertyDisplayFactory($container['property/display/factory']);
    }

    /**
     * Set a property display factory.
     *
     * @param FactoryInterface $factory The property display factory,
     *     to create displayable property values.
     * @return self
     */
    protected function setPropertyDisplayFactory(FactoryInterface $factory)
    {
        $this->propertyDisplayFactory = $factory;

        return $this;
    }

    /**
     * Retrieve the property display factory.
     *
     * @throws RuntimeException If the property display factory was not previously set.
     * @return FactoryInterface
     */
    public function propertyDisplayFactory()
    {
        if (!isset($this->propertyDisplayFactory)) {
            throw new RuntimeException(
                sprintf('Property Display Factory is not defined for "%s"', get_class($this))
            );
        }

        return $this->propertyDisplayFactory;
    }

    /**
     * @uses   AbstractProperty::inputVal() Must handle string sanitization of value.
     * @throws UnexpectedValueException If the value is invalid.
     * @return string
     */
    public function displayVal()
    {
        if ($this->hasValue === null) {
            $this->inputVal();
        }

        if (!$this->hasValue) {
            return '';
        }

        $property    = $this->p();
        $displayType = $property->displayType();

        $display = $this->propertyDisplayFactory()->create($displayType);
        $display->setDisplayType($displayType);
        $display->setProperty($property);
        $display->setData($property->metadata());
        $display->setPropertyVal($this->propertyVal());

        return $this->view()->renderTemplate($displayType, $display);
    }

    /**
     * @uses   AbstractProperty::inputVal() Must handle string sanitization of value.
     * @throws UnexpectedValueException If the value is invalid.
     * @return string
     */
    public function inputVal()
    {
        $prop = $this->p();
        $val  = $prop->displayVal($this->propertyVal(), [
            'lang' => $this->lang()
        ]);

        if ($val === null) {
            $this->hasValue = false;

            return '';
        }

        if (!is_scalar($val)) {
            throw new UnexpectedValueException(
                sprintf(
                    'Input value must be a string, received %s',
                    (is_object($val) ? get_class($val) : gettype($val))
                )
            );
        }

        $this->hasValue = true;

        return $val;
    }
}
