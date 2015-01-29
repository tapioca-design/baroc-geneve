<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;

/**
 * Work
 *
 * @ORM\Table(name="work")
 * @ORM\Entity(repositoryClass="TapiocaDesign\ClassLiveGnvBundle\Entity\WorkRepository")
 * @ExclusionPolicy("all") 
*/
class Work
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
     * @ORM\OneToMany(targetEntity="Performance", mappedBy="work")
     * @ORM\OrderBy({"datePerformance" = "ASC"})
     * @Expose
     * @Groups({"list","detail"})
     */
    private $performances;

    

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=64)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="composer", type="string", length=64, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $composer;

    /**
     * @var string
     *
     * @ORM\Column(name="interpreter", type="string", length=64, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $interpreter;

    /**
     * @var string
     *
     * @ORM\Column(name="director", type="string", length=64, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $director;

    /**
     * @var string
     *
     * @ORM\Column(name="style", type="string", length=64, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $style;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     * @Expose
     * @Groups({"detail"})
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="imageMain", type="string", length=64, nullable=true)
     * @Expose
     * @Groups({"list","detail"})
     */
    private $imageMain;

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
     * Set name
     *
     * @param string $name
     * @return Work
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set composer
     *
     * @param string $composer
     * @return Work
     */
    public function setComposer($composer)
    {
        $this->composer = $composer;

        return $this;
    }

    /**
     * Get composer
     *
     * @return string 
     */
    public function getComposer()
    {
        return $this->composer;
    }

    /**
     * Set interpreter
     *
     * @param string $interpreter
     * @return Work
     */
    public function setInterpreter($interpreter)
    {
        $this->interpreter = $interpreter;

        return $this;
    }

    /**
     * Get interpreter
     *
     * @return string 
     */
    public function getInterpreter()
    {
        return $this->interpreter;
    }

    /**
     * Set director
     *
     * @param string $director
     * @return Work
     */
    public function setDirector($director)
    {
        $this->director = $director;

        return $this;
    }

    /**
     * Get director
     *
     * @return string 
     */
    public function getDirector()
    {
        return $this->director;
    }




    /**
     * Set style
     *
     * @param string $style
     * @return Work
     */
    public function setStyle($style)
    {
        $this->style = $style;

        return $this;
    }

    /**
     * Get style
     *
     * @return string 
     */
    public function getStyle()
    {
        return $this->style;
    }





    /**
     * Set description
     *
     * @param string $description
     * @return Work
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set imageMain
     *
     * @param string $imageMain
     * @return Work
     */
    public function setImageMain($imageMain)
    {
        $this->imageMain = $imageMain;

        return $this;
    }

    /**
     * Get imageMain
     *
     * @return string 
     */
    public function getImageMain()
    {
        return $this->imageMain;
    }

    /**
     * Add performances
     *
     * @param \TapiocaDesign\ClassLiveGnvBundle\Entity\Performance $performances
     * @return Work
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
        return $this->getName();
    }
}
