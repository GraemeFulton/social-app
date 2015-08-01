var app = angular.module('app')
//create angular controller called PostsCtrl
//defined PostsSvc as a service as it's not good to dependency inject controllers with $http
app.controller('PostsCtrl', function($scope, PostsSvc) {
    
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
                 //clear input field
                 $scope.postBody = null;       
            })
        }
    }


})