// Mobile Menu
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

// Close menu after clicking a link
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("show");
    });
});

// Contact Form Validation
function validateForm() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill all fields.");
        return false;
    }

    if (!email.value.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (topBtn) {

        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

    reveal();

};

// Scroll To Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Fade Animation
function reveal() {

    const elements = document.querySelectorAll(".hidden");

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }

    });

}

reveal();

// Newsletter
const newsletter = document.querySelector(".newsletter");

if (newsletter) {

    newsletter.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you for subscribing to WanderNest!");

        newsletter.reset();

    });

}
