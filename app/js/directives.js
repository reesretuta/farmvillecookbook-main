var directives = angular.module('appDirectives',[]);


directives.directive('recipegallery', function($timeout) {
  
  return {
    restrict: 'A',
    templateUrl: 'farmvillecookbook-main/app/views/partials/recipegallery.html',
    replace: true,
    link: function(scope, element, attribute){
      //console.log(scope.recipe); //access to controllers scope

      scope.number = scope.recipe.heroImageCount;

      scope.getNumber = function(num){
        return new Array(num);
      }
      
      
      $timeout(function(){
        $('#slideshow-wrap').unslider({
          speed: 500,               //  The speed to animate each slide (in milliseconds)
          delay: 6000,              //  The delay between slide animations (in milliseconds)
          complete: function() {},  //  A function that gets called after every slide animation
          keys: true,               //  Enable keyboard (left, right) arrow shortcuts
          dots: true,               //  Display dot navigation
          fluid: false              //  Support responsive design. May break non-responsive designs
        });
      });
      

  
      window.scrollTo(0,0);
    }
  };
  


});



directives.directive('resize', ['$window', '$rootScope', function($window, $rootScope){
    return {
        restrict:"A",
        link:function(scope, element, attr){
          scope.onResize = function(){

            if ($window.innerWidth < 667) {
              
              $rootScope.ismobile = true;
            }else{
              $rootScope.ismobile = false;
            }
            
          }
          scope.onResize();
          
          angular.element($window).bind('resize',function(){
            scope.onResize();
          });
          
          
          
            // scope.breakpoint = {class:'', windowSize:$window.innerWidth }; // Initialise Values
//
//             var breakpoints = (scope.$eval(attr.breakpoint));
//
//             angular.element($window).bind('resize', setWindowSize);
//
//             scope.$watch('breakpoint.windowSize', function(windowWidth, oldValue){
//                 setClass(windowWidth);
//             });
// 
//             scope.$watch('breakpoint.class', function(newClass, oldClass) {
//                 if (newClass != oldClass) broadcastEvent();
//             });
//
//             function broadcastEvent (oldClass) {
//                 $rootScope.$broadcast('breakpointChange', scope.breakpoint, oldClass);
//             }
//
//             function setWindowSize (){
//                 scope.breakpoint.windowSize = $window.innerWidth;
//                 if(!scope.$$phase) scope.$apply();
//             }
//
//             function setClass(windowWidth){
//                 var breakpointClass = breakpoints[Object.keys(breakpoints)[0]];
//                 for (var breakpoint in breakpoints){
//                     if (breakpoint < windowWidth) breakpointClass = breakpoints[breakpoint];
//                     element.removeClass(breakpoints[breakpoint]);
//                 }
//                 element.addClass(breakpointClass);
//                 scope.breakpoint.class  = breakpointClass;
//                 if(!scope.$$phase) scope.$apply();
//             }
        }
    };
}]);

directives.directive('directions',['templateResolveService',function(templateResolveService){

  return {
    restrict: 'AE',
    template: '<div ng-include="getContentUrl()"></div>',
    link: function(scope, element, attrs){
      scope.getContentUrl = function(){
        return 'farmvillecookbook-main/public/images/recipes/'+scope.recipe.id+'/directions.html';
      }
    }
    
  }
}]);

directives.directive('thumbgallery',function($timeout, $rootScope){

  return {
    restrict: 'A',
    link: function(scope, element, attrs){
          element.on('mouseenter',function(){

                  
                  if ($rootScope.ismobile != true) {
                      
                              play();
                               myVar = setInterval(function(){
                                 play();
                              }, 750);

                              function play(){
                                if (element.find('img:visible').length === 1) {
                                  element.find('img').show(); //if the last pic is showing. reset
                                }else{
                                  element.find('img:visible:last').hide();
                                  // li.find('img').show();
                                }
                              }


                              element.on('mouseleave',function(){
                                  clearInterval(myVar);
                                  element.find('img').show();
                              })
                  }

          });
    }
  }
  
});







// if ($rootScope.ismobile != true) {
//
//   $("body").on('mouseenter','#categories li',function(){
//          var myVar = '';
//         var li = $(this);
//         play();
//          myVar = setInterval(function(){
//            play();
//         }, 750);
//
//         function play(){
//           if (li.find('img:visible').length === 1) {
//             li.find('img').show(); //if the last pic is showing. reset
//           }else{
//             li.find('img:visible:last').hide();
//             // li.find('img').show();
//           }
//         }
//
//
//         li.on('mouseleave',function(){
//             clearInterval(myVar);
//             console.log('cleared');
//             li.find('img').show();
//         })
//
//   });
//
//
// }