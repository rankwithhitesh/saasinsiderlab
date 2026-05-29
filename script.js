/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* TOGGLE MENU */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* =========================
   CLOSE MENU ON OUTSIDE CLICK
========================= */

document.addEventListener("click", (event) => {

    if (
        navLinks &&
        menuToggle &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("active");

    }

});

/* =========================
   CLOSE MENU WHEN LINK CLICKED
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});

/* =========================
   DYNAMIC COPYRIGHT YEAR
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* =========================
   NEWSLETTER FORM SUCCESS
========================= */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", () => {

        const button = newsletterForm.querySelector("button");

        if (button) {

            button.textContent = "Submitting...";

        }

    });

}

/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".tool-card, .blog-card, .stat-item"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

/* INITIAL STYLES */

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease";

});

/* RUN ON LOAD */

window.addEventListener("load", revealOnScroll);

/* RUN ON SCROLL */

window.addEventListener("scroll", revealOnScroll);


document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            if (response.ok) {

                alert("Form submitted successfully!");

                form.reset();

            } else {

                alert("Something went wrong!");

            }

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", function () {

            const currentAnswer = this.nextElementSibling;
            const isOpen = this.classList.contains("active");

            // Sab FAQs close karo
            faqQuestions.forEach(q => {

                q.classList.remove("active");
                q.setAttribute("aria-expanded", "false");

                const answer = q.nextElementSibling;

                answer.classList.remove("active");
                answer.style.display = "none";

            });

            // Current FAQ open karo
            if (!isOpen) {

                this.classList.add("active");
                this.setAttribute("aria-expanded", "true");

                currentAnswer.classList.add("active");
                currentAnswer.style.display = "block";

            }

        });

    });

});
