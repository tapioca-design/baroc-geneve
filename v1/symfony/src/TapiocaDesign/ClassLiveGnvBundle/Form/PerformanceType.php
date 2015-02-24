<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class PerformanceType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('datePerformance')
            ->add('ticketWebsite')
            ->add('ticketEmail')
            ->add('ticketTelephone')
            ->add('ticketPriceLowest')
            ->add('ticketPriceHighest')
            ->add('work')
            ->add('place')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'TapiocaDesign\ClassLiveGnvBundle\Entity\Performance'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'tapiocadesign_classlivegnvbundle_performance';
    }
}
