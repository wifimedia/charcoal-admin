<?php

namespace Charcoal\Admin;

// Dependencies from PSR-7 (HTTP Messaging)
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

// Dependency from Pimple
use Pimple\Container;

// Dependency from 'charcoal-app'
use Charcoal\App\Handler\HandlerInterface;
use Charcoal\App\Module\AbstractModule;

/**
 * Charcoal Administration Module
 */
class AdminModule extends AbstractModule
{
    /**
     * Charcoal Administration Setup.
     *
     * This module is bound to the `/admin` URL.
     *
     * ## Provides
     *
     * - `charcoal/admin/module` An instance of this module
     *   - Exact type: `\Charcoal\Admin\AdminModule`
     *   - which implements `\Charcoal\Module\ModuleInterface`
     *
     * ## Dependencies
     * - `charcoal/config` Provided by \Charcoal\CharcoalModule
     *
     * @return AdminModule
     */
    public function setup()
    {
        // A session is necessary for the admin module
        if (session_id() === '') {
            session_start();
        }

        $container = $this->app()->getContainer();

        $module = $this;
        $container['charcoal/admin/module'] = function ($c) use ($module) {
            return $module;
        };

        $config = $container['admin/config'];

        $this->setConfig($config);

        $groupIdent = '/'.trim($config['base_path'], '/');

        // Add the route group
        $this->app()->group($groupIdent, 'charcoal/admin/module:setupRoutes')
                    ->add('charcoal/admin/module:setupHandlers');

        return $this;
    }

    /**
     * Set up the module's handlers, via group middleware.
     *
     * @param  RequestInterface  $request  A PSR7 request object.
     * @param  ResponseInterface $response A PSR7 response object.
     * @param  callable          $next     The next callable middleware.
     * @return ResponseInterface A PSR7 response object.
     */
    public function setupHandlers(RequestInterface $request, ResponseInterface $response, callable $next)
    {
        $config    = $this->config();
        $container = $this->app()->getContainer();
        $baseUrl   = $container['base-url'];
        $adminUrl  = rtrim($baseUrl, '/\\').'/'.trim($config['base_path'], '/\\');

        if (isset($config['handlers'])) {

            /**
             * HTTP 404 (Not Found) handler.
             *
             * @param  object|HandlerInterface $handler An error handler instance.
             * @return HandlerInterface
             */
            $container->extend('notFoundHandler', function ($handler) use ($config, $adminUrl) {
                if ($handler instanceof HandlerInterface && isset($config['handlers.defaults'])) {
                    $handler->config()->merge($config['handlers.defaults']);
                    $handler->setBaseUrl($adminUrl);
                }

                return $handler;
            });

            /**
             * HTTP 405 (Not Allowed) handler.
             *
             * @param  object|HandlerInterface $handler An error handler instance.
             * @return HandlerInterface
             */
            $container->extend('notAllowedHandler', function ($handler) use ($config, $adminUrl) {
                if ($handler instanceof HandlerInterface && isset($config['handlers.defaults'])) {
                    $handler->config()->merge($config['handlers.defaults']);
                    $handler->setBaseUrl($adminUrl);
                }

                return $handler;
            });

            /**
             * HTTP 500 (Error) handler for PHP 7+ Throwables.
             *
             * @param  object|HandlerInterface $handler An error handler instance.
             * @return HandlerInterface
             */
            $container->extend('phpErrorHandler', function ($handler) use ($config, $adminUrl) {
                if ($handler instanceof HandlerInterface && isset($config['handlers.defaults'])) {
                    $handler->config()->merge($config['handlers.defaults']);
                    $handler->setBaseUrl($adminUrl);
                }

                return $handler;
            });

            /**
             * HTTP 500 (Error) handler.
             *
             * @param  object|HandlerInterface $handler An error handler instance.
             * @return HandlerInterface
             */
            $container->extend('errorHandler', function ($handler) use ($config, $adminUrl) {
                if ($handler instanceof HandlerInterface && isset($config['handlers.defaults'])) {
                    $handler->config()->merge($config['handlers.defaults']);
                    $handler->setBaseUrl($adminUrl);
                }

                return $handler;
            });

            /**
             * HTTP 503 (Service Unavailable) handler.
             *
             * This handler is not part of Slim.
             *
             * @param  object|HandlerInterface $handler An error handler instance.
             * @return HandlerInterface
             */
            $container->extend('shutdownHandler', function ($handler) use ($config, $adminUrl) {
                if ($handler instanceof HandlerInterface && isset($config['handlers.defaults'])) {
                    $handler->config()->merge($config['handlers.defaults']);
                    $handler->setBaseUrl($adminUrl);
                }

                return $handler;
            });
        }

        return $next($request, $response);
    }
}
