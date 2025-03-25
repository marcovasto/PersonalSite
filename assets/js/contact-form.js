// Load EmailJS SDK
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("zXO943iHRLZoMONd9"); // Public Key

    // Managing form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Send form with EmailJS
        emailjs.sendForm("service_nh7ajlr", "template_kbpevfj", this)
            .then(function () {
                document.getElementById("success-message").style.display = "inline-block";
                document.getElementById("error-message").style.display = "none";
                document.getElementById("contact-form").reset(); // Clear form
            })
            .catch(function (error) {
                document.getElementById("error-message").style.display = "inline-block";
                document.getElementById("success-message").style.display = "none";
                console.error("Failed to send message:", error);
            });
    });
});