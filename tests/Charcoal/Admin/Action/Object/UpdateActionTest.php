<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\UpdateAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class UpdateActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\Object\UpdateAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\UpdateAction::run
     * @covers \Charcoal\Admin\Action\Object\UpdateAction::setData
     * @covers \Charcoal\Admin\Action\Object\UpdateAction::setUpdateData
     * @covers \Charcoal\Admin\Action\Object\UpdateAction::updateData
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
