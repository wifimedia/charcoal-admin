<?php

namespace Charcoal\Tests\Admin\Action\System\StaticWebsite;

// From 'charcoal-admin'
use Charcoal\Admin\Action\System\StaticWebsite\DeleteAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class DeleteActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\DeleteAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @covers \Charcoal\Admin\Action\System\StaticWebsite\DeleteAction::run
     */
    public function testRun()
    {
        $action   = $this->createTestAction();
        $request  = $this->createTestRequest();
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals(404, $response->getStatusCode());

        $results = $action->results();
        $this->assertFalse($results['success']);
    }

    /**
     * Set up the service container.
     *
     * @return Container
     */
    private function container()
    {
        if ($this->container === null) {
            $container = new Container();
            $containerProvider = new ContainerProvider();
            $containerProvider->registerAdminServices($container);
            $containerProvider->registerCollectionLoader($container);

            $this->container = $container;
        }

        return $this->container;
    }

    /**
     * Create Admin Action for testing.
     *
     * @return DeleteAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new DeleteAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
