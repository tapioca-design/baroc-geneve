<?php

namespace Shawee\TestApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\Annotations as Rest;

use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class UserRestController extends Controller
{
    public function getUserAction($id){
    	$em = $this->getDoctrine()->getManager();
		//$entities = $em->getRepository('TapiocaDesignClassLiveGnvBundle:City')->findAll();
		//$user = $em->getRepository('ShaweeTestApiBundle:User')->findOneByUsername($username);
    	$user = $em->getRepository('ShaweeTestApiBundle:User')->find($id);
    	//$user = $em->getRepository('ShaweeTestApiBundle:User')->findAll();
    	//die($user);
		/*
    	if(!is_object($user)){
     	 throw $this->createNotFoundException("User not found for id:"+$id);
    	}
    	*/
    	return $user;
  	}
  	public function getUsersallAction(){
    	$em = $this->getDoctrine()->getManager();
    	$users = $em->getRepository('ShaweeTestApiBundle:User')->findAll();
    	return $users;
  	}
  	public function allAction()
    {
    	/*
		* @Rest\View
    	*/
        $em = $this->getDoctrine()->getManager();
    	$users = $em->getRepository('ShaweeTestApiBundle:User')->findAll();
        return array('users' => $users);
    }
  	
}
