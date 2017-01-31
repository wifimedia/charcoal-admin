<?php

namespace Charcoal\Admin\Ui;

use Exception;
use InvalidArgumentException;

// From `charcoal-factory'
use Charcoal\Factory\FactoryInterface;

// From `charcoal-core`
use Charcoal\Loader\CollectionLoader;
use Charcoal\Model\Collection;
use Charcoal\Model\ModelInterface;

// From `charcoal-property`
use Charcoal\Property\PropertyInterface;

// From `charcoal-view`
use Charcoal\View\ViewInterface;

/**
 * Fully implements CollectionContainerInterface
 */
trait CollectionContainerTrait
{
    /**
     * @var FactoryInterface $modelFactory
     */
    private $modelFactory;

    /**
     * @var CollectionLoader $collectionLoader
     */
    private $collectionLoader;

    /**
     * @var string $objType
     */
    private $objType;

    /**
     * @var string $collectionIdent
     */
    private $collectionIdent;

    /**
     * Collection configuration.
     *
     * @var array|null
     */
    private $collectionConfig;

    /**
     * Default collection configuration.
     *
     * @var array|null
     */
    private $defaultCollectionConfig;

    /**
     * @var integer $numTotal
     */
    private $numTotal;

    /**
     * @var Collection $collection
     */
    private $collection;

    /**
     * @var FactoryInterface $propertyDisplayFactory
     */
    private $propertyDisplayFactory;

    /**
     * @var mixed $currentObjId
     */
    protected $currentObjId;

    /**
     * @var mixed $currentObj
     */
    protected $currentObj;

    /**
     * @var ModelInterface $proto
     */
    private $proto;

    /**
     * In memory copy of the PropertyDisplay object
     * @var PropertyInputInterface $display
     */
    protected $display;

    /**
     * @var ViewInterface $view
     */
    private $view;

    /**
     * @param ViewInterface|array $view The view instance.
     * @return CollectionContainerInterface Chainable
     */
    public function setView(ViewInterface $view)
    {
        $this->view = $view;

        return $this;
    }

    /**
     * @throws Exception If the view instance is not previously set / injected.
     * @return ViewInterface The object's view.
     */
    public function view()
    {
        if ($this->view === null) {
            throw new Exception(
                'View instance is not set for table widget'
            );
        }

        return $this->view;
    }

    /**
     * @param FactoryInterface $factory The model factory, to create model objects.
     * @return CollectionContainerInterface Chainable
     */
    public function setModelFactory(FactoryInterface $factory)
    {
        $this->modelFactory = $factory;

        return $this;
    }

    /**
     * Model Factory getter.
     *
     * @throws Exception If the model factory was not previously set.
     * @return FactoryInterface
     */
    protected function modelFactory()
    {
        if ($this->modelFactory === null) {
            throw new Exception(
                sprintf('Model Factory is not defined for "%s"', get_class($this))
            );
        }

        return $this->modelFactory;
    }

    /**
     * @param FactoryInterface $factory The property display factory.
     * @return CollectionContainerInterface Chainable
     */
    private function setPropertyDisplayFactory(FactoryInterface $factory)
    {
        $this->propertyDisplayFactory = $factory;

        return $this;
    }

    /**
     * @throws Exception If the property display factory was not previously injected / set.
     * @return FactoryInterface
     */
    private function propertyDisplayFactory()
    {
        if ($this->propertyDisplayFactory === null) {
            throw new Exception(
                'No property display factory. '.get_class($this)
            );
        }

        return $this->propertyDisplayFactory;
    }

    /**
     * @param CollectionLoader $loader The collection loader.
     * @return CollectionContainerInterface Chainable
     */
    public function setCollectionLoader(CollectionLoader $loader)
    {
        $this->collectionLoader = $loader;

        return $this;
    }

    /**
     * Safe Collection Loader getter.
     * Create the loader if it was not set / injected.
     *
     * @return CollectionLoader
     */
    protected function collectionLoader()
    {
        if ($this->collectionLoader === null) {
            $this->collectionLoader = $this->createCollectionLoader();
        }

        return $this->collectionLoader;
    }

    /**
     * Create a collection loader.
     *
     * @return CollectionLoader
     */
    protected function createCollectionLoader()
    {
        return new CollectionLoader([
            'logger'  => $this->logger,
            'factory' => $this->modelFactory()
        ]);
    }

    /**
     * @param string $objType The collection's object type.
     * @throws InvalidArgumentException If provided argument is not of type 'string'.
     * @return CollectionContainerInterface Chainable
     */
    public function setObjType($objType)
    {
        if (!is_string($objType)) {
            throw new InvalidArgumentException(
                'Obj type must be a string'
            );
        }
        $this->objType = str_replace([ '.', '_' ], '/', $objType);

        return $this;
    }

    /**
     * @return string
     */
    public function objType()
    {
        return $this->objType;
    }

    /**
     * Set the identifier of the collection to use.
     *
     * @param  string $collectionIdent The collection identifier.
     * @throws InvalidArgumentException If the identifier argument is not a string.
     * @return CollectionContainerInterface Chainable
     */
    public function setCollectionIdent($collectionIdent)
    {
        if (!is_string($collectionIdent)) {
            throw new InvalidArgumentException(
                'Collection identifier must be a string'
            );
        }
        $this->collectionIdent = $collectionIdent;

        return $this;
    }

