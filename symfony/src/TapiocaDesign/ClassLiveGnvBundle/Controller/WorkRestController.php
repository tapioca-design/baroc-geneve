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


class WorkRestController extends FOSRestController
{
    /*
    * @Rest\View(serializerGroups={"list","performancesFromWork"})
    */
    public function worksOrderedByFirstPerformanceAction($city_id){
    	$em = $this->getDoctrine()->getManager();
    	$places = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Place')
      ->findByCity($city_id);
      foreach ($places as $place) {
          $place_id = $place->getId();
          $performances = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')
          ->findBy(
              array("place"=>$place_id),
              array("datePerformance"=>"ASC")
            );
          foreach ($performances as $performance) {
              //store id of work of current place performances
              $work_ids[]= $performance->getWork()->getId();
          }
      }
      //if work id8 had 5 performances, we would have 5 * id8, we want it once
      $work_ids = array_unique($work_ids);
      $works = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Work')
      ->findBy(
        array("id"=>$work_ids)
        );
      $view = $this->view($works, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list',"performancesFromWork")));
      $view->setData($works);
      return $view;
  	}

    /*
    * @Rest\View(serializerGroups={"detail","performancesFromWork"})
    */
    public function workAction($work_id){
      $em = $this->getDoctrine()->getManager();
      $work = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Work')
      ->find($work_id);
      
      $view = $this->view($work, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','detail',"performancesFromWork")));
      $view->setData($work);
      return $view;
    }


    /*
    * @Rest\View(serializerGroups={"list", "performancesFromWork"})
    */
    public function worksByPlaceAction($place_id){
      $em = $this->getDoctrine()->getManager();
      $place = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Place')
      ->find($place_id);
      $place_id = $place->getId();

      $performances = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')
          ->findBy(
              array("place"=>$place_id),
              array("datePerformance"=>"ASC")
            );
      foreach ($performances as $performance) {
              //store id of work of current place performances
              $work_ids[]= $performance->getWork()->getId();
          }
          // //if work id8 had 5 performances, we would have 5 * id8, we want it once
      $work_ids = array_unique($work_ids);
      $works = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Work')
      ->findBy(
        array("id"=>$work_ids)
        );
      $view = $this->view($works, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list',"performancesFromWork")));
      $view->setData($works);
      return $view;

    }


  
}






