const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearElement = document.querySelector("#current-year");

// Affiche automatiquement l'année en cours dans le pied de page.
yearElement.textContent = new Date().getFullYear();

// Ouvre et ferme le menu sur téléphone.
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});

// Ferme le menu après le choix d'une rubrique.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  });
});