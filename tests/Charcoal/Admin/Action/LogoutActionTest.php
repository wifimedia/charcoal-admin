<?php

namespace Charcoal\Tests\Admin\Action;

// From 'charcoal-admin'
use Charcoal\Admin\Action\LogoutAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class LogoutActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * Kill user session.
     */
    public function setUp()
    {
        if (session_id()) {
            session_unset();
        }
    }

    /**
     * @covers \Charcoal\Admin\Action\LogoutAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\LogoutAction::run
     */
    public function testRunWithUnauthenticatedUser()
    {
        $action = $this->createTestAction();

        $this->createUser('foo');

        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(500, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\LogoutAction::run
     * @covers \Charcoal\Admin\Action\LogoutAction::deleteUserAuthTokens
     */
    public function testRunWithAuthenticatedUser()
    {
        $action = $this->createTestAction();

        $user = $this->createUser('foo');
        $user->login();

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
     * @return LogoutAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new LogoutAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
