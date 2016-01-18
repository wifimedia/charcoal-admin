<?php

namespace Charcoal\Admin;

// Module `charcoal-base` dependencies
use \Charcoal\User\AbstractUser;

// Local namespace dependencies
use \Charcoal\Admin\UserConfig;
use \Charcoal\Admin\UserGroup;

/**
* Admin User class
*/
class User extends AbstractUser
{
    /**
    * @return string
    */
    static public function sessionKey()
    {
        return 'admin.user';
    }

    /**
    * ConfigurableInterface > createConfig()
    *
    * @param array|null $data Optional
    * @return UserConfig
    */
    public function createConfig(array $data = null)
    {
        $config = new UserConfig();
        if ($data !== null) {
            $config->merge($data);
        }
        return $config;
    }

    /**
    * @param array|null $data Optional
    * @return UserGroup
    */
    public function createGroup(array $data = null)
    {
        $group =  new UserGroup();
        if ($data !== null) {
            $group->setData($data);
        }
        return $group;
    }

}
