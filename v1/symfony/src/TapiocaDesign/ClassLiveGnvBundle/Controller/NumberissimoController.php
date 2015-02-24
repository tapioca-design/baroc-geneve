<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use TapiocaDesign\ClassLiveGnvBundle\Entity\Numberissimo;
use TapiocaDesign\ClassLiveGnvBundle\Form\NumberissimoType;

/**
 * Numberissimo controller.
 *
 * @Route("/numberissimo")
 */
class NumberissimoController extends Controller
{

    /**
     * Lists all Numberissimo entities.
     *
     * @Route("/", name="numberissimo")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Numberissimo')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new Numberissimo entity.
     *
     * @Route("/", name="numberissimo_create")
     * @Method("POST")
     * @Template("TapiocaDesignClassLiveGnvBundle:Numberissimo:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity = new Numberissimo();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('numberissimo_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Numberissimo entity.
     *
     * @param Numberissimo $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Numberissimo $entity)
    {
        $form = $this->createForm(new NumberissimoType(), $entity, array(
            'action' => $this->generateUrl('numberissimo_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Numberissimo entity.
     *
     * @Route("/new", name="numberissimo_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new Numberissimo();
        $form   = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a Numberissimo entity.
     *
     * @Route("/{id}", name="numberissimo_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Numberissimo')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Numberissimo entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Numberissimo entity.
     *
     * @Route("/{id}/edit", name="numberissimo_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Numberissimo')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Numberissimo entity.');
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
    * Creates a form to edit a Numberissimo entity.
    *
    * @param Numberissimo $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(Numberissimo $entity)
    {
        $form = $this->createForm(new NumberissimoType(), $entity, array(
            'action' => $this->generateUrl('numberissimo_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
    /**
     * Edits an existing Numberissimo entity.
     *
     * @Route("/{id}", name="numberissimo_update")
     * @Method("PUT")
     * @Template("TapiocaDesignClassLiveGnvBundle:Numberissimo:edit.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Numberissimo')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Numberissimo entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('numberissimo_edit', array('id' => $id)));
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    /**
     * Deletes a Numberissimo entity.
     *
     * @Route("/{id}", name="numberissimo_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('TapiocaDesignClassLiveGnvBundle:Numberissimo')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Numberissimo entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('numberissimo'));
    }

    /**
     * Creates a form to delete a Numberissimo entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('numberissimo_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm()
        ;
    }
}
