<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\SaveAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class SaveActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\Object\SaveAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\SaveAction::run
     * @covers \Charcoal\Admin\Action\Object\SaveAction::setData
     * @covers \Charcoal\Admin\Action\Object\SaveAction::setSaveData
     * @covers \Charcoal\Admin\Action\Object\SaveAction::saveData
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
     * @return SaveAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new SaveAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
