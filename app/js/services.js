'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('FlickrApi', function() {

	var pages = [
		[
			{
				"id":"img1",
				"url":"img/img1.jpg",
				"contents": {
					"title":"First Img",
					"desc":"This is demo text for img1"
				}
			},
			{
				"id":"img2",
				"url":"img/img2.jpg",
				"contents": {
					"title":"Second Img",
					"desc":"This is demo text for img2"
				}
			},
			{
				"id":"img3",
				"url":"img/img3.jpg",
				"contents": {
					"title":"Third Img",
					"desc":"This is demo text for Img3"
				}
			},
			{
				"id":"img4",
				"url":"img/img4.jpg",
				"contents": {
					"title":"Forth Img",
					"desc":"This is demo text for Img4"
				}
			},
			{
				"id":"img5",
				"url":"img/img5.jpg",
				"contents": {
					"title":"Fifth Img",
					"desc":"This is demo text for Img5"
				}
			}
		],
		[
			{
				"id":"img6",
				"url":"img/img6.jpg",
				"contents": {
					"title":"Sixth Img",
					"desc":"This is demo text for Img6"
				}
			},
			{
				"id":"img7",
				"url":"img/img7.jpg",
				"contents": {
					"title":"Seventh Img",
					"desc":"This is demo text for Img7"
				}
			},
			{
				"id":"img8",
				"url":"img/img8.jpg",
				"contents": {
					"title":"Eighth Img",
					"desc":"This is demo text for Img8"
				}
			},
			{
				"id":"img9",
				"url":"img/img9.jpg",
				"contents": {
					"title":"Ninth Img",
					"desc":"This is demo text for Img9"
				}
			},
			{
				"id":"img10",
				"url":"img/img10.jpg",
				"contents": {
					"title":"Ten Img",
					"desc":"This is demo text for Img10"
				}
			}
		]
	];
	return {
	getPhotos: function(page) {
	// Ideally, go off and fetch the next page of data fromt he server, but we'll do it locally in the sample
		return pages[page];
	},
	getPhotoUrl: function(photo) {
		return photo.url;
	},
	getPhotoContent:function(photo) {
		return photo.contents;
	}
};
});
