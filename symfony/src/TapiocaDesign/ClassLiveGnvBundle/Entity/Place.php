<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;

/**
 * Place
 *
 * @ORM\Table(name="place")
 * @ORM\Entity(repositoryClass="TapiocaDesign\ClassLiveGnvBundle\Entity\PlaceRepository")
 * @ExclusionPolicy("all") 
 */
class Place
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
     * @var City
     *
     * @ORM\ManyToOne(targetEntity="City", inversedBy="works")
     * @ORM\JoinColumn(name="city_id", referencedColumnName="id")
     * @Groups({"detail"})
     */
    private $city;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Performance", mappedBy="place")
     * @Expose
     * @Groups({"detail"})
     */
    private $performances;

    /**
     * @var string
     *
     * @ORM\Column(name="nameUrl", type="string", length=32)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="nameShort", type="string", length=32)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameShort;


    /**
     * @var string
     *
     * @ORM\Column(name="nameFr", type="string", length=128)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameFr;

    /**
     * @var string
     *
     * @ORM\Column(name="nameEn", type="string", length=128)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $nameEn;

    /**
     * @var string
     *
     * @ORM\Column(name="googleMapRef", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $googleMapRef;

    /**
     * @var string
     *
     * @ORM\Column(name="website", type="string", length=255)
     * @Expose
     * @Groups({"detail"})
     */
    private $website;

    /**
     * @var string
     *
     * @ORM\Column(name="imagePlaceMain", type="string", length=16, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $imagePlaceMain;

    
/******************************************************************/
public function __construct() {
        $this->performances = new ArrayCollection();
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
     * Set nameFr
     *
     * @param string $nameFr
     * @return Place
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
     * Set nameEn
     *
     * @param string $nameEn
     * @return Place
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
     * Set nameUrl
     *
     * @param string $nameUrl
     * @return Place
     */
    public function setNameUrl($nameUrl)
    {
        $this->nameUrl = $nameUrl;

        return $this;
    }

    /**
     * Get nameUrl
     *
     * @return string 
     */
    public function getNameUrl()
    {
        return $this->nameUrl;
    }


/**
     * Set nameShort
     *
     * @param string $nameShort
     * @return Place
     */
    public function setNameShort($nameShort)
    {
        $this->nameShort = $nameShort;

        return $this;
    }

    /**
     * Get nameShort
     *
     * @return string 
     */
    public function getNameShort()
    {
        return $this->nameShort;
    }

    /**
     * Set googleMapRef
     *
     * @param string $googleMapRef
     * @return Place
     */
    public function setGoogleMapRef($googleMapRef)
    {
        $this->googleMapRef = $googleMapRef;

        return $this;
    }

    /**
     * Get googleMapRef
     *
     * @return string 
     */
    public function getGoogleMapRef()
    {
        return $this->googleMapRef;
    }

    /**
     * Set website
     *
     * @param string $website
     * @return Work
     */
    public function setWebsite($website)
    {
        $this->website = $website;

        return $this;
    }

    /**
     * Get website
     *
     * @return string 
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * Set imagePlaceMain
     *
     * @param string $imagePlaceMain
     * @return Place
     */
    public function setImagePlaceMain($imagePlaceMain)
    {
        $this->imagePlaceMain = $imagePlaceMain;

        return $this;
    }

    /**
     * Get imagePlaceMain
     *
     * @return string 
     */
    public function getImagePlaceMain()
    {
        return $this->imagePlaceMain;
    }

    
    

    /**
     * Set city
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\City $city
     * @return Place
     */
    public function setCity(\TapiocaDesign\ClassLiveGnvBundle\Entity\City $city = null)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return \TapiocaDesign\ClassLiveGnvBundle\Entity\City 
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Add performances
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Performance $performances
     * @return Place
     */
    public function addPerformance(\TapiocaDesign\ClassLiveGnvBundle\Entity\Performance $performances)
    {
        $this->performances[] = $performances;

        return $this;
    }

    /**
     * Remove performances
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Performance $performances
     */
    public function removePerformance(\TapiocaDesign\ClassLiveGnvBundle\Entity\Performance $performances)
    {
        $this->performances->removeElement($performances);
    }

    /**
     * Get performances
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getPerformances()
    {
        return $this->performances;
    }

/*
* @return string
*/
    public function __toString() {
        return $this->getNameEn();
    }
}
