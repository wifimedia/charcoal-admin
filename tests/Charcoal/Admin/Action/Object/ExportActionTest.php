<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\ExportAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class ExportActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\Object\ExportAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\ExportAction::run
     */
    public function testRunWithoutObjTypeIs400()
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
     * Create Admin Action for testing.
     *
     * @return ExportAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new ExportAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
