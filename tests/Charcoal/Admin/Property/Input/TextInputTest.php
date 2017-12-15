<?php

namespace Charcoal\Tests\Admin\Property\Input;

use Charcoal\Admin\Property\Input\TextInput;
use Charcoal\Tests\Admin\Property\AbstractInputTestCase;

class TextInputTest extends AbstractInputTestCase
{
    public function testSetData()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setData([
            'size'        => 42,
            'min_length'  => 10,
            'max_length'  => 100,
            'pattern'     => 'foo',
            'placeholder' => 'bar'
        ]);
        $this->assertSame($prop, $ret);
        $this->assertEquals(42, $prop->size());
        $this->assertEquals(10, $prop->minLength());
        $this->assertEquals(100, $prop->maxLength());
        $this->assertEquals('foo', (string)$prop->pattern());
        $this->assertEquals('bar', (string)$prop->placeholder());
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextInput::size
     * @covers \Charcoal\Admin\Property\Input\TextInput::setSize
     */
    public function testSetSize()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setSize(42);
        $this->assertSame($ret, $prop);
        $this->assertEquals(42, $prop->size());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setSize(false);
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextInput::minLength
     * @covers \Charcoal\Admin\Property\Input\TextInput::setMinLength
     */
    public function testSetMinLength()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setMinLength(42);
        $this->assertSame($ret, $prop);
        $this->assertEquals(42, $prop->minLength());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setMinLength(false);
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextInput::maxLength
     * @covers \Charcoal\Admin\Property\Input\TextInput::setMaxLength
     */
    public function testSetMaxLength()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setMaxLength(42);
        $this->assertSame($ret, $prop);
        $this->assertEquals(42, $prop->maxLength());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setMaxLength(false);
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextInput::pattern
     * @covers \Charcoal\Admin\Property\Input\TextInput::setPattern
     */
    public function testSetPattern()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setPattern('foo');
        $this->assertSame($ret, $prop);
        $this->assertEquals('foo', $prop->pattern());

        $this->setExpectedException('\InvalidArgumentException');
        $prop->setPattern(false);
    }

    /**
     * @covers \Charcoal\Admin\Property\Input\TextInput::placeholder
     * @covers \Charcoal\Admin\Property\Input\TextInput::setPlaceholder
     */
    public function testSetPlaceholder()
    {
        $prop = $this->createTestPropertyInput();
        $ret  = $prop->setPlaceholder('foo');
        $this->assertSame($ret, $prop);
        $this->assertEquals('foo', (string)$prop->placeholder());
    }

    /**
     * Create Admin Property Input for testing.
     *
     * @return TextInput
     */
    final protected function createTestPropertyInput()
    {
        $container = $this->getContainer();

        return new TextInput([
            'logger'    => $container['logger'],
            'container' => $container
        ]);
    }
}
