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
     * @ORM\Column(name="address", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $email;





    /**
     * @var string
     *
     * @ORM\Column(name="mapLatitude", type="string", length=32, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $mapLatitude;
    /**
     * @var string
     *
     * @ORM\Column(name="mapLongitude", type="string", length=32, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $mapLongitude;








    /**
     * @var string
     *
     * @ORM\Column(name="googleMapRef", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
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
     * Set address
     *
     * @param string $address
     * @return Place
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->address;
    }
    /**
     * Set telephone
     *
     * @param string $telephone
     * @return Place
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string 
     */
    public function getTelephone()
    {
        return $this->telephone;
    }
    /**
     * Set email
     *
     * @param string $email
     * @return Place
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }








    /**
     * Set mapLatitude
     *
     * @param string $mapLatitude
     * @return Place
     */
    public function setMapLatitude($mapLatitude)
    {
        $this->mapLatitude = $mapLatitude;

        return $this;
    }

    /**
     * Get mapLatitude
     *
     * @return string 
     */
    public function getMapLatitude()
    {
        return $this->mapLatitude;
    }
    /**
     * Set mapLongitude
     *
     * @param string $mapLongitude
     * @return Place
     */
    public function setMapLongitude($mapLongitude)
    {
        $this->mapLongitude = $mapLongitude;

        return $this;
    }

    /**
     * Get mapLongitude
     *
     * @return string 
     */
    public function getMapLongitude()
    {
        return $this->mapLongitude;
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
