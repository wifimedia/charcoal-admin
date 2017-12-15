<?php

namespace Charcoal\Tests;

// From Mockery
use Mockery as m;

/**
 * Basic Charcoal Test
 */
abstract class AbstractTestCase extends \PHPUnit_Framework_TestCase
{
    use AssertionsTrait;
    use ContainerIntegrationTrait;
    use ReflectionsTrait;

    /**
     * Clean up the Mockery container and
     * run any verification tasks needed
     * for our expectations.
     *
     * @return void
     */
    public function tearDown()
    {
        m::close();
    }
}
