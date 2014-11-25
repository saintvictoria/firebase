(function (){


  angular.module('Items')
  .controller('ItemsListController', ['$scope','FIREBASE_URI','$firebase',
                              function ($scope,  FIREBASE_URI,  $firebase){

    var itemsRef = new Firebase(FIREBASE_URI + 'items');

    $scope.items =$firebase(itemsRef).$asArray();

    $scope.title ="List of Items";

    $scope.addItem = function(item){

      $scope.items.$add(item);//add items to my array
      $('#addForm')[0].reset();//reset my form

    };

    $scope.deleteItem = function(item){

      $scope.items.$remove(item);

    };

  }]);



}());
