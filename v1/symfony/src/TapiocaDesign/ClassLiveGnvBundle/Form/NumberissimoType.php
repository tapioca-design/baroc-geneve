<?php

namespace TapiocaDesign\ClassLiveGnvBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class NumberissimoType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('floatissimo')
            ->add('decimalissimo')
            ->add('decimalissimoprecision')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'TapiocaDesign\ClassLiveGnvBundle\Entity\Numberissimo'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'tapiocadesign_classlivegnvbundle_numberissimo';
    }
}
