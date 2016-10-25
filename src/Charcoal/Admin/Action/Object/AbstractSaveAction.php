<?php

namespace Charcoal\Admin\Action\Object;

use \InvalidArgumentException;

// PSR-7 (http messaging) dependencies
use \Psr\Http\Message\RequestInterface;
use \Psr\Http\Message\ResponseInterface;

use \Pimple\Container;

// From `charcoal-core`
use \Charcoal\Model\ModelInterface;
use \Charcoal\Model\ModelValidator;

// From `charcoal-base`
use \Charcoal\User\Authenticator;

// Intra-module (`charcoal-admin`) dependencies
use \Charcoal\Admin\AdminAction;
use \Charcoal\Admin\Ui\ObjectContainerInterface;
use \Charcoal\Admin\Ui\ObjectContainerTrait;

/**
 * Base Admin Save Action
 *
 * Common methods between Update and Save.
 */
abstract class AbstractSaveAction extends AdminAction implements ObjectContainerInterface
{
    use ObjectContainerTrait;

    /**
     * @var Authenticator $authenticator
     */
    private $authenticator;

    /**
     * @param Container $container A DI Container.
     * @return void
     */
    public function setDependencies(Container $container)
    {
        parent::setDependencies($container);

        $this->setAuthenticator($container['admin/authenticator']);
    }

    /**
     * @param Authenticator $authenticator The authenticator service.
     * @return void
     */
    protected function setAuthenticator(Authenticator $authenticator)
    {
        $this->authenticator = $authenticator;
    }

    /**
     * @return string
     */
    protected function authorIdent()
    {
        $author = $this->authenticator->authenticate();
        return (string)$author->id();
    }

    /**
     * @param ModelInterface|null $obj The object.
     * @return SaveAction Chainable
     */
    public function setObj($obj)
    {
        $this->obj = $obj;
        return $this;
    }

    /**
     * Merge the given object's validation results the response feedback.
     *
     * @param  ModelInterface       $obj     The validated object.
     * @param  string[]|string|null $filters Filter the levels to merge.
     * @throws InvalidArgumentException If the filters are invalid.
     * @return SaveAction Chainable
     */
    public function addFeedbackFromValidation(ModelInterface $obj, $filters = null)
    {
        $validator = $obj->validator();
        $levels    = [ ModelValidator::ERROR, ModelValidator::WARNING, ModelValidator::NOTICE ];

        if (is_string($filters) && in_array($filters, $levels)) {
            $results = call_user_func([ $validator, $filters.'Results' ]);
            foreach ($results as $result) {
                $this->addFeedback($result->level(), $result->message(), $result->ident());
            }

            return $this;
        }

        if (!is_array($filters) && $filters !== null) {
            throw new InvalidArgumentException(
                'Filters must be an array of validation levels or NULL'
            );
        }

        $validation = $validator->results();
        foreach ($validation as $level => $results) {
            if ($filters === null || in_array($level, $filters)) {
                foreach ($results as $result) {
                    $this->addFeedback($result->level(), $result->message(), $result->ident());
                }
            }
        }

        return $this;
    }

    /**
     * @return array
     */
    public function results()
    {
        return [
            'success'   => $this->success(),
            'obj_id'    => $this->obj()->id(),
            'obj'       => $this->obj(),
            'feedbacks' => $this->feedbacks()
        ];
    }
}
