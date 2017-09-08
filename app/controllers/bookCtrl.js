'use strict';

app.controller("BookCtrl", function($scope, BookFactory) {
  BookFactory.getBooks()
  .then(function(itemCollection) {
    $scope.guides = itemCollection;   //'guides':referring to json`
  });
});

//.then wait then do this
//method on partial use scope as well allows you to access and rids of event listeners
//$scope bucket you put data into to use later
