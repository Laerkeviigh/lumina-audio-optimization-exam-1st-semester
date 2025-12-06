"use strict";

/* -------------------------
   Simple scroll observer
   Bruger kun window.onscroll, offsetTop og classList
   ------------------------- */

const sections = document.querySelectorAll("main section, .hero");

// Simple scroll-logic 
window.onscroll = () => {
  const trigger = window.scrollY + window.innerHeight * 0.8; // trigpunkt lidt før elementet er midt i view

  sections.forEach((sec) => {
    const secTop = sec.offsetTop;

    if (trigger > secTop) {
      sec.classList.add("show-animate");
    } else {
      // Fjern kun for ikke-hero, så hero-holder sig synlig når først trigget
      if (!sec.classList.contains("hero")) {
        sec.classList.remove("show-animate");
      }
    }
  });
};

// Kald en gang ved load, så elementer synlige fra start animere
window.addEventListener("load", () => {
  window.onscroll();
});