    /**
     * Retrieve the identifier of the collection to use, or its fallback.
     *
     * @return string
     */
    public function collectionIdentFallback()
    {
        $metadata = $this->proto()->metadata();

        if (isset($metadata['admin']['default_list'])) {
            return $metadata['admin']['default_list'];
        }

        return $this->collectionIdent;
    }

    /**
     * Retrieve the identifier of the collection to use.
     *
     * @return string|null
     */
    public function collectionIdent()
    {
        return $this->collectionIdent;
    }

    /**
     * Return the current collection metadata.
     *
     * @return array
     */
    public function collectionMetadata()
    {
        $collectionIdent = $this->collectionIdent();

        if (!$collectionIdent) {
            $collectionIdent = $this->collectionIdentFallback();
        }

        if (!$collectionIdent) {
            return [];
        }

        $objMeta = $this->proto()->metadata();

        if (isset($objMeta['admin']['lists'][$collectionIdent])) {
            return $objMeta['admin']['lists'][$collectionIdent];
        } else {
            return [];
        }
    }

    /**
     * Retrieve the collection configset.
     *
     * @return array|null
     */
    public function collectionConfig()
    {
        if ($this->collectionConfig === null) {
            $this->collectionConfig = $this->createCollectionConfig();
        }

        return $this->collectionConfig;
    }

    /**
     * Replace the collection's configset with the given parameters.
     *
     * @param  mixed $config New collection config values.
     * @return CollectionContainerInterface Chainable
     */
    public function setCollectionConfig($config)
    {
        if (empty($config) || !is_array($config)) {
            $config = [];
        }

        $this->collectionConfig = array_replace_recursive(
            $this->defaultCollectionConfig(),
            $this->parseCollectionConfig($config)
        );

        return $this;
    }

    /**
     * Merge given parameters into the collection's configset.
     *
     * @param  array $config New collection config values.
     * @return self
     */
    public function mergeCollectionConfig(array $config)
    {
        if ($this->collectionConfig === null) {
            $this->setCollectionConfig($config);

            return $this;
        }

        $this->collectionConfig = array_replace_recursive(
            $this->defaultCollectionConfig(),
            $this->collectionConfig,
            $this->parseCollectionConfig($config)
        );

        return $this;
    }

    /**
     * Stub: Parse given parameters into the collection's config set.
     *
     * @param  array $config New collection config values.
     * @return array
     */
    protected function parseCollectionConfig(array $config)
    {
        return array_filter($config, function ($val) {
            return !empty($val) || is_numeric($val);
        });
    }

    /**
     * Retrieve the default collection configuration.
     *
     * The default configset is determined by the collection ident and object type, if assigned.
     *
     * @return array|null
     */
    protected function defaultCollectionConfig()
    {
        if ($this->defaultCollectionConfig === null) {
            $this->defaultCollectionConfig = $this->collectionMetadata();
        }

        return $this->defaultCollectionConfig;
    }

    /**
     * Stub: reimplement in classes using this trait.
     *
     * @return mixed
     */
    protected function createCollectionConfig()
    {
        return $this->collectionMetadata();
    }

    /**
     * @return integer
     */
    public function page()
    {
        $collectionConfig = $this->collectionConfig();
        if (isset($collectionConfig['pagination']['page'])) {
            return $collectionConfig['pagination']['page'];
        }

        return 1;
    }

    /**
     * @return integer
     */
    public function numPerPage()
    {
        $collectionConfig = $this->collectionConfig();
        if (isset($collectionConfig['pagination']['num_per_page'])) {
            return $collectionConfig['pagination']['num_per_page'];
        }

        return 0;
    }

    /**
     * @return integer
     */
    public function numPages()
    {
        if ($this->numPerPage() === 0) {
            return 0;
        }

        return ceil($this->numTotal() / $this->numPerPage());
    }

    /**
     * @param mixed $collection The collection.
     * @return CollectionContainerInterface Chainable
     */
    public function setCollection($collection)
    {
        $this->collection = $collection;

        return $this;
    }

    /**
     * @return Collection
     */
    public function collection()
    {
        if ($this->collection === null) {
            $this->collection = $this->createCollection();
        }

        return $this->collection;
    }

    /**
     * @todo Integrate $data; merge with $collectionConfig
     * @param array $data Optional collection data.
     * @throws Exception If the object type of the colletion has not been set.
     * @return CollectionLoader
     */
    public function createCollection(array $data = null)
    {
        $objType = $this->objType();
        if (!$objType) {
            throw new Exception(sprintf(
                '%1$s cannot create collection. Object type is not defined.',
                get_class($this)
            ));
        }
        $obj = $this->modelFactory()->create($objType);

        $loader = $this->collectionLoader();
        $loader->setModel($obj);

        $collectionConfig = $this->collectionConfig();
        if (is_array($collectionConfig) && !empty($collectionConfig)) {
            unset($collectionConfig['properties']);
            $loader->setData($collectionConfig);
        }

        if ($data) {
            $loader->setData($data);
        }

        $collection = $loader->load();

        return $collection;
    }

