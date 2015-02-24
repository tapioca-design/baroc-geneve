<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appProdUrlMatcher
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);
        $context = $this->context;
        $request = $this->request;

        if (0 === strpos($pathinfo, '/hello')) {
            // rachida_biscuitanis_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'rachida_biscuitanis_default_index')), array (  '_controller' => 'Rachida\\BiscuitAnisBundle\\Controller\\DefaultController::indexAction',));
            }

            // ploncarddassac_hospitalisation_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'ploncarddassac_hospitalisation_default_index')), array (  '_controller' => 'PloncardDAssac\\HospitalisationBundle\\Controller\\DefaultController::indexAction',));
            }

            // pouletdebresse_pleinair_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'pouletdebresse_pleinair_default_index')), array (  '_controller' => 'PouletDeBresse\\PleinAirBundle\\Controller\\DefaultController::indexAction',));
            }

            // iancurtis_laundrydrier_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'iancurtis_laundrydrier_default_index')), array (  '_controller' => 'IanCurtis\\LaundryDrierBundle\\Controller\\DefaultController::indexAction',));
            }

            // axeneuf_flyingsaucer_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'axeneuf_flyingsaucer_default_index')), array (  '_controller' => 'AxeNeuf\\FlyingSaucerBundle\\Controller\\DefaultController::indexAction',));
            }

            // tapiocadesign_classlive_default_index
            if (preg_match('#^/hello/(?P<name>[^/]++)$#s', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'tapiocadesign_classlive_default_index')), array (  '_controller' => 'TapiocaDesign\\ClassLiveBundle\\Controller\\DefaultController::indexAction',));
            }

        }

        if (0 === strpos($pathinfo, '/city')) {
            // city
            if (rtrim($pathinfo, '/') === '/city') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_city;
                }

                if (substr($pathinfo, -1) !== '/') {
                    return $this->redirect($pathinfo.'/', 'city');
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::indexAction',  '_route' => 'city',);
            }
            not_city:

            // city_create
            if ($pathinfo === '/city/') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_city_create;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::createAction',  '_route' => 'city_create',);
            }
            not_city_create:

            // city_new
            if ($pathinfo === '/city/new') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_city_new;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::newAction',  '_route' => 'city_new',);
            }
            not_city_new:

            // city_show
            if (preg_match('#^/city/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_city_show;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'city_show')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::showAction',));
            }
            not_city_show:

            // city_edit
            if (preg_match('#^/city/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_city_edit;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'city_edit')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::editAction',));
            }
            not_city_edit:

            // city_update
            if (preg_match('#^/city/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'PUT') {
                    $allow[] = 'PUT';
                    goto not_city_update;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'city_update')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::updateAction',));
            }
            not_city_update:

            // city_delete
            if (preg_match('#^/city/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_city_delete;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'city_delete')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::deleteAction',));
            }
            not_city_delete:

        }

        if (0 === strpos($pathinfo, '/numberissimo')) {
            // numberissimo
            if (rtrim($pathinfo, '/') === '/numberissimo') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_numberissimo;
                }

                if (substr($pathinfo, -1) !== '/') {
                    return $this->redirect($pathinfo.'/', 'numberissimo');
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::indexAction',  '_route' => 'numberissimo',);
            }
            not_numberissimo:

            // numberissimo_create
            if ($pathinfo === '/numberissimo/') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_numberissimo_create;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::createAction',  '_route' => 'numberissimo_create',);
            }
            not_numberissimo_create:

            // numberissimo_new
            if ($pathinfo === '/numberissimo/new') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_numberissimo_new;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::newAction',  '_route' => 'numberissimo_new',);
            }
            not_numberissimo_new:

            // numberissimo_show
            if (preg_match('#^/numberissimo/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_numberissimo_show;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'numberissimo_show')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::showAction',));
            }
            not_numberissimo_show:

            // numberissimo_edit
            if (preg_match('#^/numberissimo/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_numberissimo_edit;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'numberissimo_edit')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::editAction',));
            }
            not_numberissimo_edit:

            // numberissimo_update
            if (preg_match('#^/numberissimo/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'PUT') {
                    $allow[] = 'PUT';
                    goto not_numberissimo_update;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'numberissimo_update')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::updateAction',));
            }
            not_numberissimo_update:

            // numberissimo_delete
            if (preg_match('#^/numberissimo/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_numberissimo_delete;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'numberissimo_delete')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::deleteAction',));
            }
            not_numberissimo_delete:

        }

        if (0 === strpos($pathinfo, '/p')) {
            if (0 === strpos($pathinfo, '/performance')) {
                // performance
                if (rtrim($pathinfo, '/') === '/performance') {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_performance;
                    }

                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', 'performance');
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::indexAction',  '_route' => 'performance',);
                }
                not_performance:

                // performance_create
                if ($pathinfo === '/performance/') {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_performance_create;
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::createAction',  '_route' => 'performance_create',);
                }
                not_performance_create:

                // performance_new
                if ($pathinfo === '/performance/new') {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_performance_new;
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::newAction',  '_route' => 'performance_new',);
                }
                not_performance_new:

                // performance_show
                if (preg_match('#^/performance/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_performance_show;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'performance_show')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::showAction',));
                }
                not_performance_show:

                // performance_edit
                if (preg_match('#^/performance/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_performance_edit;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'performance_edit')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::editAction',));
                }
                not_performance_edit:

                // performance_update
                if (preg_match('#^/performance/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_performance_update;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'performance_update')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::updateAction',));
                }
                not_performance_update:

                // performance_delete
                if (preg_match('#^/performance/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_performance_delete;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'performance_delete')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::deleteAction',));
                }
                not_performance_delete:

            }

            if (0 === strpos($pathinfo, '/place')) {
                // place
                if (rtrim($pathinfo, '/') === '/place') {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_place;
                    }

                    if (substr($pathinfo, -1) !== '/') {
                        return $this->redirect($pathinfo.'/', 'place');
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::indexAction',  '_route' => 'place',);
                }
                not_place:

                // place_create
                if ($pathinfo === '/place/') {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_place_create;
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::createAction',  '_route' => 'place_create',);
                }
                not_place_create:

                // place_new
                if ($pathinfo === '/place/new') {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_place_new;
                    }

                    return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::newAction',  '_route' => 'place_new',);
                }
                not_place_new:

                // place_show
                if (preg_match('#^/place/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_place_show;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'place_show')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::showAction',));
                }
                not_place_show:

                // place_edit
                if (preg_match('#^/place/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_place_edit;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'place_edit')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::editAction',));
                }
                not_place_edit:

                // place_update
                if (preg_match('#^/place/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_place_update;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'place_update')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::updateAction',));
                }
                not_place_update:

                // place_delete
                if (preg_match('#^/place/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_place_delete;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'place_delete')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::deleteAction',));
                }
                not_place_delete:

            }

        }

        if (0 === strpos($pathinfo, '/work')) {
            // work
            if (rtrim($pathinfo, '/') === '/work') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_work;
                }

                if (substr($pathinfo, -1) !== '/') {
                    return $this->redirect($pathinfo.'/', 'work');
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::indexAction',  '_route' => 'work',);
            }
            not_work:

            // work_create
            if ($pathinfo === '/work/') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_work_create;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::createAction',  '_route' => 'work_create',);
            }
            not_work_create:

            // work_new
            if ($pathinfo === '/work/new') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_work_new;
                }

                return array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::newAction',  '_route' => 'work_new',);
            }
            not_work_new:

            // work_show
            if (preg_match('#^/work/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_work_show;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'work_show')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::showAction',));
            }
            not_work_show:

            // work_edit
            if (preg_match('#^/work/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_work_edit;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'work_edit')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::editAction',));
            }
            not_work_edit:

            // work_update
            if (preg_match('#^/work/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'PUT') {
                    $allow[] = 'PUT';
                    goto not_work_update;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'work_update')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::updateAction',));
            }
            not_work_update:

            // work_delete
            if (preg_match('#^/work/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_work_delete;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'work_delete')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::deleteAction',));
            }
            not_work_delete:

        }

        if (0 === strpos($pathinfo, '/ap')) {
            // homepage
            if ($pathinfo === '/app/example') {
                return array (  '_controller' => 'AppBundle\\Controller\\DefaultController::indexAction',  '_route' => 'homepage',);
            }

            if (0 === strpos($pathinfo, '/api')) {
                if (0 === strpos($pathinfo, '/api/city')) {
                    // acme_demo_city_all
                    if (preg_match('#^/api/city(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_acme_demo_city_all;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'acme_demo_city_all')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityRestController::allAction',  '_format' => 'json',));
                    }
                    not_acme_demo_city_all:

                    // acme_demo_city_get
                    if (preg_match('#^/api/city/(?P<id>\\d+)(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_acme_demo_city_get;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'acme_demo_city_get')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityRestController::getAction',  '_format' => 'json',));
                    }
                    not_acme_demo_city_get:

                    // TD_CLG_worksOrderedByFirstPerformance
                    if (preg_match('#^/api/city/(?P<city_id>\\d+)/worksOrderedByFirstPerformance(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_TD_CLG_worksOrderedByFirstPerformance;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_worksOrderedByFirstPerformance')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::worksOrderedByFirstPerformanceAction',  '_format' => 'json',));
                    }
                    not_TD_CLG_worksOrderedByFirstPerformance:

                }

                // TD_CLG_work
                if (0 === strpos($pathinfo, '/api/work') && preg_match('#^/api/work/(?P<work_id>\\d+)(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_TD_CLG_work;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_work')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::workAction',  '_format' => 'json',));
                }
                not_TD_CLG_work:

                if (0 === strpos($pathinfo, '/api/city')) {
                    // TD_CLG_placesByCity
                    if (preg_match('#^/api/city/(?P<city_id>\\d+)/places(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_TD_CLG_placesByCity;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_placesByCity')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placesByCityAction',  '_format' => 'json',));
                    }
                    not_TD_CLG_placesByCity:

                    // TD_CLG_placesWithPerformancesByCity
                    if (preg_match('#^/api/city/(?P<city_id>\\d+)/placesWithPerformances(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_TD_CLG_placesWithPerformancesByCity;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_placesWithPerformancesByCity')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placesWithPerformancesByCityAction',  '_format' => 'json',));
                    }
                    not_TD_CLG_placesWithPerformancesByCity:

                }

                if (0 === strpos($pathinfo, '/api/p')) {
                    if (0 === strpos($pathinfo, '/api/place')) {
                        // TD_CLG_place
                        if (preg_match('#^/api/place/(?P<place_id>\\d+)(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TD_CLG_place;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_place')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placeAction',  '_format' => 'json',));
                        }
                        not_TD_CLG_place:

                        // TD_CLG_worksByPlace
                        if (preg_match('#^/api/place/(?P<place_id>[^/]++)/works(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TD_CLG_worksByPlace;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_worksByPlace')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::worksByPlaceAction',  '_format' => 'json',));
                        }
                        not_TD_CLG_worksByPlace:

                    }

                    // TD_CLG_performance
                    if (0 === strpos($pathinfo, '/api/performance') && preg_match('#^/api/performance/(?P<performance_id>\\d+)(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_TD_CLG_performance;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_performance')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performanceAction',  '_format' => 'json',));
                    }
                    not_TD_CLG_performance:

                    if (0 === strpos($pathinfo, '/api/place')) {
                        // TD_CLG_performancesByPlace
                        if (preg_match('#^/api/place/(?P<place_id>\\d+)/performances(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TD_CLG_performancesByPlace;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_performancesByPlace')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByPlaceAction',  '_format' => 'json',));
                        }
                        not_TD_CLG_performancesByPlace:

                        // TD_CLG_performancesByPlaceGroupedByWork
                        if (preg_match('#^/api/place/(?P<place_id>\\d+)/performancesGroupedByWork(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TD_CLG_performancesByPlaceGroupedByWork;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_performancesByPlaceGroupedByWork')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByPlaceGroupedByWorkAction',  '_format' => 'json',));
                        }
                        not_TD_CLG_performancesByPlaceGroupedByWork:

                    }

                }

                // TD_CLG_performancesByWork
                if (0 === strpos($pathinfo, '/api/work') && preg_match('#^/api/work/(?P<work_id>\\d+)/performances(?:\\.(?P<_format>xml|json|html))?$#s', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_TD_CLG_performancesByWork;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'TD_CLG_performancesByWork')), array (  '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByWorkAction',  '_format' => 'json',));
                }
                not_TD_CLG_performancesByWork:

            }

        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
