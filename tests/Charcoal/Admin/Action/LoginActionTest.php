<?php

namespace Charcoal\Tests\Admin\Action;

// From 'charcoal-admin'
use Charcoal\Admin\Action\LoginAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class LoginActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\LoginAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertFalse($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\LoginAction::run
     */
    public function testRunWithoutParamsIs400()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());
    }

    /**
     * @covers \Charcoal\Admin\Action\LoginAction::run
     */
    public function testRunWithInvalidCredentials()
    {
        $action = $this->createTestAction();

        $this->createUser('foo');

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'username=qux&password=asdfgh'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(403, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\LoginAction::run
     */
    public function testRunWithValidCredentials()
    {
        $action = $this->createTestAction();

        $this->createUser('foo');

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'username=foo&password=qwerty'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(200, $response->getStatusCode());

        $results = $action->results();
        $this->assertTrue($results['success']);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return LoginAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new LoginAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
