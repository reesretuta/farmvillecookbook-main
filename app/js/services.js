var services = angular.module('appServices',[]);
services.factory('templateResolveService',[function(){
  
  return {
    getItemType: function(){
      return 'whatever';
    }
  }
}]);