<?php

namespace Charcoal\Admin\Ui;

/**
 * Provides an implementation of {@see \Charcoal\Admin\Ui\FeedbackAwareInterface}.
 */
trait FeedbackAwareTrait
{
    /**
     * Store messages for the end-user.
     *
     * @var array
     */
    protected $feedbacks = [];

    /**
     * Retrieve the feedback.
     *
     * @return array
     */
    public function feedbacks()
    {
        return $this->feedbacks;
    }

    /**
     * Determine if there's feedback available.
     *
     * @return boolean
     */
    public function hasFeedbacks()
    {
        return ($this->numFeedbacks() > 0);
    }

    /**
     * Count feedback.
     *
     * @return integer
     */
    public function numFeedbacks()
    {
        return count($this->feedbacks());
    }

    /**
     * Set a collection of feedback messages.
     *
     * @param  array $messages Array of messages.
     * @return FeedbackAwareInterface
     */
    public function setFeedbacks(array $messages)
    {
        $this->feedbacks = [];
        $this->addFeedbacks($messages);

        return $this;
    }

    /**
     * Add a collection of feedback messages.
     *
     * @param  array $messages Array of messages.
     * @return FeedbackAwareInterface
     */
    public function addFeedbacks(array $messages)
    {
        foreach ($messages as $id => $msg) {
            $this->addFeedback($level, $msg);
        }

        return $this;
    }

    /**
     * Add a feedback message.
     *
     * @param  string $level   The feedback level.
     * @param  mixed  $message The feedback data.
     * @param  mixed  $ident   Optiona feedback ID.
     * @return FeedbackAwareInterface
     */
    public function addFeedback($level, $message, $ident = null)
    {
        $this->feedbacks[] = [
            'msg'     => $message,
            'message' => $message,
            'level'   => $level,
            'ident'   => $ident
        ];

        return $this;
    }
}
