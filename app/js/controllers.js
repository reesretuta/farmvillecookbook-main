var controllers = angular.module('appControllers', []);

controllers.controller('recipeController', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    var recipeId = $stateParams.recipe;

    var myRecipe = _.find(recipes,function(item){
      return item.id == recipeId;
    });

    // if (myRecipe.bio.length != 0) {
    //   myRecipe.bio = myRecipe.bio + ','
    // }
    
    $scope.recipe = myRecipe;
    
    var myCategory = _.find(categories,function(item){
      return item.id == $stateParams.category;
    });
    
    $scope.category = myCategory;
    
    
    
    $('.pinterest').on('click',function(){
        // var origin = window.location.origin;
        // var origin = 'http://farmvilletotable.com';
        //
        // var recipeTitle = $("#recipe-title").text();
        // var url = encodeURIComponent('http://farmvilletotable.com'),
        //
        // media = encodeURIComponent(origin+'/public/images/recipes/'+$scope.recipe.id+'/thumb1.jpg'),
        // description= encodeURIComponent(recipeTitle + ' brought to you by FarmVille2: Country Escape. Find more at farmvilletotable.com! #fv2table');
        // var shareurl = 'http://www.pinterest.com/pin/create/button/?url='+url+"&media="+media+"&description="+description;
        // window.open(shareurl,'_blank',"width=600,height=400");
    });
    
    
}]);
  
controllers.controller('recipesController',['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope){
    

    $scope.range = function(min, max, step){
      step = step || 1;
      var input = [];
      for (var i = max; i >= min; i = i - step) input.push(i);
      return input;
    };
    
    $scope.category = _.find(categories,function(item){
      return item.id == $stateParams.category;
    });

    //return all recipes with category and populate scope for the view. use ng-repeat in view
    $scope.recipes = _.filter(recipes,function(item){
      return item.categoryId == $stateParams.category;
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
    
    
}]);



// controllers.controller('printController',['$scope', '$stateParams', '$rootScope',
//   function($scope, $stateParams, $rootScope){
//
//       var recipeId = $stateParams.recipe;
//
//       var myRecipe = _.find(recipes,function(item){
//         return item.id == recipeId;
//       });
//
//       $scope.category = _.find(categories,function(item){
//         return item.id == $stateParams.category;
//       });
//
//       if (myRecipe.bio.length != 0) {
//         myRecipe.bio = myRecipe.bio + ','
//       }
//
//       $scope.recipe = myRecipe;
//
//       console.log($scope.recipe);
//
//     //
//     // $scope.recipes = _.filter(recipes,function(item){
//     //   return item.categoryId == $stateParams.category;
//     // });
//     //
//     //
//     // if ($rootScope.ismobile != true) {
//     //   var myVar = {};
//     //   $("body").on('mouseenter','#categories li',function(){
//     //         var li = $(this);
//     //         play();
//     //          myVar = setInterval(function(){
//     //            play();
//     //         }, 750);
//     //         function play(){
//     //           if (li.find('img:visible').length == 1) {
//     //             li.find('img').show(); //if the last pic is showing. reset
//     //           }else{
//     //             li.find('img:visible:last').hide();
//     //             // li.find('img').show();
//     //           }
//     //         }
//     //   }).on('mouseleave','#categories li', function(){
//     //       // li.find('img').show();
//     //       clearInterval(myVar);
//     //   });
//     // }
//
//
// }]);