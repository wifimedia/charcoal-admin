<?php

namespace Charcoal\Tests;

// From Pimple
use Pimple\Container;

// From 'charcoal-admin/tests'
use Charcoal\Tests\ContainerProvider;

/**
 * Integrates Charcoal's service container into PHPUnit.
 *
 * Ensures Charcoal framework is set-up for each test.
 */
trait ContainerIntegrationTrait
{
    /**
     * @var Container
     */
    private $container;

    /**
     * @var ContainerProvider
     */
    private $containerProvider;

    /**
     * Get the service locator.
     *
     * If the container is undefined, a new one will be created
     *
     * @return Container
     */
    final protected function getContainer()
    {
        if ($this->container === null) {
            $this->setupContainer();
        }

        return $this->container;
    }

    /**
     * Get the service provider.
     *
     * @return ContainerProvider
     */
    final protected function getContainerProvider()
    {
        if ($this->containerProvider === null) {
            $this->setupContainer();
        }

        return $this->containerProvider;
    }

    /**
     * Prepare the service locator with essential services.
     *
     * @see    ContainerProvider
     * @return void
     */
    final private function setupContainer()
    {
        $provider  = new ContainerProvider();
        $container = new Container();

        $this->setupContainerForTestCase($container, $provider);

        $this->container = $container;
        $this->containerProvider = $provider;
    }

    /**
     * Prepare the service locator with services for the given test case.
     *
     * @param  Container         $container The service locator.
     * @param  ContainerProvider $provider  The service provider.
     * @return void
     */
    protected function setupContainerForTestCase(Container $container, ContainerProvider $provider)
    {
        $provider->registerBaseServices($container);
    }
}
