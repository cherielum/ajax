$(function() {    //only open function when document is ready - document.ready
	$("#button").click(function(data) {
		//make the button text change to "Generating Doggo.."
		$("#button").text("Generating Doggo");
		$.get('https://dog.ceo/api/breeds/image/random', function(data) {  //MAKING "SEND" request here. 

			// $('#button').html('<img src =" ' + data.message + '" />');  // this line changes button into dog image

			var image = $('<img/>'); 
			image.attr('src', data.message);
			$('body').append(image);

			//make the button text go back to "generate doggo" 
			$("#button").text("Generate Doggo")
			
		console.log(data.message); //pure data --the URL to an image
	});
	});
});