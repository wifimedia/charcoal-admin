<?php

namespace Charcoal\Admin\Tests\Object;

use PHPUnit_Framework_TestCase;

use Pimple\Container;

use Charcoal\Admin\Object\MessageOfTheDay;

use Charcoal\Admin\Tests\ContainerProvider;

/**
 *
 */
class MessageOfTheDayTest extends PHPUnit_Framework_TestCase
{
    private $obj;

    public function setUp()
    {
        $container = new Container();
        $provider = new ContainerProvider();
        $provider->registerLogger($container);
        $provider->registerModelFactory($container);

        $this->obj = new MessageOfTheDay([
            'logger' => $container['logger'],
            'model_factory' => $container['model/factory']
        ]);
    }

    /**
     * Assert that `key()` returns 'ident'
     */
    public function testKey()
    {
        $this->assertEquals('ident', $this->obj->key());
    }

    /**
     * Assert that the `setIdent` method:
     * - is chainable
     * - sets the ident properly
     * - throws an InvalidArgumentException if the argument is not a string
     *
     * Also assert that:
     * - ident is null by default
     * - ident can be set and get by ArrayAccess
     * - ident can be set with `set()`
     */
    public function testSetIdent()
    {
        $this->assertNull($this->obj->ident());
        $ret = $this->obj->setIdent('foo');
        $this->assertSame($ret, $this->obj);
        $this->assertEquals('foo', $this->obj->ident());

        $this->obj['ident'] = 'bar';
        $this->assertEquals('bar', $this->obj->ident());

        $this->obj->set('ident', 'foobar');
        $this->assertEquals('foobar', $this->obj['ident']);

        $this->setExpectedException('\InvalidArgumentException');
        $this->obj->setIdent([]);
    }

    /**
     * Assert that the `setTitle` method:
     * - is chainable
     * - sets the title properly
     * - can be passed a `null` value (actual behavior not tested)
     * - can be passed an array of `l10n` strings
     *
     * Also assert that:
     * - title is null by default
     * - title can be set and get by ArrayAccess
     * - title can be set with `set()`
     */
    public function testSetTitle()
    {
        $this->assertNull($this->obj->title());
        $ret = $this->obj->setTitle('foo');
        $this->assertSame($ret, $this->obj);
        $this->assertEquals('foo', (string)$this->obj->title());

        $this->obj->setTitle(null);
        //$this->assertNull($this->obj->title());

        $this->obj['title'] = [
            'en' => 'bar',
            'fr' => 'baz'
        ];
        $title = $this->obj->title();
        $this->assertEquals('bar', (string)$title);
        $this->assertEquals('baz', $title['fr']);

        $this->obj->set('title', 'foobar');
        $this->assertEquals('foobar', (string)$this->obj['title']);
    }

    /**
     * Assert that the `setTitle` method:
     * - is chainable
     * - sets the title properly
     * - can be passed a `null` value (actual behavior not tested)
     * - can be passed an array of `l10n` strings
     *
     * Also assert that:
     * - title is null by default
     * - title can be set and get by ArrayAccess
     * - title can be set with `set()`
     */
    public function testSetContent()
    {
        $this->assertNull($this->obj->content());
        $ret = $this->obj->setContent('foo');
        $this->assertSame($ret, $this->obj);
        $this->assertEquals('foo', (string)$this->obj->content());

        $this->obj->setContent(null);
        //$this->assertNull($this->obj->title());

        $this->obj['title'] = [
            'en' => 'bar',
            'fr' => 'baz'
        ];
        $title = $this->obj->title();
        $this->assertEquals('bar', (string)$title);
        $this->assertEquals('baz', $title['fr']);

        $this->obj->set('title', 'foobar');
        $this->assertEquals('foobar', (string)$this->obj['title']);
    }

    /**
     * Assert that the `setMustAccept` method:
     * - is chainable
     * - sets the must_accept flag properly
     * - can be passed a `null` value (is false)
     * - can be passed "true-ish" value
     *
     * Also assert that:
     * - must_accept is true by default
     * - must_accept can be set and get by ArrayAccess
     * - must_accep can be set with `set()`
     */
    public function testSetMustAccept()
    {
        $this->assertTrue($this->obj->mustAccept());
        $ret = $this->obj->setMustAccept(false);
        $this->assertFalse($this->obj->mustAccept());

        $this->obj['must_accept'] = 1;
        $this->assertTrue($this->obj->mustAccept());

        $this->obj->set('must_accept', null);
        $this->assertFalse($this->obj['must_accept']);
    }
}
