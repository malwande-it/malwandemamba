/* ==========================
   TYPING ANIMATION
========================== */

const words = [
    "IT Technician",
    "Systems Developer",
    "Educational Technology Specialist",
    "Web Developer",
    "Database Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 2000);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

/* Start Typing Effect */
if (typingElement) {
    typeEffect();
}

/* ==========================
   DARK MODE TOGGLE
========================== */

const themeToggle =
    document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';
        }
    });
}

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
    document.querySelector(".menu-toggle");

const navbar =
    document.querySelector("nav");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");
    });
}

/* ==========================
   SMOOTH SCROLLING
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (navbar) {
            navbar.classList.remove("active");
        }
    });
});

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements =
    document.querySelectorAll(
        ".card, .project, .timeline-item, .skill"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();