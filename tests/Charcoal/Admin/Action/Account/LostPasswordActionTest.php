<?php

namespace Charcoal\Tests\Admin\Action\Account;

// From Mockery
use Mockery as m;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Account\LostPasswordAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class LostPasswordActionTest extends AbstractActionTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertFalse($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::results
     */
    public function testRunWithoutUsernameReturns400()
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
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::results
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
            'QUERY_STRING' => 'username=foobar'
        ]);
        $response = $this->createTestResponse();

        $response = $mock->run($request, $response);
        $this->assertEquals(400, $response->getStatusCode());

        $results = $mock->results();
        $this->assertFalse($results['success']);
    }

    /**
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::run
     * @covers \Charcoal\Admin\Action\Account\LostPasswordAction::results
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
            'QUERY_STRING' => 'username=foobar&g-recaptcha-response=foobar'
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
     * @return LostPasswordAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new LostPasswordAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }

    /**
     * Prepare the service locator with services for the given test case.
     *
     * @param  \Pimple\Container                 $container The service locator.
     * @param  \Charcoal\Tests\ContainerProvider $provider  The service provider.
     * @return void
     */
    final protected function setupContainerForTestCase(
        \Pimple\Container $container,
        \Charcoal\Tests\ContainerProvider $provider
    ) {
        parent::setupContainerForTestCase($container, $provider);
        $provider->registerEmailFactory($container);
    }
}
