<?php

namespace Charcoal\Admin\Action\System;

// From PSR-6
use \Psr\Cache\CacheItemPoolInterface;

// From PSR-7
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

// From Pimple
use Pimple\Container;

// From 'charcoal-admin'
use Charcoal\Admin\AdminAction;
use Charcoal\Admin\Script\System\ClearCacheScript;

/**
 * API: Purge Cache
 *
 * Also available as a {@see ClearCacheScript console command}.
 */
class ClearCacheAction extends AdminAction
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
     * @param  RequestInterface  $request  A PSR-7 compatible Request instance.
     * @param  ResponseInterface $response A PSR-7 compatible Response instance.
     * @return ResponseInterface
     */
    public function run(RequestInterface $request, ResponseInterface $response)
    {
        $cacheType = $request->getParam('cache_type');

        if (!$cacheType) {
            $this->addFeedback(
                'error',
                $this->translator()->translate('Cache type not defined.')
            );
            $this->setSuccess(false);
            return $response->withStatus(400);
        }

        switch ($cacheType) {
            case 'global':
                $this->setSuccess($this->clearGlobalCache());
                return $response;

            case 'pages':
                $this->setSuccess($this->clearPageCache());
                return $response;

            case 'objects':
                $this->setSuccess($this->clearObjectCache());
                return $response;
        }

        $this->addFeedback('error', $this->translator()->translate(sprintf(
            'Invalid cache type "%s"',
            $cacheType
        )));

        $this->setSuccess(false);
        return $response->withStatus(400);
    }

    /**
     * Clear "global" cache.
     *
     * @return boolean
     */
    protected clearGlobalCache()
    {
        $this->cache->clear();

        $this->addFeedback(
            'success',
            $this->translator()->translate('Cache cleared successfully.')
        );

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

        $this->addFeedback(
            'success',
            $this->translator()->translate('Pages cache cleared successfully.')
        );

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

        $this->addFeedback(
            'success',
            $this->translator()->translate('Objects cache cleared successfully.')
        );

        return true;
    }

    /**
     * @return array
     */
    public function results()
    {
        return [
            'success'   => $this->success(),
            'feedbacks' => $this->feedbacks()
        ];
    }
}
