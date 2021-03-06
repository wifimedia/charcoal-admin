<?php

namespace Charcoal\Admin\Template\Account;

// From 'charcoal-admin'
use Charcoal\Admin\AdminTemplate;

/**
 * Lost Password Template
 *
 * Related: {@see \Charcoal\Admin\Template\Account\ResetPasswordTemplate Reset Password Template}
 */
class LostPasswordTemplate extends AdminTemplate
{
    /**
     * @return boolean
     */
    public function authRequired()
    {
        return false;
    }

    /**
     * @return string
     */
    public function urlLostPasswordAction()
    {
        return $this->adminUrl().'account/lost-password';
    }

    /**
     * @return string
     */
    public function urlResetPassword()
    {
        return $this->adminUrl().'account/reset-password';
    }

    /**
     * @return string
     */
    public function urlLogin()
    {
        return $this->adminUrl().'login';
    }

    /**
     * Retrieve the title of the page.
     *
     * @return \Charcoal\Translator\Translation|string|null
     */
    public function title()
    {
        if ($this->title === null) {
            $this->setTitle($this->translator()->translation('Lost Password'));
        }

        return $this->title;
    }
}
