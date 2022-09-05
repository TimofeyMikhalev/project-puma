$(function () {



  $('.menu__item-wrapper').on('click', function () {
    $('.menu__btn-link').slideToggle();
  });
  $('.close-btn').on('click', function () {
    $('.menu__btn-link').removeClass('active');
  });
  $('.menu-btn1').on('click', function () {
    $('.menu__header1').slideToggle();
  });
  document.querySelector('.menu__item-wrapper').onclick = function () {
    document.querySelector('.menu-btn').classList.toggle('menu__btn-active');
  }

  // window.addEventListener('scroll', function() {
  //   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  // });



  $('.header__maps').on('click', function () {
    $('.header__maps-global').slideToggle();
  });

  //  document.querySelector('.menu-btn').onclick = function(){
  //    this.classList.toggle('menu__btn--active');
  //  }

  $('.people__inner').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.people-gerl').css(
      'transform',
      'translate(-' + x * 4 + 'px, -' + y * 8 + 'px)'
    );
    $('.people-tennis').css(
      'transform',
      'translate(-' + x * 4 + 'px, -' + y * 8 + 'px)'
    );
    $('.people-basket').css(
      'transform',
      'translate(-' + x * 2 + 'px, -' + y * 2 + 'px)'
    );
    $('.space1').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    );
    $('.space2').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space3').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space4').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space5').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space6').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space7').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    ); $('.space8').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    );
  });

  // $(document).ready(function(){
  //   $('.space>img').addClass('');
  //   $('.space1').Parallax();
  // });


  $('.manifest-box').slick({
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev"></button>',
    fade: true,
    dots: true
  });





  document.getElementById('button1').onclick = function but1() {
    document.getElementById('part').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
  }
  document.getElementById('button2').onclick = function but2() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    document.getElementById('part3').style.display = 'none';
  }
  document.getElementById('button3').onclick = function but3() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'block';
  }
  document.getElementById('button4').onclick = function but4() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    document.getElementById('part3').style.display = 'none';
  }
  document.getElementById('button5').onclick = function but5() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'block';
  }
  document.getElementById('button6').onclick = function but6() {
    document.getElementById('part').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
  }
  document.getElementById('button7').onclick = function but7() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'block';
  }
  document.getElementById('button8').onclick = function but8() {
    document.getElementById('part').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
  }
  document.getElementById('button9').onclick = function but9() {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    document.getElementById('part3').style.display = 'none';
  }

  // document.getElementById('button1').onclick = function but() {
  //   document.getElementById('part').style.display = 'none';
  //   document.getElementById('part2').style.display = 'none';
  //   document.getElementById('part3').style.display = 'none';
  // }


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'center-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  $('.gid__img-link').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.gid__img-2,.gid__img-4,.gid__img-6').css(
      'transform',
      'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)'
    );
  });


  $('#button4').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part2').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button5').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part3').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button6').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button7').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part3').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button8').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button9').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part2').offset().top + "px" }, { duration: 1E3 });
  });


  $('#button1').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button2').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part2').offset().top + "px" }, { duration: 1E3 });
  });
  $('#button3').on('click', function () {
    $('html,body').animate({ scrollTop: $('#part3').offset().top + "px" }, { duration: 1E3 });
  });



  // $('.gid__button-link').on('click', function () {
  //   $('.gid__items').slideToggle();

  // });
  // $('.gid__link2').on('click', function () {
  //   $('.gid__items2').slideToggle();
  // })
  // $('.gid__link3').on('click', function () {
  //   $('.gid__items3').slideToggle();
  // });

  // document.getElementById("button2").onclick = function () {
  //   this.style.backgroundColor = "black";
  //   document.getElementById("button1").style.backgroundColor = "gray";
  // };

  // $('#buttons .gid__button-link').on("click", function () {
  //   $("#buttons .gid__button-link.active").removeClass('active');
  //   $(this).addClass("active");
  // });


  let slideLines = Array.from(document.querySelectorAll(".manifest__line-link")),
    slideLines__wrapper = Array.from(document.querySelectorAll(".manifest__line-link .manifest__box-line"));

    window.addEventListener("scroll", () => {
      slideLines.forEach((line) => {
        let index = slideLines.indexOf(line);

        if((line.getBoundingClientRect().top - window.innerHeight < 0)
    && (line.getBoundingClientRect().bottom > 0)) {
      let scrollOfSlider = pageYOffset - getCoords(line).top + window.innerHeight;
      if(line.classList.contains("reverse")) {
        slideLines__wrapper[index].style.transform = `translateX(-${scrollOfSlider / 2}px)`;
      }else{
        slideLines__wrapper[index].style.transform = `translateX(${scrollOfSlider / 2}px)`;
      }
    }
  });
});
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    bottom: box.bottom + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
}


});


