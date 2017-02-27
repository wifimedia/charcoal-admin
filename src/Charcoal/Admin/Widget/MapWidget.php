<?php

namespace Charcoal\Admin\Widget;

use InvalidArgumentException;

// From 'charcoal-core'
use Charcoal\Model\ModelInterface;

// From 'charcoal-ui'
use Charcoal\Ui\FormGroup\FormGroupInterface;
use Charcoal\Ui\FormGroup\FormGroupTrait;

// From 'charcoal-admin'
use Charcoal\Admin\AdminWidget;

/**
 * Map Widget displays a google map widget, with UI to add polygons, lines and points.
 *
 * Most of this widget functionalities are in javascript.
 */
class MapWidget extends AdminWidget implements FormGroupInterface
{
    use FormGroupTrait;

    /**
     * @var ModelInterface $obj
     */
    protected $obj;

    /**
     * @var object styles (concerning the marker style)
     */
    private $styles;

    /**
     * The ident of the object's property for the latitude.
     * @var string $latProperty
     */
    private $latProperty;

     /**
      * The ident of the object's property for the longitude.
      * @var string $latProperty
      */
    private $lonProperty;

    /**
     * @param string $p The latitude property ident.
     * @return MapWidget Chainable
     */
    public function setLatProperty($p)
    {
        $this->latProperty = $p;
        return $this;
    }

    /**
     * @return string
     */
    public function latProperty()
    {
        return $this->latProperty;
    }

     /**
      * @param string $p The longitude property ident.
      * @return MapWidget Chainable
      */
    public function setLonProperty($p)
    {
        $this->lonProperty = $p;
        return $this;
    }

    /**
     * @return string
     */
    public function lonProperty()
    {
        return $this->lonProperty;
    }

    /**
     * Get the latitude, from the object's lat property.
     * @return float
     */
    public function lat()
    {
        if (!$this->obj() || !$this->latProperty()) {
            return false;
        }
        $obj = $this->obj();
        return call_user_func([$obj, $this->latProperty()]);
    }

    /**
     * Get the longitude, from the object's lon property.
     * @return float
     */
    public function lon()
    {
        if (!$this->obj() || !$this->lonProperty()) {
            return false;
        }
        $obj = $this->obj();
        return call_user_func([$obj, $this->lonProperty()]);
    }

    /**
     * Get the widget's associated object.
     *
     * @throws InvalidArgumentException If the object type or ID are invalid or missing.
     * @return ModelInterface
     */
    public function obj()
    {
        if ($this->obj === null) {
            $objId   = filter_input(INPUT_GET, 'obj_id', FILTER_SANITIZE_STRING);
            $objType = filter_input(INPUT_GET, 'obj_type', FILTER_SANITIZE_STRING);
            if ($objId && $objType) {
                $obj = $this->modelFactory()->create($objType);
                $obj->load($objId);

                $this->obj = $obj;
            } else {
                throw new InvalidArgumentException('Missing Object Type or ID');
            }
        }

        return $this->obj;
    }

    /**
     * Title and subtitle getter/setters
     *
     * @param mixed $subtitle The map widget subtitle.
     * @return MapWidget Chainable
     */
    public function setSubtitle($subtitle)
    {
        $this->subtitle = $this->translator()->translation($subtitle);

        return $this;
    }

    /**
     * @return Translation
     */
    public function subtitle()
    {
        return $this->subtitle;
    }

    /**
     * @param mixed $title The map widget title.
     * @return MapWidget Chainable
     */
    public function setTitle($title)
    {
        $this->title = $this->translator()->translation($title);

        return $this;
    }

    /**
     * @return Translation
     */
    public function title()
    {
        if ($this->title === null) {
            $this->setTitle($this->translator()->translation('Map'));
        }

        return $this->title;
    }

    /**
     * @return string
     */
    public function widgetType()
    {
        return 'charcoal/admin/widget/map';
    }
}
