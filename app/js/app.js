var app = angular.module('cookbookApp',['ui.router','ngSanitize','appControllers','appDirectives','appServices']);

app.config(function($stateProvider, $locationProvider){

    $stateProvider
    .state('home',
        {url: '/farmvillecookbook-main/', templateUrl: 'farmvillecookbook-main/app/views/templates/home.html'})
    .state('recipes',
        {url: '/farmvillecookbook-main/:category' , templateUrl: 'farmvillecookbook-main/app/views/templates/recipes.html', controller: 'recipesController'})
    .state('recipes.recipe',
        {url: '/:recipe', templateUrl: 'farmvillecookbook-main/app/views/templates/recipe.html', controller: 'recipeController'})
    .state('print',
        {url: '/farmvillecookbook-main/print/:category/:recipe', templateUrl: 'farmvillecookbook-main/app/views/templates/print.html', controller: 'printController'});
    
    $locationProvider.html5Mode(true);
    
});


app.run(function($rootScope, $state, $stateParams, $window, $location){
        $rootScope.$on('$stateChangeSuccess', function(event){
            if (!$window.ga) {
                return;
            }
            // $window.ga('send', 'pageview', { page: $location.path(), title: $state.current.name});
            // $window.ga('send', 'pageview', { page: $location.path(), title: $state.current.title });
        });

});