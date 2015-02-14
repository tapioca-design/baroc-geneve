<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\Security\Core\Exception\AccessDeniedException;

use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController as FOSRestController;
use FOS\RestBundle\View;

use JMS\Serializer\Annotation\ExclusionPolicy;
use JMS\Serializer\Annotation\Expose;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;
use JMS\Serializer\SerializationContext;


class PlaceRestController extends FOSRestController
{
    /*
    * @Rest\View(serializerGroups={"list"})
    */
    public function placesByCityAction($city_id){
    	$em = $this->getDoctrine()->getManager();
    	$places = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Place')
      ->findByCity($city_id);
      
      $view = $this->view($places, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list')));
      $view->setData($places);
      return $view;
  	}





    

    /*
    * @Rest\View(serializerGroups={"list","detail"})
    */
    public function placesWithPerformancesByCityAction($city_id){
      $em = $this->getDoctrine()->getManager();
      $places = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Place')
      ->findByCity($city_id);
      $placesWithAtLeastOnePerformance = array();
      foreach ($places as $key => $place) {
          $performances = $place->getPerformances();
          if (count($performances)>0) {
              $placesWithAtLeastOnePerformance[] = $place;
          }
      }
      $view = $this->view($placesWithAtLeastOnePerformance, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','detail')));
      $view->setData($placesWithAtLeastOnePerformance);
      return $view;
    }





    /*
    * @Rest\View(serializerGroups={"list"})
    */
    public function placeAction($place_id){
      $em = $this->getDoctrine()->getManager();
      $place = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Place')
      ->find($place_id);
      
      $view = $this->view($place, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('detail','placeGetPerformancesGetWorks')));
      $view->setData($place);
      return $view;
    }

    
}



