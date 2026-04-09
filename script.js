// your code goes her// ════════════════════════════════════
//  SOPHIA IGBA PORTFOLIO — script.js
// ════════════════════════════════════

// ─── TYPING ANIMATION ───
const roles = [
  "Cloud Engineer",
  "AWS Architect",
 ];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed-text");

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 600);
});

// ─── MOBILE NAV ───
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ─── ACTIVE NAV LINK ON SCROLL ───
const sections = document.querySelectorAll("section[id], .section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((a) => {
          a.classList.remove("active-link");
          if (a.getAttribute("href") === "#" + entry.target.id) {
            a.classList.add("active-link");
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));

// ─── SCROLL-IN ANIMATION ───
const fadeEls = document.querySelectorAll(
  ".stack-card, .project-card, .timeline-item"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  fadeObserver.observe(el);
});

// ─── CONTACT FORM (demo — swap for Formspree or EmailJS) ───
function handleForm(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.style.display = "block";
  e.target.reset();
  setTimeout(() => (msg.style.display = "none"), 4000);
}
