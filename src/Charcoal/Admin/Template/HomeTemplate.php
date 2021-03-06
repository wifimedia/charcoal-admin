<?php

namespace Charcoal\Admin\Template;

// From 'charcoal-admin'
use Charcoal\Admin\AdminTemplate;
use Charcoal\Admin\Ui\DashboardContainerInterface;
use Charcoal\Admin\Ui\DashboardContainerTrait;
use Charcoal\Admin\Widget\DashboardWidget;

/**
 * The Home template is a simple Dashboard, loaded from the metadata.
 */
class HomeTemplate extends AdminTemplate implements DashboardContainerInterface
{
    use DashboardContainerTrait;

    /**
     * @return mixed
     */
    public function createDashboardConfig()
    {
        unset($data);

        return $this->dashboardConfig();
    }
}
