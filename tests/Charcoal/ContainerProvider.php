<?php

namespace Charcoal\Tests;

// From Pimple
use Pimple\Container;

/**
 *
 */
class ContainerProvider extends ContainerServices
{
    /**
     * Register the unit tests required services.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerBaseServices(Container $container)
    {
        $this->registerConfig($container);
        $this->registerDatabase($container);
        $this->registerLogger($container);
        $this->registerCache($container);
    }

    /**
     * Register the authentication services.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerAuthServices(Container $container)
    {
        $this->registerAcl($container);
        $this->registerAuthenticator($container);
        $this->registerAuthorizer($container);
    }

    /**
     * Register the admin services.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerAdminServices(Container $container)
    {
        $this->registerBaseUrl($container);
        $this->registerAdminBaseUrl($container);
        $this->registerTranslator($container);
        $this->registerAdminConfig($container);
        $this->registerAuthServices($container);
    }

    /**
     * Register the model services.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerModelServices(Container $container)
    {
        $this->registerTranslator($container);
        $this->registerMetadataLoader($container);
        $this->registerSourceFactory($container);
        $this->registerPropertyFactory($container);
        $this->registerModelFactory($container);
        $this->registerModelCollectionLoader($container);
    }

    /**
     * Register the admin dashboard services.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerDashboardServices(Container $container)
    {
        $this->registerLogger($container);
        $this->registerWidgetBuilder($container);
        $this->registerLayoutBuilder($container);
        $this->registerDashboardFactory($container);
    }

    /**
     * Register the Admin Action dependencies.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerActionDependencies(Container $container)
    {
        $this->registerBaseServices($container);
        $this->registerAdminServices($container);
        $this->registerModelServices($container);
    }

    /**
     * Register the Admin Template dependencies.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerTemplateDependencies(Container $container)
    {
        $this->registerBaseServices($container);
        $this->registerAdminServices($container);
        $this->registerWidgetFactory($container);
        $this->registerModelServices($container);
        $this->registerAdminMenu($container);
    }

    /**
     * Register the Admin Script dependencies.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerScriptDependencies(Container $container)
    {
        $this->registerBaseServices($container);
        $this->registerAdminServices($container);
        $this->registerModelServices($container);
    }

    /**
     * Register the Admin Widget dependencies.
     *
     * @param  Container $container A DI container.
     * @return void
     */
    public function registerWidgetDependencies(Container $container)
    {
        $this->registerBaseServices($container);
        $this->registerAdminServices($container);
        $this->registerModelServices($container);
        $this->registerView($container);
    }
}
