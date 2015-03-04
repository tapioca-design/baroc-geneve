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
    * @Rest\View(serializerGroups={"list","placeFromPerformance","workFromPerformance"})
    */
    public function performanceAction($performance_id){
    	$em = $this->getDoctrine()->getManager();
    	$performance = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($performance_id);

    	$view = $this->view($performance, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list',"placeFromPerformance",'workFromPerformance')));
      $view->setData($performance);
      return $view;
  	}






    /*
    * @Rest\View(serializerGroups={"list","placeFromPerformance","workFromPerformance"})
    */
    public function performancesByPlaceAction($place_id){
      $repository = $this->getDoctrine()
    ->getRepository('TapiocaDesignClassLiveGnvBundle:Performance');

      $query = $repository->createQueryBuilder('p')
          ->where('p.place = :place_id')
          ->setParameter('place_id', $place_id)
          ->getQuery();
      $performances = $query->getResult();
      $view = $this->view($performances, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','placeFromPerformance','workFromPerformance')));
      $view->setData($performances);
      return $view;
    }





    /*
    * @Rest\View(serializerGroups={"list","workFromPerformance"})
    */
    public function performancesByPlaceGroupedByWorkAction($place_id){

    //   $repository = $this->getDoctrine()
    // ->getRepository('TapiocaDesignClassLiveGnvBundle:Performance');
    //   $query = $repository->createQueryBuilder('p')
    //       ->where('p.place = :place_id')
    //       ->setParameter('place_id', $place_id)
    //       ->orderBy('p.datePerformance', 'ASC')
    //       ->groupBy('p.work')
          
    //       ->getQuery();
    //   $performances = $query->getResult();


      $em = $this->getDoctrine()->getManager();
      $query = $em->createQuery('
        SELECT p, min(p.datePerformance)
        FROM TapiocaDesign\ClassLiveGnvBundle\Entity\Performance p 
        LEFT JOIN TapiocaDesign\ClassLiveGnvBundle\Entity\Place pl WITH p.place = pl.id
        WHERE pl = '.$place_id.' 
        AND p.datePerformance > CURRENT_DATE() 
        GROUP BY p.work  
        ORDER BY p.datePerformance DESC
        
        ');
        // AND p.datePerformance > CURRENT_TIMESTAMP()
        //GROUP BY p.work
        $performances = $query->getResult();

        foreach($performances as $key => $performance){
                //change "2015-02-20 21:00:00" TO "2015-02-20t210000" or sthing like that, i mean DATE_ATOM, so Angular date formatting works properly
                $performances[$key][1] = date(DATE_ATOM, strtotime($performances[$key][1]));
            
        }



      $view = $this->view($performances, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','workFromPerformance')));
      $view->setData($performances);
      return $view;
    }





    /*
    * @Rest\View(serializerGroups={"list","detail",'placeFromPerformance'})
    */
    public function performancesByWorkAction($work_id){

      $repository = $this->getDoctrine()
    ->getRepository('TapiocaDesignClassLiveGnvBundle:Performance');
      $query = $repository->createQueryBuilder('p')
          ->where('p.work = :work_id')
          ->andWhere('p.datePerformance > CURRENT_DATE() ')
          ->setParameter('work_id', $work_id)
          ->orderBy('p.datePerformance', 'ASC')

          
          
          ->getQuery();
      $performances = $query->getResult();
      
      $view = $this->view($performances, 200);
      $view->setSerializationContext(SerializationContext::create()->setGroups(array('list','performanceDetail','placeFromPerformance')));
      $view->setData($performances);
      return $view;
    }



    
  
  	
}
