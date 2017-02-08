<?php

namespace Charcoal\Admin\Property\Input;

use \InvalidArgumentException;

use \Charcoal\Admin\Property\AbstractPropertyInput;

/**
 * Number Property Input Type
 */
class NumberInput extends AbstractPropertyInput
{
    /**
     * @var integer $min
     */
    private $min = 0;

    /**
     * @var integer $max
     */
    private $max = 0;

    /**
     * @var float $step
     */
    private $step = 0;

    /**
     * @param integer $min The minimum.
     * @throws InvalidArgumentException If the argument is not a number.
     * @return Text Chainable
     */
    public function setMin($min)
    {
        if (!is_numeric($min)) {
            throw new InvalidArgumentException(
                'Minimum length needs to be an integer'
            );
        }
        $this->min = (int)$min;
        return $this;
    }

    /**
     * @return integer
     */
    public function min()
    {
        return $this->min;
    }

    /**
     * @param integer $max The maximum.
     * @throws InvalidArgumentException If the argument is not a number.
     * @return Text Chainable
     */
    public function setMax($max)
    {
        if (!is_numeric($max)) {
            throw new InvalidArgumentException(
                'Maximum length needs to be an integer'
            );
        }
        $this->max = (int)$max;
        return $this;
    }

    /**
     * @return integer
     */
    public function max()
    {
        return $this->max;
    }

    /**
     * @param integer $step The step attribute.
     * @throws InvalidArgumentException If the value is not a number.
     * @return Text Chainable
     */
    public function setStep($step)
    {
        if (!is_numeric($step)) {
            throw new InvalidArgumentException(
                'Step size needs to be a float'
            );
        }
        $this->step = (float)$step;
        return $this;
    }

    /**
     * @return integer
     */
    public function step()
    {
        return $this->step;
    }
}
