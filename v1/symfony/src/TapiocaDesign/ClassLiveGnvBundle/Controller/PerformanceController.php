<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use TapiocaDesign\ClassLiveGnvBundle\Entity\Performance;
use TapiocaDesign\ClassLiveGnvBundle\Form\PerformanceType;

/**
 * Performance controller.
 *
 * @Route("/performance")
 */
class PerformanceController extends Controller
{

    /**
     * Lists all Performance entities.
     *
     * @Route("/", name="performance")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new Performance entity.
     *
     * @Route("/", name="performance_create")
     * @Method("POST")
     * @Template("TapiocaDesignClassLiveGnvBundle:Performance:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity = new Performance();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('performance_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Performance entity.
     *
     * @param Performance $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Performance $entity)
    {
        $form = $this->createForm(new PerformanceType(), $entity, array(
            'action' => $this->generateUrl('performance_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Performance entity.
     *
     * @Route("/new", name="performance_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new Performance();
        $form   = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a Performance entity.
     *
     * @Route("/{id}", name="performance_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Performance entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Performance entity.
     *
     * @Route("/{id}/edit", name="performance_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Performance entity.');
        }

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
    * Creates a form to edit a Performance entity.
    *
    * @param Performance $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(Performance $entity)
    {
        $form = $this->createForm(new PerformanceType(), $entity, array(
            'action' => $this->generateUrl('performance_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
    /**
     * Edits an existing Performance entity.
     *
     * @Route("/{id}", name="performance_update")
     * @Method("PUT")
     * @Template("TapiocaDesignClassLiveGnvBundle:Performance:edit.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Performance entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('performance_edit', array('id' => $id)));
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    /**
     * Deletes a Performance entity.
     *
     * @Route("/{id}", name="performance_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Performance')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Performance entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('performance'));
    }

    /**
     * Creates a form to delete a Performance entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('performance_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm()
        ;
    }
}
