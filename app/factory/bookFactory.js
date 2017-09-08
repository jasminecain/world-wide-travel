'use strict';

app.factory("BookFactory", function($q, $http) {

  let getBooks = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get('./data/guides.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        resolve(itemCollection.guides);
      })
      .catch((error) => {
        resolve(error);
      });
    });
  };

  return {getBooks};
});
