<?php

namespace Charcoal\Tests\Admin\Property;

// From 'charcoal-admin'
use Charcoal\Admin\Property\AbstractPropertyInput;
use Charcoal\Tests\Admin\Property\AbstractInputTestCase;

class PropertyInputTest extends AbstractInputTestCase
{
    public function testSetData()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setData([
            'ident'     => 'foo',
            'required'  => true,
            'disabled'  => true,
            'read_only' => true
        ]);
        $this->assertSame($prop, $ret);
        $this->assertEquals('foo', $prop->ident());
        $this->assertTrue($prop->required());
        $this->assertTrue($prop->disabled());
        $this->assertTrue($prop->readOnly());
    }

    /**
     * Create Admin Property Input for testing.
     *
     * @return AbstractPropertyInput
     */
    final protected function createTestPropertyInput()
    {
        $container = $this->getContainer();

        return $this->getMockForAbstractClass(AbstractPropertyInput::class, [
            [
                'logger'    => $container['logger'],
                'container' => $container
            ]
        ]);
    }
}
