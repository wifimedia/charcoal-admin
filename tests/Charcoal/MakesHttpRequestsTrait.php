<?php

namespace Charcoal\Tests;

// From PSR-7
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// From Slim
use Slim\Http\Environment;
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Interfaces\Http\EnvironmentInterface;

/**
 * HTTP Testing Helpers
 */
trait MakesHttpRequestsTrait
{
    /**
     * @var EnvironmentInterface
     */
    private $environment;

    /**
     * Create the test response instance.
     *
     * @param  array $userData Optional custom environment data.
     * @return void
     */
    final protected function setupEnvironment(array $userData = [])
    {
        $this->environment = Environment::mock($userData);
    }

    /**
     * Create the test server request instance.
     *
     * @param  mixed ...$args Optional constructor arguements.
     *     If the first argument is NOT a string (an HTTP method),
     *     its considered to be environment data.
     * @return \Psr\Http\Message\ServerRequestInterface
     */
    protected function createTestRequest(...$args)
    {
        if (empty($args)) {
            if ($this->environment === null) {
                $this->setupEnvironment();
            }

            return Request::createFromEnvironment($this->environment);
        }

        if (is_array($args[0])) {
            return Request::createFromEnvironment(Environment::mock($args[0]));
        }

        if ($args[0] instanceof EnvironmentInterface) {
            return Request::createFromEnvironment($args[0]);
        }

        return new Request(...$args);
    }

    /**
     * Create the test response instance.
     *
     * @param  mixed ...$args Optional constructor arguements.
     * @return \Psr\Http\Message\ResponseInterface
     */
    protected function createTestResponse(...$args)
    {
        return new Response(...$args);
    }
}
