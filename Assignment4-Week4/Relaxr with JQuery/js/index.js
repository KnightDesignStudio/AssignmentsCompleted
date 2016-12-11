$( document ).ready(function() {

	$(".readmore a").click(expandMore);

	function expandMore(event){
		event.preventDefault();
		//alert('here');
	}

});

//on Read More click, have additional text slide down and show

	function showText(){
		$("p.hide").slideDown("slow");
		$("p.hide").show();
	}

	$("p.readmore a").click(showText);


//on Read More click, hide text/link Read more

	function disappear(){
		$("p.readmore").hide()
	}

	$("p.readmore a").click(disappear)

//Above works




//Can't make below work, don't understand why


//on Read less click, additional text slides up and again disappears

	function hideText(){
		$("p#show-this-on-click").slideUp("slow");
		$("p#show-this-on-click").hide();
	}

	$("p.readlessHide a").click(hideText);





//Below works

//on Learn More link click, have the span inside the p slide down

	function seeLearnMore(){
		$("span.hide").slideDown("slow");
		$("span.hide").show();

	}

	$("a.learnmore").click(seeLearnMore);

//hide the Learn more link

	function hideLearnMore(){
		$("a.learnmore").hide();
	}

	$("a.learnmore").click(hideLearnMore);






