<?php

namespace Charcoal\Tests\Admin\Widget;

use PHPUnit_Framework_TestCase;

use Pimple\Container;

// From Slim
use Slim\Http\Environment;
use Slim\Http\Request;
use Slim\Http\Response;

use Charcoal\Admin\Widget\SidemenuWidget;

use Charcoal\Tests\Admin\ContainerProvider;

/**
 * Class SidemenuWidgetTest
 * @package Charcoal\Tests\Admin\Widget
 */
class SidemenuWidgetTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var SidemenuWidget
     */
    public $obj;

    /**
     *
     */
    public function setUp()
    {
        $container = new Container();
        $containerProvider = new ContainerProvider();
        $containerProvider->registerWidgetDependencies($container);
        $containerProvider->registerWidgetFactory($container);

        $container['request'] = Request::createFromEnvironment(Environment::mock());
        $container['sidemenu/group/factory'] = $container['widget/factory'];

        $this->obj = new SidemenuWidget([
            'logger' => $container['logger'],
            'container' => $container
        ]);
    }

    /**
     *
     */
    public function testConstructor()
    {
        $this->assertInstanceOf(SidemenuWidget::class, $this->obj);
    }
}
