<?php

namespace Charcoal\Tests\Admin\Property;

use Charcoal\Admin\Property\AbstractPropertyInput;
use Charcoal\Tests\AbstractTestCase;

/**
 * Basic Charcoal Admin Property Input Test
 */
abstract class AbstractInputTestCase extends AbstractTestCase
{
    /**
     * Create Admin Property Input for testing.
     *
     * @return AbstractPropertyInput
     */
    abstract protected function createTestPropertyInput();

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
        $provider->registerBaseServices($container);
        $provider->registerAdminServices($container);
        $provider->registerModelServices($container);
    }
}
