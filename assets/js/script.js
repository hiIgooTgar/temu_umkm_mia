if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
  });
}

// sticky navbar
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

// gsap
gsap.registerPlugin(SplitText);
document.fonts.ready.then(() => {
  gsap.set(".split-title", { opacity: 1 });
  const titleSplit = SplitText.create(".split-title", {
    type: "lines",
    linesClass: "line++",
  });

  gsap.from(titleSplit.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "expo.out",
    delay: 1.0,
  });
  gsap.set(".split-gsap", { opacity: 1 });

  const paragraphSplit = SplitText.create(".split-gsap", {
    type: "lines",
    linesClass: "line++",
  });

  gsap.from(paragraphSplit.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "expo.out",
    delay: 1.5,
  });
});

// documentation photo UMKM
var swiper = new Swiper(".documentPhotoUMKM", {
  spaceBetween: 20,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      spaceBetween: 12,
    },
    480: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 20,
    },
  },
});

// testimonials swiper js
var swiper = new Swiper(".testimonialsProduct", {
  spaceBetween: 20,
  a11y: false,
  speed: 11000,
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      spaceBetween: 12,
      slidesPerView: 1,
    },
    480: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

// recommendUMKM swiper js
var swiper = new Swiper(".recommendUMKM", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// recommendBlog swiper js
var swiper = new Swiper(".recommendBlog", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
