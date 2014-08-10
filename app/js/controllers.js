'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope','FlickrApi', function($scope,flickr) {
  	
	  	var carousel;

	  	$scope.imageDesc = {
		  		"title":"",
		  		"desc":""
		  	};
		  	
		$scope.imgTitle  = "Cloud";
		$scope.imgDesc = "hi";

		$scope.getPhotoContent = function(photo) {
			return flickr.getPhotoContent(photo);
		};

		$scope.hasPrevious = function() {
			return carousel ? carousel.hasPrevious() : false;
		};

		$scope.previous = function() {
			if (carousel) { 
				carousel.prev();
				$scope.allPhotos = flickr.getPhotos(carousel.page); 
			}
		};
		$scope.hasNext = function() {
			return carousel ? carousel.hasNext() : false;
		};
		$scope.next = function() {
			if (carousel) { 
				carousel.next();
				$scope.allPhotos = flickr.getPhotos(carousel.page);	 
			}
		};
		var loadPhotos = function(carouselScope, page) {
			carousel.updatePageCount(6);
			carouselScope.photos = flickr.getPhotos(page);
			carouselScope.getPhotoUrl = function(photo) {
				return flickr.getPhotoUrl(photo);
			};
			if(angular.isUndefined($scope.allPhotos))
			{
				$scope.allPhotos = flickr.getPhotos(page);
				if(!angular.isUndefined($scope.allPhotos))
				{
					console.log($scope.allPhotos);
					$scope.imageDesc.title = $scope.allPhotos[0].contents.title;
					$scope.imageDesc.desc = $scope.allPhotos[0].contents.desc;
					$scope.selectedImgId = $scope.allPhotos[0].id;
					$scope.imgTitle  = $scope.allPhotos[0].contents.title;
					$scope.imgDesc  = $scope.allPhotos[0].contents.desc;
				}
			}
		};
		$scope.loadPage = function(page, tmplCb) {
			var newScope = $scope.$new();
			loadPhotos(newScope, page);
			tmplCb(newScope);
		};
		$scope.onCarouselAvailable = function(car) {
			carousel = car;
		};

		$scope.loadContents = function(photo) {
			$scope.selectedImgId = photo.id;
			var content = $scope.getPhotoContent(photo);
			$scope.imageDesc = content;
			$scope.imgTitle  = content.title;
			$scope.imgDesc = content.desc;
		};

		$scope.updateContents = function() {
			$scope.imageDesc.title = $scope.imgTitle;
			$scope.imageDesc.desc = $scope.imgDesc;
		}
  	}]);
