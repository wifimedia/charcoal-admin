<?php

namespace Charcoal\Tests;

// From 'charcoal-admin'
use Charcoal\User\UserInterface;

// From 'charcoal-admin'
use Charcoal\Admin\User;

/**
 * User Testing Helpers
 */
trait InteractsWithUserTrait
{
    /**
     * User model class name.
     *
     * Must be a fully-qualified PHP namespace and an implementation of
     * {@see \Charcoal\User\UserInterface}. Used by the model factory.
     *
     * @var string
     */
    protected $userClass = User::class;

    /**
     * Create a user model and save it into storage.
     *
     * @param  string $username The user's handle and primary key.
     * @param  string $password The user's password.
     * @param  string $email    The user's email address.
     * @return UserInterface
     */
    protected function createUser(
        $username,
        $password = 'qwerty',
        $email = 'foo@example.com'
    ) {
        $container = $this->getContainer();

        $user = $container['model/factory']->create($this->userClass);
        $user->setData([
            'username' => $username,
            'password' => $password,
            'email'    => $email
        ]);

        $user->save();
        $user->load($username);

        return $user;
    }

    /**
     * Determine if a exists given its handle.
     *
     * @param  string $username The user's handle and primary key.
     * @return boolean
     */
    protected function userExists($username)
    {
        $container = $this->getContainer();

        $user = $container['model/factory']->create($this->userClass);
        $user->load($username);

        return !!$user->id();
    }

    /**
     * Get the service locator.
     *
     * @return \Pimple\Container
     */
    abstract protected function getContainer();
}
