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

class PerformanceRestController extends FOSRestController
{
    /*
    * @Rest\View(serializerGroups={"list","withWork"})
    */
    public function performanceAction($performance_id){
    	$em = $this->getDoctrine()->getManager();
    	$performance = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($performance_id);

    	$view = $this->view($performance, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','withWork')));
      $view->setData($performance);
      return $view;
  	}
  
  	
}