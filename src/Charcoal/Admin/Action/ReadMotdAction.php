<?php

namespace Charcoal\Admin\Action;

// Dependencies from `PHP`
use InvalidArgumentException;

use Pimple\Container;

// PSR-7 (http messaging) dependencies
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

// Intra-module (`charcoal-admin`) dependencies
use Charcoal\Admin\AdminAction;
use Charcoal\Admin\Object\MessageOfTheDay;
use Charcoal\Admin\Object\MessageOfTheDayLog;
use Charcoal\Admin\User;

/**
 *
 */
class ReadMotdAction extends AdminAction
{
    /**
     * @var string
     */
    private $nextUrl = '';

    /**
     * @var Charcoal\Admin\Service\MessageOfTheDayLoader
     */
    private $motdLoader;

    /**
     * @var Charcoal\Factory\FactoryInterface
     */
    private $logFactory;

    /**
     * @param Container $container Pimple DI Container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);
        $this->motdLoader = $container['admin/motd/loader'];
        $this->logFactory = $container['model/factory'];
    }

    /**
     * @param RequestInterface  $request  A PSR-7 compatible Request instance.
     * @param ResponseInterface $response A PSR-7 compatible Response instance.
     * @return ResponseInterface
     */
    public function run(RequestInterface $request, ResponseInterface $response)
    {
        $this->nextUrl = $request->getParam('next_url');
        $accepted = $request->getParam('accept');

        $user = $this->authenticator()->authenticate();
        $motds = $this->motdLoader->loadUnread();
        $errors = false;
        foreach ($motds as $motd) {
            if ($motd->mustAccept()) {
                if (!isset($accepted[$motd->id()]) || !$accepted[$motd->id()]) {
                    $errors = true;
                    $this->addFeedback('error', sprintf('The message "%s" must be accepted.', $motd->title()));
                    continue;
                } else {
                    $this->createMotdLog($motd, $user);
                }
            } else {
                $this->createMotdLog($motd, $user);
            }
        }

        if ($errors === false) {
            $this->addFeedback('success', 'All messages of the day were marked as read succesfully.');
            $this->setSuccess(true);
        }

        return $response;
    }

    /**
     * @return array
     */
    public function results()
    {
        return [
            'success'   => $this->success(),
            'feedback'  => $this->feedbacks(),
            'next_url'  => $this->nextUrl
        ];
    }

    /**
     * Create log
     *
     * @param MessageOfTheDay $motd The message to log.
     * @param User            $user The user.
     * @return void
     */
    private function createMotdLog(MessageOfTheDay $motd, User $user)
    {
        $log = $this->logFactory->create(MessageOfTheDayLog::class);
        $log->setData([
            'motd'      => $motd->id(),
            'user'      => $user->id(),
            'ts'        => 'now'
        ]);
        $log->save();
    }
}
