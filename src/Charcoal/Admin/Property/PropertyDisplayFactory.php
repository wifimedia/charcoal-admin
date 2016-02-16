<?php

namespace Charcoal\Admin\Property;

// Module `charcoal-factory` dependencies
use \Charcoal\Factory\ResolverFactory;

/**
 *
 */
class PropertyDisplayFactory extends ResolverFactory
{

    /**
     * @param array $data
     */
    public function baseClass()
    {
        return '\Charcoal\Admin\Property\PropertyDisplayInterface';
    }

    /**
     * @return string
     */
    public function resolverSuffix()
    {
        return 'Display';
    }
}