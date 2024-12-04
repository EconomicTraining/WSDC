const slides = document.querySelectorAll('.slides img')

let slidesIndex = 0
let intervalId = null

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
    if( slides.length > 0 ) {
        slides[slidesIndex].classList.add('displaySlides')
        intervalId = setInterval(nextSlide, 5000)
    }
}

function showSlides(index) {
    if( index >= slides.length ) {
        slidesIndex = 0;
    }
    else if( index < 0) {
        slidesIndex = slides.length - 1
    }

    slides.forEach((slides) => {
        slides.classList.remove('displaySlides')
    })
    slides[slidesIndex].classList.add('displaySlides')
 }

 function nextSlide() {
    slidesIndex++
    showSlides(slidesIndex)
 }

 function prevSlide() {
    clearInterval(intervalId)
    slidesIndex--
    showSlides(slidesIndex)
 }


 const prevBtn = document.getElementById('prev')
 const nextBtn = document.getElementById('next')

 prevBtn.addEventListener('click', prevSlide)
 nextBtn.addEventListener('click', nextSlide)
 



//  Section 4
const slides2 = document.querySelectorAll(".slides2 img");

let slidesIndex2 = 0;
let intervalId2 = null;

document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2() {
  if (slides2.length > 0) {
    slides2[slidesIndex2].classList.add("displaySlides");
    intervalId2 = setInterval(nextSlide2, 7000);
  }
}

function showSlides2(index) {
  if (index >= slides2.length) {
    slidesIndex2 = 0;
  } else if (index < 0) {
    slidesIndex2 = slides2.length - 1;
  }

  slides2.forEach((slides2) => {
    slides2.classList.remove("displaySlides");
  });
  slides2[slidesIndex2].classList.add("displaySlides");
}

function nextSlide2() {
  slidesIndex2++;
  showSlides2(slidesIndex2);
}

function prevSlide2() {
  clearInterval(intervalId2);
  slidesIndex2--;
  showSlides2(slidesIndex2);
}

const prevBtn2 = document.getElementById("prev2");
const nextBtn2 = document.getElementById("next2");

prevBtn2.addEventListener("click", prevSlide2);
nextBtn2.addEventListener("click", nextSlide2);

// SECTION 5

 const slides3 = document.querySelectorAll(".slides3 img");

 let slidesIndex3 = 0;
 let intervalId3 = null;

 document.addEventListener("DOMContentLoaded", initializeSlider3);

 function initializeSlider3() {
   if (slides3.length > 0) {
     slides3[slidesIndex3].classList.add("displaySlides");
     intervalId3 = setInterval(nextSlide3, 5000);
   }
 }

 function showSlides3(index) {
   if (index >= slides3.length) {
     slidesIndex3 = 0;
   } else if (index < 0) {
     slidesIndex3 = slides3.length - 1;
   }

   slides3.forEach((slides3) => {
     slides3.classList.remove("displaySlides");
   });
   slides3[slidesIndex3].classList.add("displaySlides");
 }

 function nextSlide3() {
   slidesIndex3++;
   showSlides3(slidesIndex3);
 }

 function prevSlide3() {
   clearInterval(intervalId3);
   slidesIndex3--;
   showSlides3(slidesIndex3);
 }

 const prevBtn3 = document.getElementById("prev3");
 const nextBtn3 = document.getElementById("next3");

 prevBtn3.addEventListener("click", prevSlide3);
 nextBtn3.addEventListener("click", nextSlide3);




 const backButton = document.querySelector(".back");

 window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
     backButton.classList.add("show"); // Tambahkan animasi
   } else {
     backButton.classList.remove("show"); // Sembunyikan dengan animasi
   }
 });


const x = document.getElementById('x')
 const spb1 = document.getElementById('spb1')
 const sp1 = document.getElementById('sp1')


 spb1.addEventListener('click', function(){
    sp1.classList.add('showw')
 })
 x.addEventListener("click", function () {
   sp1.classList.remove("showw");
 });


 const x2 = document.getElementById("x2");
 const spb2 = document.getElementById("spb2");
 const sp2 = document.getElementById("sp2");

 spb2.addEventListener("click", function () {
   sp2.classList.add("showw");
 });
 x2.addEventListener("click", function () {
   sp2.classList.remove("showw");
 });

 const x3 = document.getElementById("x3");
 const spb3 = document.getElementById("spb3");
 const sp3 = document.getElementById("sp3");

 spb3.addEventListener("click", function () {
   sp3.classList.add("showw");
 });
 x3.addEventListener("click", function () {
   sp3.classList.remove("showw");
 });

 const x4 = document.getElementById("x4");
 const spb4 = document.getElementById("spb4");
 const sp4 = document.getElementById("sp4");

 spb4.addEventListener("click", function () {
   sp4.classList.add("showw");
 });
 x4.addEventListener("click", function () {
   sp4.classList.remove("showw");
 });

 const x5 = document.getElementById("x5");
 const spb5 = document.getElementById("spb5");
 const sp5 = document.getElementById("sp5");

 spb5.addEventListener("click", function () {
   sp5.classList.add("showw");
 });
 x5.addEventListener("click", function () {
   sp5.classList.remove("showw");
 });


 const x6 = document.getElementById("x6");
 const spb6 = document.getElementById("spb6");
 const sp6 = document.getElementById("sp6");

 spb6.addEventListener("click", function () {
   sp6.classList.add("showw");
 });
 x6.addEventListener("click", function () {
   sp6.classList.remove("showw");
 });









 const regist = document.getElementById('registBtn')
 const zilang = document.getElementById('zilang')
 const popUp = document.getElementById('popUp')

 regist.addEventListener('click', function() {
   popUp.classList.add("showw")
 })

 zilang.addEventListener('click', function() {
    popUp.classList.remove('showw')
 })




const zilang2 = document.getElementById("zilang2");
const popUp2 = document.getElementById("popUp2");
const cp = document.getElementById('cp')


  cp.addEventListener("click", function () {
   popUp2.classList.add("showw");
 });

 zilang2.addEventListener("click", function () {
   popUp2.classList.remove("showw");
 });