<?php

namespace Charcoal\Admin\Object;

use DateTime;
use DateTimeInterface;
use InvalidArgumentException;

use Charcoal\Model\AbstractModel;

use Charcoal\Object\PublishableInterface;
use Charcoal\Object\PublishableTrait;

use Charcoal\Translation\TranslationString;

/**
 * Message Of The Day appears upon login.
 */
class MessageOfTheDay extends AbstractModel implements PublishableInterface
{
    use PublishableTrait;

    /**
     * @var string
     */
    private $ident;

    /**
     * @var TranslationString
     */
    private $title;

    /**
     * @var TranslationString
     */
    private $content;

    /**
     * @var boolean
     */
    private $mustAccept = true;

    /**
     * @var string
     */
    private $acceptExpiry = '24 hours';

    /**
     * @return string
     */
    public function key()
    {
        return 'ident';
    }

    /**
     * @param string $ident The MOTD identifier.
     * @throws InvalidArgumentException If the identifier is not a string.
     * @return MessageOfTheDay Chainable
     */
    public function setIdent($ident)
    {
        if (!is_string($ident)) {
            throw new InvalidArgumentException(

            );
        }
        $this->ident = $ident;
        return $this;
    }

    /**
     * @return string
     */
    public function ident()
    {
        return $this->ident;
    }

    /**
     * @param string|null|TranslationString|Traversable $title The MOTD title.
     * @return MessageOfTheDay Chainable
     */
    public function setTitle($title)
    {
        $this->title = new TranslationString($title);
        return $this;
    }

    /**
     * @return TranslationString|null
     */
    public function title()
    {
        return $this->title;
    }

    /**
     * @param string|null|TranslationString|Traversable $content The MOTD content (actual message).
     * @return MessageOfTheDay Chainable
     */
    public function setContent($content)
    {
        $this->content = new TranslationString($content);
        return $this;
    }

    /**
     * @return TranslationString|null
     */
    public function content()
    {
        return $this->content;
    }

    /**
     * @param boolean $flag The must-accept flag.
     * @return MessageOfTheDay Chainable
     */
    public function setMustAccept($flag)
    {
        $this->mustAccept = !!$flag;
        return $this;
    }

    /**
     * @return boolean
     */
    public function mustAccept()
    {
        return $this->mustAccept;
    }
}
