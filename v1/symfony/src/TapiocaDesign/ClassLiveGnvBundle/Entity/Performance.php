<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;

/**
 * Performance
 *
 * @ORM\Table(name="performance")
 * @ORM\Entity(repositoryClass="TapiocaDesign\ClassLiveGnvBundle\Entity\PerformanceRepository")
 * @ExclusionPolicy("all") 
*/
class Performance
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
     * @var Work
     *
     * @ORM\ManyToOne(targetEntity="Work", inversedBy="performances")
     * @ORM\JoinColumn(name="work_id", referencedColumnName="id")
     * @Expose
     * @Groups({"withWork","workFromPerformance"})
     */
    private $work;

    /**
     * @var Place
     *
     * @ORM\ManyToOne(targetEntity="Place", inversedBy="performances")
     * @ORM\JoinColumn(name="place_id", referencedColumnName="id")
     * @Expose
     * @Groups({"placeFromPerformance"})
     */
    private $place;


    /**
     * @var string
     *
     * @ORM\Column(name="datePerformance", type="datetime")
     * @Expose
     * @Groups({"list","detail"})
     */
    private $datePerformance;

    /**
     * @var string
     *
     * @ORM\Column(name="ticketWebsite", type="string", length=255, nullable=true)
     * @Expose
     * @Groups({"list","detail", "performanceDetail"})
     */
    private $ticketWebsite;

    /**
     * @var string
     *
     * @ORM\Column(name="ticketEmail", type="string", length=32, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $ticketEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="ticketTelephone", type="string", length=16, nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $ticketTelephone;

    /**
     * @var string
     *
     * @ORM\Column(name="ticketPriceLowest", type="string", length=3, nullable=true)
     * @Expose
     * @Groups({"detail", "performanceDetail"})
     */
    private $ticketPriceLowest;

    /**
     * @var string
     *
     * @ORM\Column(name="ticketPriceHighest", type="string", length=3, nullable=true)
     * @Expose
     * @Groups({"detail", "performanceDetail"})
     */
    private $ticketPriceHighest;

    


/*******************************************************************/


    
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
     * Set datePerformance
     *
     * @param string $datePerformance
     * @return Performance
     */
    public function setDatePerformance($datePerformance)
    {
        $this->datePerformance = $datePerformance;

        return $this;
    }

    /**
     * Get datePerformance
     *
     * @return string 
     */
    public function getDatePerformance()
    {
        return $this->datePerformance;
    }


/**
     * Set ticketWebsite
     *
     * @param string $ticketWebsite
     * @return Performance
     */
    public function setTicketWebsite($ticketWebsite)
    {
        $this->ticketWebsite = $ticketWebsite;

        return $this;
    }

    /**
     * Get ticketWebsite
     *
     * @return string 
     */
    public function getTicketWebsite()
    {
        return $this->ticketWebsite;
    }


/**
     * Set ticketEmail
     *
     * @param string $ticketEmail
     * @return Performance
     */
    public function setTicketEmail($ticketEmail)
    {
        $this->ticketEmail = $ticketEmail;

        return $this;
    }

    /**
     * Get ticketEmail
     *
     * @return string 
     */
    public function getTicketEmail()
    {
        return $this->ticketEmail;
    }


/**
     * Set ticketTelephone
     *
     * @param string $ticketTelephone
     * @return Performance
     */
    public function setTicketTelephone($ticketTelephone)
    {
        $this->ticketTelephone = $ticketTelephone;

        return $this;
    }

    /**
     * Get ticketTelephone
     *
     * @return string 
     */
    public function getTicketTelephone()
    {
        return $this->ticketTelephone;
    }


/**
     * Set ticketPriceLowest
     *
     * @param string $ticketPriceLowest
     * @return Performance
     */
    public function setTicketPriceLowest($ticketPriceLowest)
    {
        $this->ticketPriceLowest = $ticketPriceLowest;

        return $this;
    }

    /**
     * Get ticketPriceLowest
     *
     * @return string 
     */
    public function getTicketPriceLowest()
    {
        return $this->ticketPriceLowest;
    }


/**
     * Set ticketPriceHighest
     *
     * @param string $ticketPriceHighest
     * @return Performance
     */
    public function setTicketPriceHighest($ticketPriceHighest)
    {
        $this->ticketPriceHighest = $ticketPriceHighest;

        return $this;
    }

    /**
     * Get ticketPriceHighest
     *
     * @return string 
     */
    public function getTicketPriceHighest()
    {
        return $this->ticketPriceHighest;
    }



    /**
     * Set work
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Work $work
     * @return Performance
     */
    public function setWork(\TapiocaDesign\ClassLiveGnvBundle\Entity\Work $work = null)
    {
        $this->work = $work;

        return $this;
    }

    /**
     * Get work
     *
     * @return \TapiocaDesign\ClassLiveGnvBundle\Entity\Work 
     */
    public function getWork()
    {
        return $this->work;
    }

    /**
     * Set place
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Place $place
     * @return Performance
     */
    public function setPlace(\TapiocaDesign\ClassLiveGnvBundle\Entity\Place $place = null)
    {
        $this->place = $place;

        return $this;
    }

    /**
     * Get place
     *
     * @return \TapiocaDesign\ClassLiveGnvBundle\Entity\Place 
     */
    public function getPlace()
    {
        return $this->place;
    }
}
