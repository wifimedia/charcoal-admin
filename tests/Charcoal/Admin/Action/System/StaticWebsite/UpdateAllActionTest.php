<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\UpdateAllAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class UpdateAllActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAllAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAllAction::run
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAllAction::globRecursive
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\UpdateAllAction::results
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
     * @return UpdateAllAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new UpdateAllAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
