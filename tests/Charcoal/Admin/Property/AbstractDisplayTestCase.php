<?php

namespace Charcoal\Tests\Admin\Property;

use Charcoal\Admin\Property\AbstractPropertyDisplay;
use Charcoal\Tests\AbstractTestCase;

/**
 * Basic Charcoal Admin Property Display Test
 */
abstract class AbstractDisplayTestCase extends AbstractTestCase
{
    /**
     * Create Admin Property Display for testing.
     *
     * @return AbstractPropertyDisplay
     */
    abstract protected function createTestPropertyDisplay();

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
