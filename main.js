new Vue({
	'el': '#photos-app',
	'created': function(){
		console.log('created hook');
		this.getPhoto();
	},
	'methods': {
		getPhoto: function(){
		  // GET /someUrl
		  this.$http.get('photos.json').then(response => {

		    // get body data
		    this.photos = response.body;

		  }, response => {
		    // error callback
		  });
		}
	},
	'data': {
		'photos': [],
		'photoToShow': 9
	}
});
