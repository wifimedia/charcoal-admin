<?php

namespace Charcoal\Admin\Script\User;

// PSR-7 (http messaging) dependencies
use \Psr\Http\Message\RequestInterface;
use \Psr\Http\Message\ResponseInterface;

// Intra-module (`charcoal-admin`) dependencies
use \Charcoal\Admin\AdminScript;
use \Charcoal\Admin\User;

/**
 *
 */
class ResetPasswordScript extends AdminScript
{
    /**
     * @param RequestInterface  $request  A PSR-7 compatible Request instance.
     * @param ResponseInterface $response A PSR-7 compatible Response instance.
     * @return ResponseInterface
     */
    public function run(RequestInterface $request, ResponseInterface $response)
    {
        unset($request);
        $climate = $this->climate();

        $climate->underline()->out(
            'Reset a Charcoal Administrator password'
        );

        $username = $this->argOrInput('username');

        $user = new User();
        $user->load($username);

        $climate->red()->out(
            'Incomplete script'
        );

        return $response;
    }
}