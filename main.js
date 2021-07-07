// testimonail
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [990, 2],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: true,
  });
});

//acordeon
const block = document.querySelectorAll(".block");
const blockTitle = document.querySelectorAll(".block-title");

blockTitle.forEach((allh2, i) => {
  blockTitle[i].addEventListener("click", () => {
    block.forEach((allblock, i) => {
      block[i].classList.remove("activo");
    });
    block[i].classList.add("activo");
  });
});

// sticky
$(document).ready(function () {
  var height = $(".menu").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > height) {
      $(".menu").addClass("menu-fixed");
    } else {
      $(".menu").removeClass("menu-fixed");
      $(".nav-menu").removeClass("active");
      $(".hamburguer").removeClass("active");
    }
  });
});

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item, i) => {
  navItem[i].addEventListener("click", () => {
    navItem.forEach((item, i) => {
      navItem[i].classList.remove("activo");
    });
    navItem[i].classList.add("activo");
  });
});

//nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileTabMenu);

function mobileTabMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const contact = document.querySelector(".button2");

contact.addEventListener("click", visited);

function visited() {
  contact.classList.add("visited");
}

function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
}

// pagionas
$(document).ready(function () {
  var principalImage = $(".principal-images").offset().top;
  var descriptions = $(".descriptions").offset().top;

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() > principalImage &&
      $(window).scrollTop() < descriptions
    ) {
      $("#one").addClass("activo");
    } else {
      $("#one").removeClass("activo");
    }
  });
  //team JS
  var teamSection = $(".team-section").offset().top;

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() > descriptions &&
      $(window).scrollTop() < teamSection
    ) {
      $("#two").addClass("activo");
    } else {
      $("#two").removeClass("activo");
    }
  });

  var portafolio = $(".portfolio-section").offset().top;

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() > teamSection &&
      $(window).scrollTop() < portafolio
    ) {
      $("#three").addClass("activo");
      $("#four").addClass("activo");
    } else {
      $("#three").removeClass("activo");
      $("#four").removeClass("activo");
    }
  });

  var blog = $(".our-blog-section").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
      $("#five").addClass("activo");
    } else {
      $("#five").removeClass("activo");
    }
  });

  var form = $(".form-section").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > blog && $(window).scrollTop() < form) {
      $("#six").addClass("activo");
    } else {
      $("#six").removeClass("activo");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > form) {
      $("#seven").addClass("activo");
    } else {
      $("#seven").removeClass("activo");
    }
  });
});
