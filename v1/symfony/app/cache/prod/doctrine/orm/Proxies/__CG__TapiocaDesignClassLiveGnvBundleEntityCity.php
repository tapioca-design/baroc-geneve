<?php

namespace Proxies\__CG__\TapiocaDesign\ClassLiveGnvBundle\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class City extends \TapiocaDesign\ClassLiveGnvBundle\Entity\City implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array();



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return array('__isInitialized__', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'id', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'places', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'iso3', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'nameEn', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'nameFr', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'currency');
        }

        return array('__isInitialized__', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'id', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'places', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'iso3', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'nameEn', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'nameFr', '' . "\0" . 'TapiocaDesign\\ClassLiveGnvBundle\\Entity\\City' . "\0" . 'currency');
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (City $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', array());
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', array());
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', array());

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function setIso3($iso3)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setIso3', array($iso3));

        return parent::setIso3($iso3);
    }

    /**
     * {@inheritDoc}
     */
    public function getIso3()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getIso3', array());

        return parent::getIso3();
    }

    /**
     * {@inheritDoc}
     */
    public function setNameEn($nameEn)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNameEn', array($nameEn));

        return parent::setNameEn($nameEn);
    }

    /**
     * {@inheritDoc}
     */
    public function getNameEn()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNameEn', array());

        return parent::getNameEn();
    }

    /**
     * {@inheritDoc}
     */
    public function setNameFr($nameFr)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNameFr', array($nameFr));

        return parent::setNameFr($nameFr);
    }

    /**
     * {@inheritDoc}
     */
    public function getNameFr()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNameFr', array());

        return parent::getNameFr();
    }

    /**
     * {@inheritDoc}
     */
    public function setCurrency($currency)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCurrency', array($currency));

        return parent::setCurrency($currency);
    }

    /**
     * {@inheritDoc}
     */
    public function getCurrency()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCurrency', array());

        return parent::getCurrency();
    }

    /**
     * {@inheritDoc}
     */
    public function addPlace(\TapiocaDesign\ClassLiveGnvBundle\Entity\Place $places)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addPlace', array($places));

        return parent::addPlace($places);
    }

    /**
     * {@inheritDoc}
     */
    public function removePlace(\TapiocaDesign\ClassLiveGnvBundle\Entity\Place $places)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removePlace', array($places));

        return parent::removePlace($places);
    }

    /**
     * {@inheritDoc}
     */
    public function getPlaces()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPlaces', array());

        return parent::getPlaces();
    }

    /**
     * {@inheritDoc}
     */
    public function __toString()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, '__toString', array());

        return parent::__toString();
    }

}
