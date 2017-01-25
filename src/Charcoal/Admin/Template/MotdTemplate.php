<?php

namespace Charcoal\Admin\Template;

use DateTime;

use Pimple\Container;

use Charcoal\Translation\TranslationString;

use Charcoal\Admin\AdminTemplate;
use Charcoal\Admin\Service\MessageOfTheDayLoader;

/**
 *
 */
class MotdTemplate extends AdminTemplate
{
    /**
     * @var Charcoal\Admin\User
     */
    private $user;

    /**
     * @param Container $container Pimple DI Container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        $this->setMotdLoader($container['admin/motd/loader']);
        parent::setDependencies($container);
    }

    /**
     * @return Collection
     */
    public function motds()
    {
        return $this->motdLoader->load();
    }

    /**
     * @return TranslationSTring
     */
    public function title()
    {
        return new TranslationString('Messages importants');
    }

    /**
     * @return string
     */
    public function authUserName()
    {
        return $this->user()->username();
    }

    /**
     * @return string
     */
    public function authUserEmail()
    {
        return $this->user()->email();
    }

    /**
     * @return string
     */
    public function authDateString()
    {
        $format = 'F dS Y, H:i';
        return (new DateTime())->format($format);
    }

    /**
     * @param MessageOfTheDayLoader $loader The motd loader.
     * @return void
     */
    private function setMotdLoader(MessageOfTheDayLoader $loader)
    {
        $this->motdLoader = $loader;
    }

    /**
     * @return Charcoal\Admin\User
     */
    private function user()
    {
        if ($this->user === null) {
            $this->user = $this->authenticator()->authenticate();
        }
        return $this->user;
    }
}
