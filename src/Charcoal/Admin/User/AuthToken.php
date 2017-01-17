<?php

namespace Charcoal\Admin\User;

use DateTime;
use DateTimeInterface;
use InvalidArgumentException;

use Charcoal\Model\AbstractModel;

use Charcoal\Admin\User\AuthTokenMetadata;

use Charcoal\User\AuthToken as BaseAuthToken;

/**
 * Authorization token; to keep a user logged in
 */
class AuthToken extends BaseAuthToken
{

}
