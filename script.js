var button = document.getElementById("order");
var input = document.getElementById("userinput");


const object = [
	{
        product: [{
                id: 1,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme 5 Pro ",
                brand: "realme",
                description: "smartphone",
                price: "Php 5,999"
    
            },
            {
                id: 2,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme c3",
                brand: "realme",
                description: "realme",
                price: "Php 1,799"
            },
            {
                id: 3,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme c11",
                brand: "realme",
                description: "smartphone",
                price: "Php 2,999"
            },
            {
                id: 4,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme 6",
                brand: "realme",
                description: "smartphone",
                price: "Php 6,000"
            },
            {
                id: 5,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme XT",
                brand: "realme",
                description: "smartphone",
                price: "Php 5,199"
            },
            {
                id: 6,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme X7 pro",
                brand: "realme",
                description: "smartphone",
                price: "Php 19,990"
            },
            {
                id: 7,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme X50 5G",
                brand: "realme",
                description: "smartphone",
                price: "Php 13,690"
            },
            {
                id: 8,
                imgsrc: 'img/realme_5_pro_L_1.jpg',
                name: "realme X7",
                brand: "realme",
                description: "smartphone",
                price: "Php 13,800"
            }
        ]
    }
    
];
// const pElement = document.getElementById("order").innerHTML = object.product[1].name;

// Carousel Javascript

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Modal Javascript
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnmodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}