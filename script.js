// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active");
    });
});

// Simple form validation (for contact page)
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
        alert("Please fill all fields");
        return false;
    }

    if (!email.value.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}