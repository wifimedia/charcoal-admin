<?php

namespace Charcoal\Tests\Admin\Action;

use Charcoal\Admin\AdminAction;
use Charcoal\Tests\AbstractTestCase;
use Charcoal\Tests\MakesHttpRequestsTrait;

/**
 * Basic Charcoal Admin Action Test
 */
abstract class AbstractActionTestCase extends AbstractTestCase
{
    use MakesHttpRequestsTrait;

    /**
     * Create Admin Action for testing.
     *
     * @return AdminAction
     */
    abstract protected function createTestAction();

    /**
     * Test {@see \Charcoal\Admin\Support\SecurityTrait::authRequired()}
     */
    abstract public function testAuthRequired();

    /**
     * Test {@see \Charcoal\Admin\AdminAction::run()}
     */
    # abstract public function testRun();

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
        $provider->registerActionDependencies($container);
    }
}
