<?php

namespace Charcoal\Admin\Property\Input;

// Dependency from 'charcoal-view'
use \Charcoal\View\ViewableInterface;

// Local Dependency
use \Charcoal\Admin\Ui\ImageAttributesTrait;
use \Charcoal\Admin\Property\Input\FileInput;

/**
 * Image Property Input
 */
class ImageInput extends FileInput
{
    use ImageAttributesTrait;

    /**
     * @return string|null
     */
    public function filePreview()
    {
        $value = $this->inputVal();
        if ($value) {
            return $this->view()->render('charcoal/admin/property/input/image/preview', $this);
        }

        return '';
    }

    /**
     * Retrieve the default label for the file picker button.
     *
     * @return \Charcoal\Translator\Translation|string|null
     */
    protected function defaultChooseButtonLabel()
    {
        return $this->translator()->translation('Choose Image…');
    }

    /**
     * Retrieve the default label for the file removal button.
     *
     * @return \Charcoal\Translator\Translation|string|null
     */
    protected function defaultRemoveButtonLabel()
    {
        return $this->translator()->translation('Remove Image');
    }

    /**
     * Set the CSS classes to apply on the image.
     *
     * @param  string|string[] $classes A space-separated list of CSS classes.
     * @return ImageDisplay Chainable
     */
    public function setClassAttr($classes)
    {
        if (is_array($classes)) {
            $classes = implode(' ', $classes);
        }

        $this->classAttr = $classes;

        return $this;
    }

    /**
     * Retrieve the CSS classes for the HTML `class` attribute.
     *
     * @return string
     */
    public function classAttr()
    {
        return $this->classAttr;
    }
}
