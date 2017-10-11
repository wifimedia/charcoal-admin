<?php

namespace Charcoal\Admin\Script\System;

// From PSR-6
use \Psr\Cache\CacheItemPoolInterface;

// From PSR-7
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

// From Pimple
use Pimple\Container;

// From 'charcoal-admin'
use Charcoal\Admin\AdminScript;
use Charcoal\Admin\Script\System\ClearCacheScript;

/**
 * Console: Purge Cache
 *
 * Also available as a {@see ClearCacheAction API endpoint}.
 */
class ClearCacheScript extends AdminScript
{
    /**
     * @var CacheItemPoolInterface
     */
    private $cache;

    /**
     * @param  Container $container A service locator.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);
        $this->setCache($container['cache']);
    }

    /**
     * @param  CacheItemPoolInterface $cache A PSR-6 cache item pool.
     * @return void
     */
    private function setCache(CacheItemPoolInterface $cache)
    {
        $this->cache = $cache;
    }

    /**
     * @return void
     */
    protected function init()
    {
        parent::init();

        $this->setDescription(
            'The <underline>object/table/alter-primary-key</underline> script replaces the existing primary key with the new definition from the given model\'s metadata.'
        );
    }

    /**
     * Run the script.
     *
     * @param  RequestInterface  $request  A PSR-7 compatible Request instance.
     * @param  ResponseInterface $response A PSR-7 compatible Response instance.
     * @return ResponseInterface
     */
    public function run(RequestInterface $request, ResponseInterface $response)
    {
        unset($request);

        try {
            $this->clearCache();
        } catch (Exception $e) {
            $this->climate()->error($e->getMessage());
        }

        return $response;
    }

    /**
     * Execute the script.
     *
     * @return self
     */
    public function clearCache()
    {
        unset($request);

        $cli = $this->climate();

        $cacheType = $this->argOrInput('cache_type');

        if (!$cacheType) {
            $cli->error($this->translator()->translate('Cache type not defined.'));
            return $this;
        }

        switch ($cacheType) {
            case 'global':
                return $this->clearGlobalCache();

            case 'pages':
                return $this->clearPageCache();

            case 'objects':
                return $this->clearObjectCache();
        }

        $cli->error($this->translator()->translate(sprintf(
            'Invalid cache type "%s"',
            $cacheType
        )));

        return $this;
    }

    /**
     * Clear "global" cache.
     *
     * @return boolean
     */
    protected clearGlobalCache()
    {
        $this->cache->clear();

        $cli->info($this->translator()->translate('Cache cleared successfully.'));

        return true;
    }

    /**
     * Clear "pages" cache.
     *
     * @return boolean
     */
    protected clearPageCache()
    {
        $this->cache->deleteItem('request');
        $this->cache->deleteItem('template');

        $cli->info($this->translator()->translate('Pages cache cleared successfully.'));

        return true;
    }

    /**
     * Clear "objects" cache.
     *
     * @return boolean
     */
    protected clearObjectCache()
    {
        $this->cache->deleteItem('object');
        $this->cache->deleteItem('metadata');

        $cli->info($this->translator()->translate('Objects cache cleared successfully.'));

        return true;
    }



    // CLI Arguments
    // =========================================================================

    /**
     * Retrieve the script's supported arguments.
     *
     * @return array
     */
    public function defaultArguments()
    {
        $arguments = [
            'cache_type' => [
                'prefix'       => 't',
                'longPrefix'   => 'cache-type',
                'description'  => 'The cache type to clear.',
                'required'     => true
            ]
        ];

        return array_merge(parent::defaultArguments(), $arguments);
    }
}
