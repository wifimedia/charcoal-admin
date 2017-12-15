<?php

namespace Charcoal\Tests\Source;

// From Mockery
use Mockery as m;

// From 'charcoal-admin'
use Charcoal\Admin\Support\SecurityTrait;
use Charcoal\Admin\User;
use Charcoal\Tests\AbstractTestCase;
use Charcoal\Tests\InteractsWithUserTrait;

class SecurityTraitTest extends AbstractTestCase
{
    use InteractsWithUserTrait;

    /**
     * @covers \Charcoal\Admin\Support\SecurityTrait::authRequired
     */
    public function testAuthRequired()
    {
        $trait = $this->createTestTrait();
        $this->assertTrue($trait->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Support\SecurityTrait::isAuthenticated
     * @covers \Charcoal\Admin\Support\SecurityTrait::getAuthenticatedUser
     */
    public function testAuthenticator()
    {
        $trait = $this->createTestTrait();

        /** Default State */
        $this->assertFalse($trait->isAuthenticated());
        $this->assertNull($trait->getAuthenticatedUser());

        /** Mutated State */
        $this->setupTestUser();
        $this->assertTrue($trait->isAuthenticated());
        $this->assertInstanceOf(User::class, $trait->getAuthenticatedUser());
    }

    /**
     * Setup Admin User for testing.
     *
     * @return void
     */
    protected function setupTestUser()
    {
        $handle = 'foo';
        $user   = $this->createUser($handle);
        $key    = User::sessionKey();

        $authenticated = $this->getPropertyValue($user, 'authenticatedUser');
        $authenticated[$key] = $user;

        $this->setPropertyValue($user, 'authenticatedUser', $authenticated);
        $_SESSION[$key] = $handle;
    }

    /**
     * Create Admin Trait for testing.
     *
     * @return SecurityTrait
     */
    protected function createTestTrait()
    {
        $container = $this->getContainer();

        $mock = m::mock(SecurityTrait::class);

        $mock->shouldAllowMockingProtectedMethods()
             ->shouldReceive('authenticator')
             ->andReturn($container['admin/authenticator']);

        return $mock;
    }

    /**
     * Prepare the service locator with services for the given test case.
     *
     * @param  \Pimple\Container                 $container The service locator.
     * @param  \Charcoal\Tests\ContainerProvider $provider  The service provider.
     * @return void
     */
    protected function setupContainerForTestCase(
        \Pimple\Container $container,
        \Charcoal\Tests\ContainerProvider $provider
    ) {
        $provider->registerBaseServices($container);
        $provider->registerModelServices($container);
        $provider->registerAuthenticator($container);
    }
}
