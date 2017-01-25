<?php

namespace Charcoal\Admin\Tests\Service;

use PHPUnit_Framework_TestCase;

use Pimple\Container;

use Charcoal\Admin\Service\MessageOfTheDayLoader;

use Charcoal\Admin\Tests\ContainerProvider;

/**
 *
 */
class MessageOfTheDayLoaderTest extends PHPUnit_Framework_TestCase
{
    private $obj;

    public function setUp()
    {
        $container = new Container();
        $provider = new ContainerProvider();
        $provider->registerLogger($container);
        $provider->registerAuthenticator($container);
        $provider->registerModelFactory($container);

        $this->obj = new MessageOfTheDayLoader([
            'logger' => $container['logger'],
            'model_factory' => $container['model/factory'],
            'authenticator' => $container['admin/authenticator']
        ]);
    }

    public function testConstructor()
    {
        $this->assertInstanceOf(MessageOfTheDayLoader::class, $this->obj);
    }
}
