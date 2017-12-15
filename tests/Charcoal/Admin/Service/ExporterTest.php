<?php

namespace Charcoal\Tests\Admin;

use PHPUnit_Framework_TestCase;

use Psr\Log\NullLogger;

use Pimple\Container;

use Charcoal\Admin\Service\Exporter;

use Charcoal\Factory\GenericFactory;

use Charcoal\Tests\Admin\ContainerProvider;

class ExporterTest extends PHPUnit_Framework_TestCase
{
    private $obj;

    public function setUp()
    {
        $container = new Container();
        $containerProvider = new ContainerProvider();
        $containerProvider->registerPropertyFactory($container);
        $containerProvider->registerModelFactory($container);
        $this->obj = new Exporter([
           'logger'        => $container['logger'],
           'factory'       => $container['model/factory'],
           'translator'    => $container['translator'],
           'obj_type'      => 'charcoal/admin/user',
           'export_ident'  => 'y',
           'propertyFactory'=> $container['property/factory']
        ]);
    }

    public function testExport()
    {
        $this->assertTrue(true);
    }
}
