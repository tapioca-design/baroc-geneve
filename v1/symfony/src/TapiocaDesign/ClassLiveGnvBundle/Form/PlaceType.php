<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class PlaceType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nameUrl')
            ->add('nameShort')
            ->add('nameFr')
            ->add('nameEn')
            ->add('address')
            ->add('telephone')
            ->add('email')
            ->add('mapLatitude')
            ->add('mapLongitude')
            ->add('googleMapRef')
            ->add('website')
            ->add('imagePlaceMain')
            ->add('city')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'TapiocaDesign\ClassLiveGnvBundle\Entity\Place'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'tapiocadesign_classlivegnvbundle_place';
    }
}
