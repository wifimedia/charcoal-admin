<?php

namespace Charcoal\Admin;

use \Pimple\Container;

// From 'charcoal-factory'
use \Charcoal\Factory\FactoryInterface;

// From 'charcoal-app'
use Charcoal\App\Action\AbstractAction;

// From 'charcoal-admin'
use \Charcoal\Admin\Ui\FeedbackAwareInterface;
use \Charcoal\Admin\Ui\FeedbackAwareTrait;

/**
 * The base class for the `admin` Actions.
 */
abstract class AdminAction extends AbstractAction implements FeedbackAwareInterface
{
    use FeedbackAwareTrait;

    /**
     * Store a reference to the admin configuration.
     *
     * @var \Charcoal\Admin\Config
     */
    protected $adminConfig;

    /**
     * @var FactoryInterface $modelFactory
     */
    private $modelFactory;

    /**
    * @param array $data Optional.
    */
    final public function __construct(array $data = null)
    {
        parent::__construct($data);

        if ($data !== null) {
            $this->setData($data);
        }

        if ($this->authRequired() === true) {
            // @todo Authentication
            $this->auth();
        }
    }

    /**
     * Dependencies
     * @param Container $container DI Container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        $this->adminConfig = $container['admin/config'];
        $this->setModelFactory($container['model/factory']);
    }

    /**
     * @param FactoryInterface $factory The factory used to create models.
     * @return AdminScript Chainable
     */
    protected function setModelFactory(FactoryInterface $factory)
    {
        $this->modelFactory = $factory;
        return $this;
    }

    /**
     * @return FactoryInterface The model factory.
     */
    protected function modelFactory()
    {
        return $this->modelFactory;
    }


    /**
     * Authentication is required by default.
     *
     * Reimplement and change to false in templates that do not require authentication.
     *
     * @return boolean
     */
    public function authRequired()
    {
        return false;
    }

    /**
     * Determine if the current user is authenticated. If not it redirects them to the login page.
     *
     * @return void
     */
    private function auth()
    {
        $u = User::getAuthenticated();
        if ($u === null || !$u->id()) {
            die('Auth required');
        }
    }

    /**
     * Default response stub.
     *
     * @return array
     */
    public function results()
    {
        $results = [
            'success'   => $this->success(),
            'next_url'  => $this->redirectUrl(),
            'feedbacks' => $this->feedbacks()
        ];
        return $results;
    }
}
