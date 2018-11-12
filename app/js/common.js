$(document).ready(function() {
    $('.left-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.right-slider'
    });
  $('.right-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.left-slider'
  });
  // var controller = new ScrollMagic.Controller();
  // var tween = new TimelineMax();
  // tween
  //   .fromTo('.js-animate_title', 1, {top:0}, {top:100});
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: "#trigger1",
  //   duration: 300
  // })
  //   .setTween(tween)
  //   .addIndicators({name: 'name'})
  //   .addTo(controller);
    function parallaxLetters() {
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

        $('.js-animate').each(function() {
            let trig = $('.first'),
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';

            new ScrollMagic.Scene({triggerElement: trig})
                .setTween(this, {y: speed, ease: Linear.easeNone})
                .addTo(parallaxController);
        })
    }
    parallaxLetters();
    function parallaxblock() {
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

        $('.js-animate-block').each(function() {
            let trig = this.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            console.log(trig);
            new ScrollMagic.Scene({triggerElement: trig})
                .setTween(this, {y: speed, ease: Linear.easeNone})
                .addTo(parallaxController);
        })
    }
    parallaxblock();
    const body = document.body,
          jsScroll = document.getElementsByClassName('js-scroll')[0],
          height = jsScroll.getBoundingClientRect().height - 1,
          speed = 0.05

        var offset = 0

    body.style.height = Math.floor(height) + "px"

    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed

        var scroll = "translateY(-" + offset + "px) translateZ(0)"
        jsScroll.style.transform = scroll

        raf = requestAnimationFrame(smoothScroll)
    }
    smoothScroll()
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    $('.menu').addClass('hide');
    $('.menu-btn').addClass('show');
  }
  else {
    $('.menu').removeClass('hide');
    $('.menu-btn').removeClass('show');
  }
});
