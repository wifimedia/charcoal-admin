<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\ActivateAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class ActivateActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\ActivateAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\ActivateAction::run
     */
    public function testRun()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $results = $action->results();
        $this->assertTrue($results['success']);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return ActivateAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new ActivateAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
