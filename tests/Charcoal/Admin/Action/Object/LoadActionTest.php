<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-core'
use Charcoal\Model\CollectionInterface;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\LoadAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class LoadActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\Object\LoadAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Object\LoadAction::run
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
     * @covers \Charcoal\Admin\Action\Object\LoadAction::run
     * @covers \Charcoal\Admin\Action\Object\LoadAction::setObjType
     * @covers \Charcoal\Admin\Action\Object\LoadAction::objCollection
     * @covers \Charcoal\Admin\Action\Object\LoadAction::loadObjectCollection
     */
    public function testRun()
    {
        $action = $this->createTestAction();
        $user   = $this->createUser('foo');

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'obj_type=charcoal/admin/user'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $results = $action->results();
        $this->assertTrue($results['success']);

        $this->assertEquals(json_encode([ $user ]), json_encode($results['collection']));
    }

    /**
     * Create Admin Action for testing.
     *
     * @return LoadAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new LoadAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
