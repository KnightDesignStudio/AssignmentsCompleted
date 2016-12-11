//Need an  input element, id, value
//Need a button

	$ ( document ).ready();

//On button click, run a function to change the background based on the input (react to button click)
	$("#submit-btn").click(changeBackground);




function changeBackground(){
	event.preventDefault();

//define function that runs when the button is clicked
	//main input is the city name, get that city name input from the input element
	var cityInput = $("#city-type").val();

	//console.log(cityInput);

	//var cityInput = Jquery to select val here
	//conditional elements  have if and else if at beginning else at end
	//"New York" or "New York City" or NYC"

	if ( cityInput == "NYC" || cityInput == "New York City" || cityInput == "New York"){
			$("body").css("background", "url(images/nyc.jpg)"); 
	//make the background of the page nyc.jpg

		} else if ( cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay Area"){
			$("body").css("background", "url(images/sf.jpg");
		//"San Francisco" or "SF" or "Bay Area"
		//make the background of the page sf.jpg

		} else if ( cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
			$("body").css("background", "url(images/la.jpg");
		//"Los Angeles" or "LA" or "LAX"
			//make the background of the page la.jpg

		} else if( cityInput == "Austin" || cityInput == "ATX"){
			$("body").css("background", "url(images/austin.jpg");
			//"Austin or "ATX"
			//make the background of the page austin.jpg

		} else if( cityInput == "Sydney" || cityInput == "SYD"){
			$("body").css("background", "url(images/sydney.jpg");
			//"Sydney" or "SYD"
			//make the background of the page sydney.jpg
		}
	}

//Reset user input field after it is submitted

	//function resetInput(){
	//	$("").text("placeholder", "Enter a city name ...");

	












