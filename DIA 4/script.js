<<<<<<< HEAD
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";

}


document.getElementById('at-item').animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 1000,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
=======
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";

}


document.getElementById('at-item').animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 1000,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
>>>>>>> 55265a52762d4fe0add28a9fc2c3d7c548bc3f50
});