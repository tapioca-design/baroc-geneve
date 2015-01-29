<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class CityRestController extends Controller
{
    public function getAction($id){
    	$em = $this->getDoctrine()->getManager();
    	$city = $em->getRepository('TapiocaDesignClassLiveGnvBundle:City')->find($id);

      $places = $city->getPlaces();
      return $places;

    	return array('city' => $city);
  	}
  
  	public function allAction()
    {
    	
        $em = $this->getDoctrine()->getManager();
    	  $city = $em->getRepository('TapiocaDesignClassLiveGnvBundle:City')->findAll();
        return array('city' => $city);
    }
  	
}
