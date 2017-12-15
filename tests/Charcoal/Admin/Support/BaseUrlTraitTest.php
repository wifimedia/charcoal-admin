<?php

namespace Charcoal\Tests\Source;

use RuntimeException;

// From Mockery
use Mockery as m;

// From Slim
use Slim\Http\Environment;
use Slim\Http\Uri;

// From 'charcoal-admin'
use Charcoal\Admin\Support\BaseUrlTrait;
use Charcoal\Admin\User;
use Charcoal\Tests\AbstractTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class BaseUrlTraitTest extends AbstractTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Support\BaseUrlTrait::baseUrl
     * @covers \Charcoal\Admin\Support\BaseUrlTrait::setBaseUrl
     */
    public function testBaseUrl()
    {
        $container = $this->getContainer();

        $trait = $this->createTestTrait();

        $env = Environment::mock();
        $uri = Uri::createFromEnvironment($env);

        $this->callMethodWith($trait, 'setBaseUrl', $uri);
        $this->assertSame(rtrim($uri, '/').'/', $trait->baseUrl());
    }

    /**
     * @covers \Charcoal\Admin\Support\BaseUrlTrait::adminUrl
     * @covers \Charcoal\Admin\Support\BaseUrlTrait::setAdminUrl
     */
    public function testAdminUrl()
    {
        $container = $this->getContainer();

        $trait = $this->createTestTrait();

        $env = Environment::mock();
        $uri = Uri::createFromEnvironment($env);

        $this->callMethodWith($trait, 'setAdminUrl', $uri);
        $this->assertSame(rtrim($uri, '/').'/', $trait->adminUrl());
    }

    /**
     * Create Admin Trait for testing.
     *
     * @return BaseUrlTrait
     */
    protected function createTestTrait()
    {
        return m::mock(BaseUrlTrait::class);
    }

    /**
     * Prepare the service locator with services for the given test case.
     *
     * @param  \Pimple\Container                 $container The service locator.
     * @param  \Charcoal\Tests\ContainerProvider $provider  The service provider.
     * @return void
     */
    protected function setupContainerForTestCase(
        \Pimple\Container $container,
        \Charcoal\Tests\ContainerProvider $provider
    ) {
        $provider->registerBaseUrl($container);
        $provider->registerAdminBaseUrl($container);
        $provider->registerAdminConfig($container);
    }
}
