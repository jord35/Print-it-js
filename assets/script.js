const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let dots = document.querySelector(".dots")
slides.forEach(function (_, index) {
	let i = document.createElement("i");
	i.classList.add("dot");
	i.id = `dot-${index}`;
	if (index === 0) {
		i.classList.add("dot_selected");
	}
	dots.appendChild(i);
});

let image = document.querySelector('.banner-img')
let tagLine = document.querySelector('.tagLine')
const left = document.getElementById('left');
const right = document.getElementById('right');


let index = 0;

right.addEventListener('click', () => {
	let current_dot = document.getElementById(`dot-${index}`);
	current_dot.classList.remove("dot_selected");
	index++;
	if (index === slides.length)
		index = 0
	let new_dot = document.getElementById(`dot-${index}`);
	new_dot.classList.add("dot_selected");
	image.setAttribute("src", `./assets/images/slideshow/${slides[index].image}`);
	tagLine.innerHTML = slides[index].tagLine;


});

left.addEventListener('click', () => {
	let current_dot = document.getElementById(`dot-${index}`);
	current_dot.classList.remove("dot_selected");
	index--;
	if (index < 0)
		index = slides.length - 1;
	let new_dot = document.getElementById(`dot-${index}`);
	new_dot.classList.add("dot_selected");
	image.setAttribute("src", `./assets/images/slideshow/${slides[index].image}`);
	tagLine.innerHTML = slides[index].tagLine;
});

