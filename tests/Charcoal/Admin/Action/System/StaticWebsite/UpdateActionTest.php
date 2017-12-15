<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\UpdateAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class UpdateActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAction::run
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAction::cacheUrl
     */
    public function testRun()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return UpdateAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new UpdateAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
