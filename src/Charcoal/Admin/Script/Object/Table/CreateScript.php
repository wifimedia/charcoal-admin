<?php

namespace Charcoal\Admin\Script\Object\Table;

// PSR-7 (http messaging) dependencies
use \Psr\Http\Message\RequestInterface;
use \Psr\Http\Message\ResponseInterface;

// Module `charcoal-core` dependencies
use \Charcoal\Model\ModelFactory;

// Intra-module (`charcoal-admin`) dependencies
use \Charcoal\Admin\AdminScript;

/**
 * Create an object's table (sql source) according to its metadata's properties.
 */
class CreateScript extends AdminScript
{

    /**
     * @return array
     */
    public function defaultArguments()
    {
        $arguments = [
            'obj-type' => [
                'longPrefix'   => 'obj-type',
                'description'  => 'Object type',
                'defaultValue' => ''
            ]
        ];

        $arguments = array_merge(parent::defaultArguments(), $arguments);
        return $arguments;
    }

    /**
     * @param RequestInterface  $request  A PSR-7 compatible Request instance.
     * @param ResponseInterface $response A PSR-7 compatible Response instance.
     * @return ResponseInterface
     */
    public function run(RequestInterface $request, ResponseInterface $response)
    {
        unset($request);
// Unused

        $climate = $this->climate();

        $climate->underline()->out(
            'Create object table from metadata'
        );


        $obj_type = $this->argOrInput('obj-type');

        $model_factory = new ModelFactory();
        $obj = $model_factory->create($obj_type, [
            'logger'=>$this->logger
        ]);

        $source = $obj->source();

        $table = $source->table();

        if ($this->verbose()) {
            $climate->bold()->out(
                sprintf('The table "%s" will be created...', $table)
            );
            $metadata = $obj->metadata();
            $properties = $metadata->properties();
            $prop_names = array_keys($properties);
            $climate->out(
                sprintf(
                    'The %d following properties will be used: "%s"',
                    count($prop_names),
                    implode(', ', $prop_names)
                )
            );
        }

        $input = $climate->confirm(
            'Continue?'
        );
        if (!$input->confirmed()) {
            return $response;
        }

        if ($source->tableExists()) {
            $climate->error(
                sprintf('The table "%s" already exists. This script can only create new tables.', $table)
            );
            $climate->darkGray()->out(
                'If you want to alter the table with the latest object\'s metadata, run the `admin/object/table/alter` script.'
            );
            return $response;
        }

        $ret = $source->createTable();

        $climate->green()->out(
            "\n".'Success!'
        );

        return $response;
    }
}