<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\DeleteAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class DeleteActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

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
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::results
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
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::run
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::results
     */
    public function testRunWithoutObjIdIs400()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'obj_type=charcoal/admin/user'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::run
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::results
     */
    public function testRunWithInvalidObject()
    {
        $action = $this->createTestAction();
        $objId  = 'foobar';
        $user   = $this->createUser($objId);
        $this->assertTrue($this->userExists($objId));

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'obj_type=charcoal/admin/user&obj_id=bazqux'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(404, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);

        $this->assertTrue($this->userExists($objId));
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::run
     * @covers \Charcoal\Admin\Action\Object\DeleteAction::results
     */
    public function testRunWithObjectDelete()
    {
        $action = $this->createTestAction();
        $objId  = 'foobar';
        $user   = $this->createUser($objId);
        $this->assertTrue($this->userExists($objId));

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'obj_type=charcoal/admin/user&obj_id='.$objId
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $results = $action->results();
        $this->assertTrue($results['success']);

        $this->assertFalse($this->userExists($objId));
    }

    /**
     * Create Admin Action for testing.
     *
     * @return DeleteAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new DeleteAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
