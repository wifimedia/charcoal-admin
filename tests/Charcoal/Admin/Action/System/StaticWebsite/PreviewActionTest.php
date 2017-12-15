<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\PreviewAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class PreviewActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\PreviewAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\PreviewAction::run
     */
    public function testRun()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(404, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return PreviewAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new PreviewAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