    /**
     * @return array
     */
    public function objects()
    {
        return $this->collection()->values();
    }

    /**
     * Sort the objects before they are displayed as rows.
     *
     * This method is useful for classes using this trait.
     *
     * @return array
     */
    public function sortObjects()
    {
        return $this->objects();
    }

    /**
     * Sort the properties before they are displayed as columns.
     *
     * This method is useful for classes using this trait.
     *
     * @return array
     */
    public function sortProperties()
    {
        return $this->properties();
    }

    /**
     * Supplies properties for objects in table template specific to object configuration.
     *
     * @return array This metod is a generator.
     */
    public function objectRows()
    {
        // Get properties as defined in object's list metadata
        $properties = $this->sortProperties();

        // Collection objects
        $objects = $this->sortObjects();

        // Go through each object to generate an array of properties listed in object's list metadata
        foreach ($objects as $object) {
            $objectProperties = [];

            foreach ($properties as $propertyIdent => $propertyData) {
                $property = $object->property($propertyIdent);

                $propertiesOptions = $this->propertiesOptions();
                if (isset($propertiesOptions[$propertyIdent])) {
                    $property->setData($propertiesOptions[$propertyIdent]);
                }

                $this->setupDisplayPropertyValue($object, $property);

                $displayType = $this->display->displayType();
                $this->display->setPropertyVal($object->propertyValue($propertyIdent));

                $propertyValue = $this->view()->renderTemplate($displayType, $this->display);

                $objectProperties[] = $this->parsePropertyCell($object, $property, $propertyValue);
            };

            $this->currentObj = $object;
            $this->currentObjId = $object->id();

            $row = $this->parseObjectRow($object, $objectProperties);

            yield $row;
        }

        $this->currentObj = null;
        $this->currentObjId = null;
    }

    /**
     * Setup the property's display value before its assigned to the object row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  ModelInterface    $object   The current row's object.
     * @param  PropertyInterface $property The current property.
     * @return void
     */
    protected function setupDisplayPropertyValue(ModelInterface $object, PropertyInterface $property)
    {
        $displayType = $property->displayType();

        $this->display = $this->propertyDisplayFactory()->create($displayType);
        $this->display->setDisplayType($displayType);
        $this->display->setProperty($property);

        $metadata = $property->metadata();
        $objMetadata = $object->metadata()->property($property->ident());

        if ($objMetadata) {
            $metadata->setData($objMetadata);
        }

        $this->display->setData($metadata);
        $this->display->setData($property->viewOptions($displayType));
    }

    /**
     * Filter the property before its assigned to the object row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  ModelInterface    $object        The current row's object.
     * @param  PropertyInterface $property      The current property.
     * @param  string            $propertyValue The property $key's display value.
     * @return array
     */
    protected function parsePropertyCell(
        ModelInterface $object,
        PropertyInterface $property,
        $propertyValue
    ) {
        unset($object);

        return [
            'ident' => $property->ident(),
            'val'   => trim($propertyValue)
        ];
    }

    /**
     * Filter the object before its assigned to the row.
     *
     * This method is useful for classes using this trait.
     *
     * @param  ModelInterface $object           The current row's object.
     * @param  array          $objectProperties The $object's display properties.
     * @return array
     */
    protected function parseObjectRow(ModelInterface $object, array $objectProperties)
    {
        return [
            'object'           => $object,
            'objectId'         => $object->id(),
            'objectProperties' => $objectProperties
        ];
    }

    /**
     * @return boolean
     */
    public function hasObjects()
    {
        return (count($this->objects()) > 0);
    }

    /**
     * @return integer
     */
    public function numObjects()
    {
        return count($this->objects());
    }

    /**
     * @throws Exception If obj type was not set.
     * @return integer
     */
    public function numTotal()
    {
        if ($this->numTotal === null) {
            $objType = $this->objType();
            if (!$objType) {
                throw new Exception(sprintf(
                    '%1$s cannot create collection. Object type is not defined.',
                    get_class($this)
                ));
            }
            $obj = $this->modelFactory()->create($objType);

            $loader = $this->collectionLoader();
            $loader->setModel($obj);

            $collectionConfig = $this->collectionConfig();
            if (is_array($collectionConfig) && !empty($collectionConfig)) {
                unset($collectionConfig['properties']);
                $loader->setData($collectionConfig);
            }

            $this->numTotal = $loader->loadCount();
        }

        return $this->numTotal;
    }

    /**
     * @param boolean $reload If true, reload will be forced.
     * @throws InvalidArgumentException If the object type is not defined / can not create prototype.
     * @return object
     */
    public function proto($reload = false)
    {
        if ($this->proto === null || $reload) {
            $objType = $this->objType();
            if ($objType === null) {
                throw new InvalidArgumentException(
                    sprintf('%s Can not create an object prototype: object type is null.', get_class($this))
                );
            }
            $this->proto = $this->modelFactory()->create($objType);
        }

        return $this->proto;
    }
}
