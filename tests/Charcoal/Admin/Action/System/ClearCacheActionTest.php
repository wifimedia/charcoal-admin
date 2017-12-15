<?php

namespace Charcoal\Tests\Admin\Action\System;

// From PSR-6
use Psr\Cache\CacheItemPoolInterface;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\ClearCacheAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class ClearCacheActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::run
     */
    public function testRun()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::$cache
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::setCache
     */
    public function testCachePresent()
    {
        $action  = $this->createTestAction();
        $service = $this->getPropertyValue($action, 'cache');
        $this->assertInstanceOf(CacheItemPoolInterface::class, $service);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return ClearCacheAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new ClearCacheAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
