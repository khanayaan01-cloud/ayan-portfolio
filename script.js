
// ==================================
// 1. MOBILE NAVIGATION MENU
// ==================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Close menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});


// ==================================
// 2. CONTACT FORM
// ==================================


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('[name="name"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const subject = contactForm.querySelector('[name="subject"]').value;
    const message = contactForm.querySelector('[name="message"]').value;

    // WhatsApp message
    const whatsappMessage =
        `New Portfolio Enquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const whatsappURL =
        "https://wa.me/919171665232?text=" +
        encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Send email using EmailJS
    try {
        await emailjs.sendForm(
            "service_7cdm4xt",
            "template_tvz2pxe",
            contactForm
        );

        alert("Thank you " + name + "! Your message has been sent successfully.");
        contactForm.reset();

    } catch (error) {
        console.error("Email error:", error);
        alert("WhatsApp opened, but email could not be sent. Please try again.");
    }
});

// ==================================
// 3. CURRENT YEAR
// ==================================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        "© " + new Date().getFullYear() +
        " Ayan Khan. All Rights Reserved.";
}
emailjs.init({
    publicKey: "wpl1rHCfNTH9Fn12S",
});