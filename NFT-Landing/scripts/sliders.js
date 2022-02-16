export const auctionSwiper = new Swiper('.auction__cards', {
    spaceBetween: 40,
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3.2,
        },
        426: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
    },
    /*
  
    navigation: {
      nextEl: ".nextNavButton", prevEl: ".prevNavButton",
      disabledClass: 'unactive',
    },
    pagination: {
      el: '.swiperPagination',
      clickable: true,
    },
  
    preloadImages: true,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevnext: true,
    },
  
    autoplay:{
      delay: 3000,
      stopOnLastSlide: false,
    },
  
    Infinite scrolling.
      loop: false,
  
    Changes the slider settings based on the width of the screen.
      breakpoints: {
        when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
  
    Changes the height of the slider in runtime depending on the height of the slides.
      autoHeight: true,
      slidesPerView: 1,
  
    If there are no more than one slides, the slider stops working.
      watchOverflow: true,
      direction: 'horizontal' or 'vertical',
  
    Indent between slides.
      spaceBetween: 150,
  
    Enable parallax effect.
      parallax: true,
    For working add and set attributes on elements in slide:
      data-swiper-parallax="0" (xRight)
      data-swiper-parallax-duration="1000" (in ms)
  
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  
    Thumbs construction:
      const demosSwiper = new Swiper('.demos', {
        spaceBetween: 15,
        slidesPerView: 6,
        watchOverflow: true,
      });
  
      const mainSwiper = new Swiper('.main', {
        watchOverflow: true,
  
        thumbs: {
          swiper: demosSwiper,
          slideThumbActiveClass: 'active',
        },
      });
    */
    //! PLEASE TURN ME OFF IF YOU DO NOT NEED ME!
});
