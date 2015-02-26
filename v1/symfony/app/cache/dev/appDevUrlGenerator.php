<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * appDevUrlGenerator
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appDevUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes = array(
        '_wdt' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:toolbarAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    1 =>     array (      0 => 'text',      1 => '/_wdt',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_home' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:homeAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_profiler/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_search' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:searchAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_profiler/search',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_search_bar' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:searchBarAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_profiler/search_bar',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_purge' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:purgeAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_profiler/purge',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_info' => array (  0 =>   array (    0 => 'about',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:infoAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'about',    ),    1 =>     array (      0 => 'text',      1 => '/_profiler/info',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_phpinfo' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:phpinfoAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_profiler/phpinfo',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_search_results' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:searchResultsAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/search/results',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    2 =>     array (      0 => 'text',      1 => '/_profiler',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.profiler:panelAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    1 =>     array (      0 => 'text',      1 => '/_profiler',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_router' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.router:panelAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/router',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    2 =>     array (      0 => 'text',      1 => '/_profiler',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_exception' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.exception:showAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/exception',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    2 =>     array (      0 => 'text',      1 => '/_profiler',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_profiler_exception_css' => array (  0 =>   array (    0 => 'token',  ),  1 =>   array (    '_controller' => 'web_profiler.controller.exception:cssAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/exception.css',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'token',    ),    2 =>     array (      0 => 'text',      1 => '/_profiler',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_configurator_home' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::checkAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_configurator/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_configurator_step' => array (  0 =>   array (    0 => 'index',  ),  1 =>   array (    '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::stepAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'index',    ),    1 =>     array (      0 => 'text',      1 => '/_configurator/step',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_configurator_final' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::finalAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/_configurator/final',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        '_twig_error_test' => array (  0 =>   array (    0 => 'code',    1 => '_format',  ),  1 =>   array (    '_controller' => 'twig.controller.preview_error:previewErrorPageAction',    '_format' => 'html',  ),  2 =>   array (    'code' => '\\d+',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => '[^/]++',      3 => '_format',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'code',    ),    2 =>     array (      0 => 'text',      1 => '/_error',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'tapiocadesign_classlive_default_index' => array (  0 =>   array (    0 => 'name',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveBundle\\Controller\\DefaultController::indexAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'name',    ),    1 =>     array (      0 => 'text',      1 => '/hello',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::indexAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/city/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_create' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::createAction',  ),  2 =>   array (    '_method' => 'POST',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/city/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_new' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::newAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/city/new',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_show' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::showAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_edit' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::editAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/edit',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_update' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::updateAction',  ),  2 =>   array (    '_method' => 'PUT',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'city_delete' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityController::deleteAction',  ),  2 =>   array (    '_method' => 'DELETE',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::indexAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/numberissimo/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_create' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::createAction',  ),  2 =>   array (    '_method' => 'POST',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/numberissimo/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_new' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::newAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/numberissimo/new',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_show' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::showAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/numberissimo',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_edit' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::editAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/edit',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/numberissimo',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_update' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::updateAction',  ),  2 =>   array (    '_method' => 'PUT',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/numberissimo',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'numberissimo_delete' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\NumberissimoController::deleteAction',  ),  2 =>   array (    '_method' => 'DELETE',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/numberissimo',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::indexAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/performance/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_create' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::createAction',  ),  2 =>   array (    '_method' => 'POST',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/performance/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_new' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::newAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/performance/new',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_show' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::showAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/performance',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_edit' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::editAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/edit',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/performance',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_update' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::updateAction',  ),  2 =>   array (    '_method' => 'PUT',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/performance',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'performance_delete' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceController::deleteAction',  ),  2 =>   array (    '_method' => 'DELETE',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/performance',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::indexAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/place/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_create' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::createAction',  ),  2 =>   array (    '_method' => 'POST',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/place/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_new' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::newAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/place/new',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_show' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::showAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_edit' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::editAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/edit',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_update' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::updateAction',  ),  2 =>   array (    '_method' => 'PUT',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'place_delete' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceController::deleteAction',  ),  2 =>   array (    '_method' => 'DELETE',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::indexAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/work/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_create' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::createAction',  ),  2 =>   array (    '_method' => 'POST',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/work/',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_new' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::newAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/work/new',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_show' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::showAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_edit' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::editAction',  ),  2 =>   array (    '_method' => 'GET',  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/edit',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_update' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::updateAction',  ),  2 =>   array (    '_method' => 'PUT',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'work_delete' => array (  0 =>   array (    0 => 'id',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkController::deleteAction',  ),  2 =>   array (    '_method' => 'DELETE',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'id',    ),    1 =>     array (      0 => 'text',      1 => '/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'homepage' => array (  0 =>   array (  ),  1 =>   array (    '_controller' => 'AppBundle\\Controller\\DefaultController::indexAction',  ),  2 =>   array (  ),  3 =>   array (    0 =>     array (      0 => 'text',      1 => '/app/example',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'acme_demo_city_all' => array (  0 =>   array (    0 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityRestController::allAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/api/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'acme_demo_city_get' => array (  0 =>   array (    0 => 'id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\CityRestController::getAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'id',    ),    2 =>     array (      0 => 'text',      1 => '/api/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_worksOrderedByFirstPerformance' => array (  0 =>   array (    0 => 'city_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::worksOrderedByFirstPerformanceAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'city_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/worksOrderedByFirstPerformance',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'city_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_work' => array (  0 =>   array (    0 => 'work_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::workAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'work_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'work_id',    ),    2 =>     array (      0 => 'text',      1 => '/api/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_placesByCity' => array (  0 =>   array (    0 => 'city_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placesByCityAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'city_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/places',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'city_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_placesWithPerformancesByCity' => array (  0 =>   array (    0 => 'city_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placesWithPerformancesByCityAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'city_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/placesWithPerformances',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'city_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/city',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_place' => array (  0 =>   array (    0 => 'place_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PlaceRestController::placeAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'place_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'place_id',    ),    2 =>     array (      0 => 'text',      1 => '/api/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_worksByPlace' => array (  0 =>   array (    0 => 'place_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\WorkRestController::worksByPlaceAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'work_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/works',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '[^/]++',      3 => 'place_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_performance' => array (  0 =>   array (    0 => 'performance_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performanceAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'performance_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'performance_id',    ),    2 =>     array (      0 => 'text',      1 => '/api/performance',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_performancesByPlace' => array (  0 =>   array (    0 => 'place_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByPlaceAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'place_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/performances',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'place_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_performancesByPlaceGroupedByWork' => array (  0 =>   array (    0 => 'place_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByPlaceGroupedByWorkAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'place_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/performancesGroupedByWork',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'place_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/place',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
        'TD_CLG_performancesByWork' => array (  0 =>   array (    0 => 'work_id',    1 => '_format',  ),  1 =>   array (    '_controller' => 'TapiocaDesign\\ClassLiveGnvBundle\\Controller\\PerformanceRestController::performancesByWorkAction',    '_format' => 'json',  ),  2 =>   array (    '_method' => 'GET',    'work_id' => '\\d+',    '_format' => 'xml|json|html',  ),  3 =>   array (    0 =>     array (      0 => 'variable',      1 => '.',      2 => 'xml|json|html',      3 => '_format',    ),    1 =>     array (      0 => 'text',      1 => '/performances',    ),    2 =>     array (      0 => 'variable',      1 => '/',      2 => '\\d+',      3 => 'work_id',    ),    3 =>     array (      0 => 'text',      1 => '/api/work',    ),  ),  4 =>   array (  ),  5 =>   array (  ),),
    );

    /**
     * Constructor.
     */
    public function __construct(RequestContext $context, LoggerInterface $logger = null)
    {
        $this->context = $context;
        $this->logger = $logger;
    }

    public function generate($name, $parameters = array(), $referenceType = self::ABSOLUTE_PATH)
    {
        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}