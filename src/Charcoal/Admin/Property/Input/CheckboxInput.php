<?php

namespace Charcoal\Admin\Property\Input;

use \Charcoal\Admin\Property\AbstractPropertyInput;

/**
 * Checkbox property input.
 */
class CheckboxInput extends AbstractPropertyInput
{
    /**
     * @return boolean
     */
    public function checked()
    {
        return !!$this->p()->val();
    }
}