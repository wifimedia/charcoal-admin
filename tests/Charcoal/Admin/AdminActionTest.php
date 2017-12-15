<?php

namespace Charcoal\Tests\Admin;

// From 'charcoal-admin'
use Charcoal\Admin\AdminAction;
use Charcoal\Tests\Admin\Action\AbstractActionTestCase;

class AdminActionTest extends AbstractActionTestCase
{
    /**
     * @covers \Charcoal\Admin\AdminAction::authRequired
     */
    public function testAuthRequired()
    {
        $action = $this->createTestAction();
        $this->assertFalse($action->authRequired());
    }

    /**
     * Asserts that success behaves as expected.
     * (Actually test base admin action).
     * - false by default
     * - setSuccess is chainable
     * - setSuccess can be called with non-boolean (0 or 1, for example) values
     * - success can be set by ArrayAccess
     * - success can be set with get()
     * - success can be accessed by ArrayAccess
     *
     * @covers \Charcoal\Admin\AdminAction::success
     */
    public function testSuccess()
    {
        $action = $this->createTestAction();

        $this->assertFalse($action->success());
        $ret = $action->setSuccess(true);
        $this->assertSame($ret, $action);
        $this->assertTrue($action->success());

        $action->setSuccess(0);
        $this->assertFalse($action->success());

        $action['success'] = true;
        $this->assertTrue($action->success());

        $action->set('success', false);
        $this->assertFalse($action['success']);
    }

    public function testFeedback()
    {
        $action = $this->createTestAction();

        $this->assertFalse($action->hasFeedbacks());
        $this->assertEquals([], $action->feedbacks());
        $this->assertEquals(0, $action->numFeedbacks());

        $ret = $action->addFeedback('error', 'Message');
        $this->assertSame($ret, $action);
        $this->assertTrue($action->hasFeedbacks());
        $this->assertEquals([[
            'level'   => 'error',
            'msg'     => 'Message',
            'message' => 'Message'
        ]], $action->feedbacks());
        $this->assertEquals(1, $action->numFeedbacks());
    }

    public function testAdminUrl()
    {
        $action = $this->createTestAction();

        $this->assertEquals('/admin/', $action->adminUrl());
    }

    public function testBaseUrl()
    {
        $action = $this->createTestAction();

        $this->assertEquals('/', $action->baseUrl());
        $ret = $action->setBaseUrl('foobar');
        $this->assertSame($ret, $action);
        $this->assertEquals('foobar/', $action->baseUrl());
    }

    /**
     * Create Admin Action for testing.
     *
     * @return LoginAction
     */
    final protected function createTestAction()
    {
        $container = $this->getContainer();

        return $this->getMockForAbstractClass(AdminAction::class, [[
            'logger'    => $container['logger'],
            'container' => $container
        ]]);
    }
}
