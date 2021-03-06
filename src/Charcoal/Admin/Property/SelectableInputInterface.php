<?php

namespace Charcoal\Admin\Property;

/**
 * Defines an input property for picking one or more values
 * from an array of choices.
 */
interface SelectableInputInterface
{
    /**
     * Retrieve the selectable options.
     *
     * @return Generator|array
     */
    public function choices();

    /**
     * Determine if the provided option is a selected value.
     *
     * @param  mixed $choice The choice to check.
     * @return boolean
     */
    public function isChoiceSelected($choice);
}
