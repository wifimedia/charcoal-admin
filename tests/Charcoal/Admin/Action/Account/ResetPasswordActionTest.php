<?php

namespace Charcoal\Tests\Admin\Action\Account;

// From Mockery
use Mockery as m;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Account\ResetPasswordAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class ResetPasswordActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertFalse($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithoutTokenReturns400()
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
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithoutUsernameReturns400()
    {
        $action  = $this->createTestAction();
        $request = $this->createTestRequest([
            'QUERY_STRING' => 'token=foobar'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithoutPasswordReturns400()
    {
        $action  = $this->createTestAction();
        $request = $this->createTestRequest([
            'QUERY_STRING' => 'token=foobar&username=foobar'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithoutMatchingPasswordsReturns400()
    {
        $action  = $this->createTestAction();
        $request = $this->createTestRequest([
            'QUERY_STRING' => 'token=foobar&username=foobar&password1=foo&password2=bar'
        ]);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithoutRecaptchaReturns400()
    {
        $action = $this->createTestAction();
        $mock   = m::mock($action);
        $mock->shouldAllowMockingProtectedMethods()
             ->shouldReceive('validateCaptcha')
                ->with(null)
                    ->andReturn(false);

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'token=foobar&username=foobar&password1=foo&password2=foo'
        ]);
        $response = $this->createTestResponse();

        $response = $mock->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $mock->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\ResetPasswordAction::results
     */
    public function testRunWithInvalidRecaptchaReturns400()
    {
        $action = $this->createTestAction();
        $mock   = m::mock($action);
        $mock->shouldAllowMockingProtectedMethods()
             ->shouldReceive('validateCaptcha')
                ->with('foobar')
                    ->andReturn(false);

        $request  = $this->createTestRequest([
            'QUERY_STRING' => 'token=foobar&username=foobar&password1=foo&password2=foo&g-recaptcha-response=foobar'
        ]);
        $response = $this->createTestResponse();

        $response = $mock->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $mock->results();
        $this->assertFalse($results['success']);
    }

    /**
     * Create Admin Action for testing.
     *
     * @return ResetPasswordAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new ResetPasswordAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
