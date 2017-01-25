<?php

namespace Charcoal\Admin\Object;

use DateTime;
use DateTimeInterface;
use InvalidArgumentException;

// Module `charcoal-core` dependencies
use Charcoal\Model\AbstractModel;

/**
 * Log message-of-the-day read (accept).
 */
class MessageOfTheDayLog extends AbstractModel
{
    /**
     * Action logged (Only supported: "read")
     * @var string
     */
    protected $action = 'read';

    /**
     * MessageOfTheDay ID
     * @var string
     */
    private $motd;

    /**
     * User ID
     * @var string
     */
    private $user;

    /**
     * @var DateTimeInterface|null
     */
    private $ts;

    /**
     * @var string $ip
     */
    private $ip;

    /**
     * @var string $SessionId
     */
    private $sessionId;

    /**
     * @param string $motd The message-of-the-day ID.
     * @return MessageOfTheDayLog Chainable
     */
    public function setMotd($motd)
    {
        $this->motd = $motd;
        return $this;
    }

    /**
     * @return string
     */
    public function motd()
    {
        return $this->motd;
    }

    /**
     * @param string $user The admin user ID.
     * @return MessageOfTheDayLog Chainable
     */
    public function setUser($user)
    {
        $this->user = $user;
        return $this;
    }

    /**
     * @return string
     */
    public function user()
    {
        return $this->user;
    }

    /**
     * @param string|DateTimeInterface|null $ts The timestamp of the log.
     * @throws InvalidArgumentException If the timestamp is not valid.
     * @return AbstractMessageLog Chainable
     */
    public function setTs($ts)
    {
        if ($ts === null || $ts === '') {
            $this->ts = null;
            return $this;
        }
        if (is_string($ts)) {
            $ts = new DateTime($ts);
        }
        if (!($ts instanceof DateTimeInterface)) {
            throw new InvalidArgumentException(
                'Invalid log "ts" value. Must be a date/time string or a DateTime object.'
            );
        }
        $this->ts = $ts;
        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function ts()
    {
        return $this->ts;
    }

    /**
     * @param integer $ip The request IP.
     * @throws InvalidArgumentException If the ip is not a string or integer.
     * @return MessageOfTheDayLog Chainable
     */
    public function setIp($ip)
    {
        if ($ip === null) {
            $this->ip = null;
            return $this;
        }
        if (is_int($ip)) {
            $ip = long2ip($ip);
        }
        if (!is_string($ip)) {
            throw new InvalidArgumentException(
                'IP must be a string or an integer.'
            );
        }
        $this->ip = $ip;
        return $this;
    }

    /**
     * @return string|integer
     */
    public function ip()
    {
        return $this->ip;
    }

    /**
     * @param string|null $sessionId The session ID.
     * @throws InvalidArgumentException If the session id is not a string.
     * @return MessageOfTheDayLog Chainable
     */
    public function setSessionId($sessionId)
    {
        if ($sessionId === null) {
            $this->sessionId = null;
            return $this;
        }
        if (!is_string($sessionId)) {
            throw new InvalidArgumentException(
                'session_id must be a string'
            );
        }
        $this->sessionId = $sessionId;
        return $this;
    }

    /**
     * @return string
     */
    public function sessionId()
    {
        return $this->sessionId;
    }

    /**
     * StorableTrait > pre_save()
     *
     * Save ip and session_id
     *
     * @return void
     */
    public function preSave()
    {
        parent::preSave();

        $ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
        $sessionId = session_id();

        $this->setIp($ip);
        $this->setSessionId($sessionId);
    }
}
