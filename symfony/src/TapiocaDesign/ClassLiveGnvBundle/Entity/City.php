<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation as JMS;
use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;

/**
 * City
 *
 * @ORM\Table(name="city")
 * @ORM\Entity(repositoryClass="TapiocaDesign\ClassLiveGnvBundle\Entity\CityRepository")
 * @ExclusionPolicy("all") 
 */
class City
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Expose
     * @Groups({"list","detail"})
     */
    private $id;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Place", mappedBy="city")
     * @Expose
     * @Groups({"list","detail"})
     */
    private $places;

    /**
     * @var string
     *
     * @ORM\Column(name="iso3", type="string", length=3, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $iso3;

    /**
     * @var string
     *
     * @ORM\Column(name="nameEn", type="string", length=16, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameEn;

    /**
     * @var string
     *
     * @ORM\Column(name="nameFr", type="string", length=16, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameFr;

    /**
     * @var string
     *
     * @ORM\Column(name="currency", type="string", length=3, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $currency;

/*********************************************************/
public function __construct() {
        $this->places = new ArrayCollection();
    }
    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    

    /**
     * Set iso3
     *
     * @param string $iso3
     * @return City
     */
    public function setIso3($iso3)
    {
        $this->iso3 = $iso3;

        return $this;
    }

    /**
     * Get iso3
     *
     * @return string 
     */
    public function getIso3()
    {
        return $this->iso3;
    }

    /**
     * Set nameEn
     *
     * @param string $nameEn
     * @return City
     */
    public function setNameEn($nameEn)
    {
        $this->nameEn = $nameEn;

        return $this;
    }

    /**
     * Get nameEn
     *
     * @return string 
     */
    public function getNameEn()
    {
        return $this->nameEn;
    }

    /**
     * Set nameFr
     *
     * @param string $nameFr
     * @return City
     */
    public function setNameFr($nameFr)
    {
        $this->nameFr = $nameFr;

        return $this;
    }

    /**
     * Get nameFr
     *
     * @return string 
     */
    public function getNameFr()
    {
        return $this->nameFr;
    }

    /**
     * Set currency
     *
     * @param string $currency
     * @return City
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;

        return $this;
    }

    /**
     * Get currency
     *
     * @return string 
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * Add places
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Work $places
     * @return City
     */
    public function addPlace(\TapiocaDesign\ClassLiveGnvBundle\Entity\Place $places)
    {
        $this->places[] = $places;

        return $this;
    }

    /**
     * Remove places
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Work $places
     */
    public function removePlace(\TapiocaDesign\ClassLiveGnvBundle\Entity\Place $places)
    {
        $this->places->removeElement($places);
    }

    /**
     * Get places
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getPlaces()
    {
        return $this->places;
    }

    /*
* @return string
*/
    public function __toString() {
        return $this->getNameEn();
    }
}
