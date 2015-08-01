//create app module
var app = angular.module('app', []);

//create angular controller called PostsCtrl
//defined PostsSvc as a service as it's not good to dependency inject controllers with $http
app.controller('PostsCtrl', function($scope, PostsSvc) {

    // $scope.posts = [
    // 	{
    // 		username:'graylien',
    // 		body:'hola...'

    // 	},
    // 	{
    // 		username:'graeme',
    // 		body:'testing angular...'
    // 	}
    // ]

    // $http.get('api/posts').success(function(posts) {

    //         $scope.posts = posts;
    // })
    
    PostsSvc.fetch().success(function(posts){
        
        $scope.posts = posts;    
        
    })

    //add to scope.posts array
    $scope.addPost = function() {
        //if postbody input is not empty, add post 
        if ($scope.postBody) {
            
            var post = {
                    username: 'barry',
                    body: $scope.postBody //this is the input field	
                    }
            
            PostsSvc.create(post).success(function(post){
                
                 $scope.posts.unshift(post)
                    $scope.postBody = null;
                
            })
            // $http.post('api/posts', {
            //         username: 'barry',
            //         body: $scope.postBody //this is the input field	
            //     }).success(function(post) {

            //         $scope.posts.unshift(post)
            //         $scope.postBody = null;
            //     })
            
            
                // $scope.posts.unshift({
                // 	username:'barry',
                // 	body:$scope.postBody //this is the input field	
                // })

            //clear input field
            $scope.postBody = null;
        }
    }


})

  app.service('PostsSvc', function($http){
        
        //get post method
        this.fetch = function(){
            return $http.get('/api/posts')
        }
        
        //create post method
        this.create = function(post){
            
            return $http.post('/api/posts', post)
        }
    })