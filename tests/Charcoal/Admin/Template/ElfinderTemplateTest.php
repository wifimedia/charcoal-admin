<?php

namespace Charcoal\Admin\Tests\Template;

use ReflectionClass;

use PHPUnit_Framework_TestCase;

use Psr\Log\NullLogger;

use Pimple\Container;

use Charcoal\Admin\Template\ElfinderTemplate;

use Charcoal\Admin\Tests\ContainerProvider;

/**
 *
 */
class ElfinderTemplateTest extends PHPUnit_Framework_TestCase
{
    public $obj;

    public function setUp()
    {
        $container = new Container();
        $containerProvider = new ContainerProvider();
        $containerProvider->registerBaseUrl($container);
        $containerProvider->registerAdminConfig($container);
        $containerProvider->registerLogger($container);
        $containerProvider->registerMetadataLoader($container);
        $containerProvider->registerModelFactory($container);
        $containerProvider->registerAuthenticator($container);
        $containerProvider->registerAuthorizer($container);
        $containerProvider->registerElfinderConfig($container);
        $containerProvider->registerMotdLoader($container);

        $this->obj = $this->getMock(ElfinderTemplate::class, null, [[
            'logger' => $container['logger'],
            'metadata_loader' => $container['metadata/loader']
        ]]);
        $this->obj->setDependencies($container);
    }

    public function testAdminAssertsUrl()
    {
        $ret = $this->obj->adminAssetsUrl();
        $this->assertEquals('/assets/admin/', $ret);
    }
}
