<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Numberissimo
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="TapiocaDesign\ClassLiveGnvBundle\Entity\NumberissimoRepository")
 */
class Numberissimo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="floatissimo", type="float")
     */
    private $floatissimo;

    /**
     * @var string
     *
     * @ORM\Column(name="decimalissimo", type="decimal")
     */
    private $decimalissimo;

    /**
     * @var string
     *
     * @ORM\Column(name="decimalissimoprecision", type="decimal", precision=14, scale=8, nullable=true)
     */
    private $decimalissimoprecision;


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
     * Set floatissimo
     *
     * @param float $floatissimo
     * @return Numberissimo
     */
    public function setFloatissimo($floatissimo)
    {
        $this->floatissimo = $floatissimo;

        return $this;
    }

    /**
     * Get floatissimo
     *
     * @return float 
     */
    public function getFloatissimo()
    {
        return $this->floatissimo;
    }

    /**
     * Set decimalissimo
     *
     * @param string $decimalissimo
     * @return Numberissimo
     */
    public function setDecimalissimo($decimalissimo)
    {
        $this->decimalissimo = $decimalissimo;

        return $this;
    }

    /**
     * Get decimalissimo
     *
     * @return string 
     */
    public function getDecimalissimo()
    {
        return $this->decimalissimo;
    }

    /**
     * Set decimalissimoprecision
     *
     * @param string $decimalissimoprecision
     * @return Numberissimo
     */
    public function setDecimalissimoprecision($decimalissimoprecision)
    {
        $this->decimalissimoprecision = $decimalissimoprecision;

        return $this;
    }

    /**
     * Get decimalissimoprecision
     *
     * @return string 
     */
    public function getDecimalissimoprecision()
    {
        return $this->decimalissimoprecision;
    }
}
