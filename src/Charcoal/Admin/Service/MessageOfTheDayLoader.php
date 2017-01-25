<?php

namespace Charcoal\Admin\Service;

use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;

use Charcoal\Loader\CollectionLoader;

use Charcoal\Admin\Object\MessageOfTheDay;

/**
 * Loads messages of the day that should be currently displayed
 */
class MessageOfTheDayLoader implements LoggerAwareInterface
{
    use LoggerAwareTrait;

    /**
     * @var FactoryInterface
     */
    private $modelFactory;

    /**
     * @var CollectionLoader
     */
    private $collectionLoader;

    /**
     * @param array $data Constructor options.
     */
    public function __construct(array $data)
    {
        $this->logger = $data['logger'];
        $this->modelFactory = $data['model_factory'];
        $this->authenticator = $data['authenticator'];
        $this->collectionLoader = $this->createCollectionLoader();
    }

    /**
     * Return true if the current logged in user has unread motds.
     * @return boolean
     */
    public function hasUnreadMessages()
    {
        return !!$this->numUnreadMessages();
    }

    /**
     * @return integer
     */
    public function numUnreadMessages()
    {
        return 0;
    }

    /**
     * Return true if the current logged in user has required un-accepetd motds.
     * @return boolean
     */
    public function hasUnacceptedMessages()
    {
        return !!$this->numUnacceptedMessages();
    }

    /**
     * @return integer
     */
    public function numAcceptedMessages()
    {
        return 0;
    }

    /**
     * @return Collection
     */
    public function load()
    {
        $sql = strtr(
            '
            SELECT
                *
            FROM
                %table
            WHERE
                (NOW() > `publish_date` OR `publish_date` IS NULL)
            AND
                (NOW() < `expiry_date` OR `expiry_date` IS NULL)
            ORDER BY
                expiry_date ASC
        ',
            [
                '%table' =>$this->motdTable()
            ]
        );
        $this->collectionLoader->setCallback(function (MessageOfTheDay &$obj) {
            if ($obj['must_accept']) {
                $obj['level'] = 'warning';
            } else {
                $obj['level'] = 'primary';
            }
        });
        return $this->collectionLoader->loadFromQuery($sql);
    }

    /**
     * @return Collection
     */
    public function loadUnread()
    {
        $sql = sprintf('
            SELECT
                *
            FROM
                %s
            WHERE
                (NOW() > `publish_date` OR `publish_date` IS NULL)
            AND
                (NOW() < `expiry_date` OR `expiry_date` IS NULL)
            ORDER BY
                expiry_date ASC
        ', $this->motdTable());
        $this->collectionLoader->setCallback(function (MessageOfTheDay &$obj) {
            if ($obj['must_accept']) {
                $obj['level'] = 'warning';
            } else {
                $obj['level'] = 'primary';
            }
        });
        return $this->collectionLoader->loadFromQuery($sql);
    }

    /**
     * @return CollectionLoader
     */
    private function createCollectionLoader()
    {
        return new CollectionLoader([
            'logger' => $this->logger,
            'factory' => $this->modelFactory,
            'model' => MessageOfTheDay::class
        ]);
    }

    /**
     * @return string
     */
    private function motdTable()
    {
        return preg_replace('/[^A-Za-z0-9_]/', '', $this->proto()->source()->table());
    }

    /**
     * @return MessageOfTheDay
     */
    private function proto()
    {
        return $this->modelFactory->get(MessageOfTheDay::class);
    }
}
