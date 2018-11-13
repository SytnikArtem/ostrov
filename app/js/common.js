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
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: "200%"}});

        $('.js-animate').each(function() {
            let trig = this.parentNode.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            console.log(trig);

            new ScrollMagic.Scene({triggerElement: trig})
                .setTween(this, {y: speed, ease: Linear.easeNone})
                .addTo(parallaxController);
        })
    }
    function parallaxblock() {
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

        $('.js-animate-block').each(function() {
            let trigg = this.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(this, {y: speed, ease: Linear.easeNone})
                .addTo(parallaxController);
        })
    }
    parallaxblock();
    parallaxLetters();
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});
    var scene = new ScrollMagic.Scene({triggerElement: '.first-logo'})
        .setClassToggle('.first-menu', 'hide')
        .addTo(controller)
    var scene2 = new ScrollMagic.Scene({triggerElement: '.first-logo'})
        .setClassToggle('.menu-btn', 'show')
        .addTo(controller)
    Scrollbar.init(document.querySelector('#my-scrollbar'));
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
