$(document).ready(() => {
  const principalImage = $('.principal-image').offset().top;
  const descriptions = $('.top-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > principalImage &&
      $(window).scrollTop() < descriptions
    ) {
      $('#one').addClass('actived');
    } else {
      $('#one').removeClass('actived');
    }
  });

  const aboutSection = $('.about-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > descriptions &&
      $(window).scrollTop() < aboutSection
    ) {
      $('#two').addClass('actived');
    } else {
      $('#two').removeClass('actived');
    }
  });

  const teamSection = $('.team-section').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > aboutSection &&
      $(window).scrollTop() < teamSection
    ) {
      $('#three').addClass('actived');
    } else {
      $('#three').removeClass('actived');
    }
  });

  const portafolio = $('.gallery').offset().top;

  $(window).on('scroll', () => {
    if (
      $(window).scrollTop() > teamSection &&
      $(window).scrollTop() < portafolio
    ) {
      $('#four').addClass('actived');
    } else {
      $('#four').removeClass('actived');
    }
  });

  const blog = $('.blog-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {
      $('#five').addClass('actived');
    } else {
      $('#five').removeClass('actived');
    }
  });
  const contact = $('.contact-section').offset().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > blog && $(window).scrollTop() < contact) {
      $('#six').addClass('actived');
    } else {
      $('#six').removeClass('actived');
    }
  });

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > contact && $(window).scrollTop() > blog) {
      $('#seven').addClass('actived');
    } else {
      $('#seven').removeClass('actived');
    }
  });
});
