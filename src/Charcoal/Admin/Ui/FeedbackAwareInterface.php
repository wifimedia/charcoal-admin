<?php

namespace Charcoal\Admin\Ui;

/**
 * Defines a feedback collection.
 */
interface FeedbackAwareInterface
{
    /**
     * Retrieve the feedback.
     *
     * @return array|Traversable
     */
    public function feedbacks();

    /**
     * Determine if there's feedback available.
     *
     * @return boolean
     */
    public function hasFeedbacks();

    /**
     * Count feedback.
     *
     * @return integer
     */
    public function numFeedbacks();

    /**
     * Set a collection of feedback messages.
     *
     * @param  array $messages Array of messages.
     * @return FeedbackAwareInterface
     */
    public function setFeedbacks(array $messages);

    /**
     * Add a collection of feedback messages.
     *
     * @param  array $messages Array of messages.
     * @return FeedbackAwareInterface
     */
    public function addFeedbacks(array $messages);

    /**
     * Add a feedback message.
     *
     * @param  string $level   The feedback level.
     * @param  mixed  $message The feedback data.
     * @param  mixed  $ident   Optiona feedback ID.
     * @return FeedbackAwareInterface
     */
    public function addFeedback($level, $message, $ident = null);
}
