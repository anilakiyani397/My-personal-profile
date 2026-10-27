
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent =
        "Thank you! Your form has been submitted successfully.";

    contactForm.reset();
});
