<?php

namespace Charcoal\Tests\Admin\Action\Object;

// From 'charcoal-core'
use Charcoal\Loader\CollectionLoader;
use Charcoal\Model\Collection;

// From 'charcoal-admin'
use Charcoal\Admin\Action\Object\ReorderAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;
use Charcoal\Tests\Admin\Mock\SortableModel as Model;

class ReorderActionTest extends AbstractActionTestCase
{
    /**
     * The primary model to test with.
     *
     * @var string
     */
    private $model = Model::class;

    /**
     * Store the object collection loader.
     *
     * @var CollectionLoader
     */
    private $collectionLoader;

    /**
     * @covers \Charcoal\Admin\Action\Object\ReorderAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertTrue($action->authRequired());
    }

    /**
     * @dataProvider runRequestProvider
     *
     * @param integer $status  An HTTP status code.
     * @param string  $success Whether the action was successful.
     * @param array   $mock    The request parameters to test.
     */
    public function testRun($status, $success, array $mock)
    {
        if ($status === 200) {
            $this->setUpObjects();
        }

        $action   = $this->createTestAction();
        $request  = $this->createTestRequest($mock);
        $response = $this->createTestResponse();

        $response = $action->run($request, $response);
        $this->assertEquals($status, $response->getStatusCode());

        $results = $action->results();
        $this->assertEquals($success, $results['success']);

        if ($status === 200) {
            $keys = $this->getObjects()->keys();
            $this->assertEquals([ 'baz', 'bar', 'qux', 'foo' ], $keys);
        }
    }

    /**
     * Provide HTTP request data.
     *
     * @used-by self::testRun()
     * @return  array
     */
    public function runRequestProvider()
    {
        return [
            [ 400, false, [] ],
            [ 400, false, [ 'QUERY_STRING' => 'obj_type='.$this->model ] ],
            [ 400, false, [ 'QUERY_STRING' => 'obj_type='.$this->model.'&order_property=5' ] ],
            [ 400, false, [ 'QUERY_STRING' => 'obj_type='.$this->model.'&order_property=foobar' ] ],
            [ 500, false, [ 'QUERY_STRING' => 'obj_type='.$this->model.'&obj_orders[]=xyzzy&obj_orders[]=qwerty' ] ],
            [ 200, true,  [ 'QUERY_STRING' => 'obj_type='.$this->model.'&obj_orders[]=baz&obj_orders[]=bar&obj_orders[]=qux&obj_orders[]=foo' ] ],
        ];
    }

    public function setUpObjects()
    {
        $container = $this->getContainer();

        $model  = $container['model/factory']->create($this->model);
        $source = $model->source();

        if (!$source->tableExists()) {
            $source->createTable();
        }

        $objs = [
            [ 'id' => 'foo', 'position' => 1 ],
            [ 'id' => 'bar', 'position' => 2 ],
            [ 'id' => 'baz', 'position' => 3 ],
            [ 'id' => 'qux', 'position' => 4 ],
        ];
        foreach ($objs as $obj) {
            $model->setData($obj)->save();
        }

        // Test initial order from data-source.
        $objs = $this->getObjects();
        $this->assertEquals([ 'foo', 'bar', 'baz', 'qux' ], $objs->keys());

        return $objs;
    }

    public function getObjects()
    {
        if ($this->collectionLoader === null) {
            $container = $this->getContainer();

            $loader = new CollectionLoader([
                'logger'     => $container['logger'],
                'factory'    => $container['model/factory'],
                'model'      => $this->model,
                'collection' => Collection::class
            ]);
            $loader->addOrder('position');

            $this->collectionLoader = $loader;
        }

        return $this->collectionLoader->load();
    }

    /**
     * Create Admin Action for testing.
     *
     * @return ReorderAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return new ReorderAction([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
