<?php

namespace Charcoal\Admin\Template;

// PSR-7 (HTTP Messaging) dependencies
use \Psr\Http\Message\RequestInterface;

// Local parent namespace dependencies
use \Charcoal\Admin\AdminTemplate;
use \Charcoal\Admin\User;
use \Charcoal\Admin\Object\AuthToken;

/**
 * Logout template
 */
class LogoutTemplate extends AdminTemplate
{
    /**
     * @param RequestInterface $request The request to initialize.
     * @return boolean
     */
    public function init(RequestInterface $request)
    {
        $user = User::getAuthenticated($this->modelFactory());

        if ($user) {
            $user->logout();
            $this->deleteUserAuthTokens($user);
        }

        return parent::init($request);
    }

    /**
     * @param User $user The user to clear auth tokens for.
     * @return LogoutTemplate Chainable
     */
    private function deleteUserAuthTokens(User $user)
    {
        $token = $this->modelFactory()->create('charcoal/admin/object/auth-token');

        if ($token->source()->tableExists()) {
            $table = $token->source()->table();
            $q = 'DELETE FROM '.$table.' WHERE username = :username';
            $token->source()->dbQuery($q, [ 'username'=>$user->username() ]);
        }

        return $this;
    }

    /**
     * Authentication is obviously never required for the login page.
     *
     * @return boolean
     */
    protected function authRequired()
    {
        return false;
    }

    /**
     * @return boolean
     */
    public function showHeaderMenu()
    {
        return false;
    }

    /**
     * @return boolean
     */
    public function showFooterMenu()
    {
        return false;
    }
}