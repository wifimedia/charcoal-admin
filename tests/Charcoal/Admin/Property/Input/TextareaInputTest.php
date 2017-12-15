<?php

namespace Charcoal\Tests\Admin\Property\Input;

use Charcoal\Admin\Property\Input\TextareaInput;
use Charcoal\Tests\Admin\Property\AbstractInputTestCase;

class TextareaInputTest extends AbstractInputTestCase
{
    public function testSetData()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setData([
            'cols' => 42,
            'rows' => 84
        ]);
        $this->assertSame($prop, $ret);
        $this->assertEquals(42, $prop->cols());
        $this->assertEquals(84, $prop->rows());
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextareaInput::cols
     * @covers \Charcoal\Admin\Property\Input\TextareaInput::setCols
     */
    public function testSetCols()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setCols(42);

        $this->assertSame($prop, $ret);
        $this->assertEquals(42, $prop->cols());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setCols('foo');
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextareaInput::rows
     * @covers \Charcoal\Admin\Property\Input\TextareaInput::setRows
     */
    public function testSetRows()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setRows(42);

        $this->assertSame($prop, $ret);
        $this->assertEquals(42, $prop->rows());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setRows('foo');
    }

    /**
     * Create Admin Property Input for testing.
     *
     * @return TextareaInput
     */
    final protected function createTestPropertyInput()
    {
        $container = $this->getContainer();

        return new TextareaInput([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
