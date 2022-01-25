// Tabs

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



// Modal Lightbox - w3school

// Open the Modal 1
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex1 = 1;
showSlides(slideIndex1);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex1 = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex1 - 1].alt;
}


// Open the Modal 2
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex2 - 1].alt;
}


// Open the Modal 3
function openModal3() {
    document.getElementById("myModal3").style.display = "block";
}

// Close the Modal
function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex3 - 1].alt;
}


// Open the Modal 4
function openModal4() {
    document.getElementById("myModal4").style.display = "block";
}

// Close the Modal
function closeModal4() {
    document.getElementById("myModal4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption4");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex4 - 1].alt;
}