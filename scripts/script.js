// global variables
let canvas = document.querySelector('.container');
let pixelSize;
let r = 0;
let g = 0;
let b = 0;
let random = false;
let drawOnHover = true;

// fill canvas with blank pixels
for(let i = 0; i < 1000; i++) {
	let pixel = document.createElement('div');
	pixel.className ='box';
	canvas.append(pixel);
	//style each pixel to fit
	pixel.classList.add('boxed')
}

// clear all pixels when button is clicked
let button = document.getElementsByClassName('resetGrid')[0];
button.addEventListener('click', reset);

function reset(event) {
	// console.log(button);
	let pixie = Array.from(document.getElementsByClassName('box'));
	// console.log(pixie);
	pixie.forEach(function(pixel) {
		pixel.style.backgroundColor = 'white';
	});

	pixelSize = parseInt(prompt('Choose new pixel size. Default is 16'));
	switch (pixelSize >= 16) {
		case true:
			console.log('greater than triggerd');
			pixie.forEach(function(pixel) {
				// console.log(pixel);
				// Object.assign(pixie.style,{`height: ${pixelSize}`});
				pixel.setAttribute('style', `height: ${pixelSize}px; width: ${pixelSize}px;`);
			});
			break;

		case false:
		console.log('false triggeed');
			alert('Pixel cannot be smaller than 16. Using defaualt size.');
			pixie.forEach(function(pixel) {
				pixel.setAttribute('style', 'height:16px; width:16px;');
			});
			break;

		default:
			console.log('using last Pixel size');
	}
}

let canvasContainer = document.querySelector('.container');
// console.log(canvasContainer);

canvasContainer.addEventListener('mouseover', event => {
	if (drawOnHover) {
		draw(event);
	} else {
		event.target.addEventListener('click', draw);
	}
});

function draw(event) {
	let element = event.target;
	let elementClassList = Array.from(element.classList);
	console.log(element);
	// add color to only the pixels
	if (elementClassList.includes('box')) {
		// get the computed height of the current element.
		let tempPixelSize = window.getComputedStyle(element, null).height;
		// console.log(tempPixelSize);
		if (random) {
			 r = Math.floor(Math.random() * 256);
			 g = Math.floor(Math.random() * 256);
			 b = Math.floor(Math.random() * 256);
			// non destructive element styling
			element.style.backgroundColor = `rgb(${r},${g},${b})`;
			element.style.height = `${tempPixelSize}`;
			element.style.width = `${tempPixelSize}`;
		} else {
			// event.target.setAttribute('style', `background-color:rgb(${r},${g},${b});
			// 	height:${tempPixelSize}px; width:${tempPixelSize}px`);
			element.style.backgroundColor = `rgb(${r},${g},${b})`;
			element.style.height = `${tempPixelSize}`;
			element.style.width = `${tempPixelSize}`;
		}

	} else {
		console.log('Not a Pixel');
	}
}

// Switching Colors
let radios = Array.from(document.querySelectorAll('input'));
let drawColor = radios.filter(getColorRadio); // return only radios with name: color

drawColor.forEach(function(colorSelected) {
	colorSelected.addEventListener('click', event => {
		// console.log(`was triggerd by ${event}`);
		// destructuring the event attribute to get its value
		let {value} = event.target.attributes;
		var color = value.textContent;

		switch (color) {
			case 'red':
				r = 128;
				g = 0;
				b = 0;
				random = false;
				break;

			case 'green':
				r = 0;
				g = 128;
				b = 0;
				random = false;
				break;

			case 'blue':
				r = 0;
				g = 0;
				b = 128;
				random = false;
				break;

			case 'random':
				random = true;
				break;

			default:
				r = 0;
				g = 0;
				b = 0;
				random = false;
		}

	});
});

function getColorRadio(radio) {
	if (radio.name == 'color') {
		return radio;
	}
}

// Code for choosing draw Type
let drawClass = document.getElementById('drawType');
let drawType = Array.from(drawClass.querySelectorAll('input'));
drawType.forEach(function (type) {
	// console.log(typeof(type.value));
	type.addEventListener('click', function() {
		// console.log(type);
		if (type.value == 'hover') {
			drawOnHover = true;
		} else {
			drawOnHover = false;
		}
	});
});


// Fix for Firefox Remembering the last checked radio.

persistenceFix(radios);

function persistenceFix(nodeList) {
	nodeList.forEach(function(selected) {
		if (selected.checked == true) {
			selected.click();
		}
	});
}

// jQuery Code
// $(document).ready(function() {
//
// 	//create a variable that holds a div with the class of .box
// 	// var $div = ("<div class='box'></div>");
//
// 	//fill the #container box with 1000 divs with the .box class
// 	// for(var i = 0; i < 1000; i++) {
// 	// 	$('.container').append($div);
// 	// }
//
// 	//change the .box class to boxed
// 	// $('.box').addClass('boxed');
//
// 	// reset the grid when the button is clicked
// 	// $('button').on('click', function() {
// 		// $('.box').css("background-color", "white");
//
// 		//prompt user for a pixel size when the reset button is clicked
// 		// and make it the value of the variable gridSize
// 		// gridSize = parseInt(prompt("Please Specify the size of Grids you want. Default is 16"));
//
// 		//change the size of the grid according to the value of the gridSize variable
// 	// 	if (gridSize > 16) {
// 	// 		$('.box').css({'height' :+ gridSize + 'px',
// 	// 			   'width' : + gridSize + 'px',
// 	// 			  'float' : 'left',
// 	// 			  'display' : 'block'});
// 	// 	} else if (gridSize < 16) {
// 	// 		alert("grid size cannot be less than 16. Please choose a higher size. Will default to last used size.");
// 	// 	} else {
// 	// 		$('.box').css({'height' : '16px',
// 	// 			   'width' : '16px',
// 	// 			  'float' : 'left',
// 	// 			  'clear' : 'right'});
// 	// 	}
// 	// });
//
//
// 	// this function changes the color of the divs to a random one when the mouse hovers over it
// 	$('.box').hover(function() {
//
// 		// var r = Math.floor(Math.random() * 256);
// 		// var g = Math.floor(Math.random() * 256);
// 		// var b = Math.floor(Math.random() * 256);
//
// 		//var i = 1;
//
// 		// $(this).css("background-color", "rgb(" +r +"," + g + "," + b +")");
//
// 	/*	while ($(this).mouseover() = true {
// 			i++;
//
// 			if (i >= 11) {
// 				$(this).css("background-color" , "black");
// 			} else {
// 				$(this).css("background-color", "rgb(" +r +"," + g + "," + b +")");
// 			}
// 		} */
//
// 	});
// });
