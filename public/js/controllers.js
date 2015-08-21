app.controller("HomeController", function($scope, $routeParams, $http) {
    $scope.message = "We are in HomeController"

    $scope.movieSearch = function(movie) {
      console.log('movie', movie);
      // $scope.result = Title($routeParams.title)
      console.log('hello');
      // var movie = {
      //     title:   $scope.movies.data.Title,
      //     year: $scope.movies.data.Year,
      //   }
        //  console.log('title', movie.title);
    $http.get('http://www.omdbapi.com/?s=' + movie)
    .then(function(response) {
       $scope.movies = response.data.Search;
       $scope.movieId = response.data.Search.imdbID
       $scope.movies = response.data.Search
       console.log('movies', $scope.movies);
       console.log($scope.movieId);
      // console.log('response', $scope.movies);
      // console.log('movie', movie.title);
      // console.log('results', $scope.results);
    }, function(response) {
      console.log('error in the get request');
   });
 };
});

 app.controller("ShowController", function($scope, $routeParams, $http) {
   console.log('hello');
   console.log('url', $routeParams.id);
   $http.get('http://www.omdbapi.com/?i=' + $routeParams.id)
   .then(function(response) {
     $scope.movie = response.data
     console.log('response', response.data);

    })
  })
