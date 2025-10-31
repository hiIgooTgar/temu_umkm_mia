// sticku navbar
let navbarNav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  navbarNav.classList.toggle("sticky-nav", window.scrollY > 0);
});

// responsvive nav-menu
const navbarMenu = document.getElementById("nav-menu");
function hideMenuNav() {
  navbarMenu.style.right = "-100%";
}
function showMenuNav() {
  navbarMenu.style.right = "0";
}

document.addEventListener("click", function (e) {
  if (
    navbarMenu.contains(e.target) &&
    !document.querySelector(".nav-menu .content").contains(e.target)
  ) {
    navbarMenu.style.right = "-100%";
  }
});

// Submenu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-submenu");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const parent = this.parentElement;
      const submenu = parent.querySelector(".submenu");
      document
        .querySelectorAll(".nav-item.has-submenu .submenu")
        .forEach(function (el) {
          if (el !== submenu) {
            el.classList.remove("show");
          }
        });

      submenu.classList.toggle("show");
      const icon = this.querySelector("i");
      document.querySelectorAll(".toggle-submenu i").forEach((i) => {
        if (i !== icon) i.classList.remove("rotate-navbar");
      });
      icon.classList.toggle("rotate-navbar");
    });
  });

  document.addEventListener("click", function (e) {
    const isClickInsideNav = e.target.closest(".has-submenu");
    if (!isClickInsideNav) {
      document.querySelectorAll(".submenu").forEach(function (el) {
        el.classList.remove("show");
      });
      document.querySelectorAll(".toggle-submenu i").forEach(function (i) {
        i.classList.remove("rotate-navbar");
      });
    }
  });
});

// accordion-item faq
const accordionButtons = document.querySelectorAll(".accordion-item button");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const currentItem = this.closest(".accordion-item");
    const currentGroup = this.closest(".accordion-group");
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    currentGroup.querySelectorAll(".accordion-item button").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.closest(".accordion-item").classList.remove("active-accordion");
    });

    if (!isExpanded) {
      this.setAttribute("aria-expanded", "true");
      currentItem.classList.add("active-accordion");
    }
  });
});
