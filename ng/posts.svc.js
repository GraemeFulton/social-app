var app = angular.module('app')
/**
 * PostsSvc
 */
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