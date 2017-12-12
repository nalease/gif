$(function(){
	// body...
	populateButtons(searchArray,'searchButton','#buttonsArea');
	console.log("page loaded")
})

var searchArray = ["Family Guy","Futurama", "The Simpsons"];

function populateButtons(searchArray,classToAdd,areaToAddTo){
	$(areaToAddTo).empty();
	for (var i = 0; i < searchArray.length; i++) {
		var a = $('<button>')
		a.addClass(classToAdd);
		a.attr('data-type',searchArray[i]);
		a.text(searchArray[i]);
		$(areaToAddTo).append(a);
	}
	
}

$(document).on('click', '.searchButton' ,function(){
	var type = $(this).data('type');

	//Show what data is stored
	console.log(type);

	//Limit to 10 gifs
	var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=ITG8vV27nB6GN5aLfgBot8BMvxMGdohc&limit=10';
      
      //Call AJAX to go to the url and get information
      $.ajax({
        url: queryURL,
        method: 'GET' 
    })
        .done(function(response){
        	console.log(response);
        	for (var i = 0; i < response.data.length; i++)
        		var animated = response.data[i].images_fixed_height.url;
      		var still = response.data[i].images_fixed_height_still.url;
     		var image = $('<img>');
        })
       });


