// ==========================
// SIDEBAR
// ==========================

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

// ==========================
// GALLERY SLIDER
// ==========================

const galleryImages = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg",
    "images/gallery5.jpg",
    "images/gallery6.jpg"
];

const galleryNames = [
    "Paris",
    "Bali",
    "Maldives",
    "Thailand",
    "Singapore",
    "Dubai"
];

let current = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    if(!slide) return;

    if(index >= galleryImages.length) current = 0;
    else if(index < 0) current = galleryImages.length - 1;
    else current = index;

    slide.src = galleryImages[current];
    caption.textContent = galleryNames[current];

    dots.forEach(dot => dot.classList.remove("active"));

    if(dots[current]){
        dots[current].classList.add("active");
    }

}

function nextSlide(){
    showSlide(current + 1);
}

function prevSlide(){
    showSlide(current - 1);
}

if(slide){
    setInterval(nextSlide,3000);
    showSlide(0);
}

// ==========================
// SCROLL ANIMATION
// ==========================

const hidden = document.querySelectorAll(".hidden");

function reveal(){

    hidden.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ==========================
// BACK TO TOP
// ==========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(document.documentElement.scrollTop>250){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ==========================
// CONTACT FORM
// ==========================

function validateForm(){

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const message=document.getElementById("message");

    if(!name.value || !email.value || !message.value){

        alert("Please fill all fields.");

        return false;

    }

    alert("Message sent successfully!");

    return true;

}
