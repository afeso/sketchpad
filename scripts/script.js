$(document).ready(function() {
	
	//create a variable that holds a div with the class of .box
	var $div = ("<div class='box'></div>");
	
	//fill the #container box with 1000 divs with the .box class
	for(var i = 0; i < 1000; i++) {
		$('#container').append($div);
	}
	
	//change the .box class to boxed
	$('.box').addClass('boxed');
		
	// reset the grid when the button is clicked
	$('button').on('click', function() {
		$('.box').css("background-color", "white");
		
		//prompt user for a pixel size when the reset button is clicked
		// and make it the value of the variable gridSize
		gridSize = parseInt(prompt("Please Specify the size of Grids you want. Default is 16"));
		  	
		//change the size of the grid according to the value of the gridSize variable
		if (gridSize > 16) {
			$('.box').css({'height' :+ gridSize + 'px',
				   'width' : + gridSize + 'px',
				  'float' : 'left',
				  'display' : 'block'});
		} else if (gridSize < 16) {
			alert("grid size cannot be less than 16. Please choose a higher size. Will default tolast used size.");
		} else {
			$('.box').css({'height' : '16px',
				   'width' : '16px',
				  'float' : 'left',
				  'clear' : 'right'});
		}
	});
	
	
	// this function changes the color of the divs to a random one when the mouse hovers over it
	$('.box').hover(function() {
		
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		
		//var i = 1;
		
		$(this).css("background-color", "rgb(" +r +"," + g + "," + b +")");
				
	/*	while ($(this).mouseover() = true {
			i++;
			
			if (i >= 11) {
				$(this).css("background-color" , "black");
			} else {
				$(this).css("background-color", "rgb(" +r +"," + g + "," + b +")");
			}
		} */
	
	});
	
	
});