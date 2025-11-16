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

// filter data UMKM
const categoryButtons = document.querySelectorAll(".list-category span");
const umkmCards = document.querySelectorAll(".box-product");
const searchInput = document.getElementById("searchUMKM");
const notFoundSection = document.querySelector(".not-found-sec");
const btnProductNotFoundSection = document.querySelector(".btn-product-d");

function setChildrenColor(el, removeClasses = [], addClasses = []) {
  el.classList.remove(...removeClasses);
  el.classList.add(...addClasses);
  el.querySelectorAll("*").forEach((child) => {
    child.classList.remove(...removeClasses);
    child.classList.add(...addClasses);
  });
}

function filterUMKM() {
  const selectedCategory = document
    .querySelector(".list-category span.bg-violet-700")
    ?.getAttribute("data-filter");
  const searchValue = searchInput.value.toLowerCase();

  let visibleCount = 0;

  umkmCards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    const nameUMKM = card
      .querySelector(".name-umkm-j")
      .textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    const matchCategory =
      selectedCategory === "all" || cardCategory === selectedCategory;
    const matchSearch =
      nameUMKM.includes(searchValue) || description.includes(searchValue);

    if (matchCategory && matchSearch) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCount === 0) {
    if (notFoundSection) notFoundSection.style.display = "block";
    if (btnProductNotFoundSection)
      btnProductNotFoundSection.style.display = "none";
  } else {
    if (notFoundSection) notFoundSection.style.display = "none";
    if (btnProductNotFoundSection)
      btnProductNotFoundSection.style.display = "flex";
  }
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => {
      b.classList.remove("bg-violet-700", "text-white", "border-violet-700");
      b.classList.add("border-[#c4c4c4]", "text-[#777]");
      setChildrenColor(b, ["text-white"], ["text-[#777]"]);
    });

    btn.classList.add("bg-violet-700", "text-white", "border-violet-700");
    btn.classList.remove("text-[#777]");
    setChildrenColor(btn, ["text-[#777]"], ["text-white"]);
    filterUMKM();
  });
});

if (searchInput) searchInput.addEventListener("keyup", filterUMKM);
filterUMKM();

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
