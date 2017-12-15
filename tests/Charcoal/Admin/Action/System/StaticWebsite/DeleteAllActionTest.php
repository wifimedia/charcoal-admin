<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\DeleteAllAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class DeleteAllActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\DeleteAllAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\DeleteAllAction::run
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\DeleteAllAction::recursiveDelete
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
     * @return DeleteAllAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new DeleteAllAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
