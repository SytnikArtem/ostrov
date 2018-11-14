$(document).ready(function() {
    var time = 5, // времья перелистывания слайдов главного слайдера
        bar,
        $slick,
        tick,
        isPause,
        percentTime,
    //Слайдер на десктопе
    $slick = $('.left-slider');
    $slick.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      asNavFor: '.right-slider'
    });
    bar = $('.progress');
    $('.left-slider .slick-prev, .left-slider .slick-next').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    });
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }
    function resetProgressbar() {
        bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    $('.left-slider .slick-prev, .left-slider .slick-next').click(function() {
        startProgressbar();
    });
    startProgressbar();

  $('.right-slider').slick({
    infinite: true,
    arrows: false,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.left-slider'
  });
    //Ховер эффект кнопок
    $('.js-btn').hover(function(){
        let _this = $(this);
        $(this).find('.btn-hover').addClass('active');
        setTimeout(function(){
            _this.find('.btn-text').addClass('active')
        },50)

    },function(){
        $(this).find('.btn-hover').removeClass('active')
        $(this).find('.btn-text').removeClass('active')
    });
    //Паралакс для букв
    function parallaxLetters() {
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: "200%"}});

        $('.js-animate').each(function() {
            let trig = this.parentNode.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';

            new ScrollMagic.Scene({triggerElement: trig})
                .setTween(this, {y: speed, ease: Linear.easeNone})
                .addTo(parallaxController);
        })
    }
    //Паралакс для бекграундов
    function parallaxBlock() {
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
    //Паралакс для  текстов в блоках
    function parallaxText() {
        let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.js-opacity').each(function() {
            let triggg = this;
            new ScrollMagic.Scene({triggerElement: triggg})
                .setClassToggle(triggg, 'active')
                .addTo(parallaxController);
        })
    }
    //Паралакс для появления меню
    function showMenu(){
        if ($(window).width() > 999) {
            var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "150"}});
            var scene = new ScrollMagic.Scene({triggerElement: '.second'})
                .setClassToggle('.first-menu', 'hide')
                .addTo(controller)
            var scene2 = new ScrollMagic.Scene({triggerElement: '.second'})
                .setClassToggle('.menu-btn', 'show')
                .addTo(controller)
        }
    }
    //Паралакс для появления лого
    function showLogo(){
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "50"}});
        var scene = new ScrollMagic.Scene({triggerElement: '.second'})
            .setClassToggle('.mask-img', 'active')
            .addTo(controller)
        var scene2 = new ScrollMagic.Scene({triggerElement: '.second'})
            .setClassToggle('.plus', 'show')
            .addTo(controller)
    }
    showLogo();
    parallaxLetters();
    parallaxText();
    showMenu();
    if($(window).width() > 768) {
        parallaxBlock();
    }
    //Плавный скроллбар
    Scrollbar.init(document.querySelector('#my-scrollbar'));
    //Прелоадер
    setTimeout(function(){
        $('.preloader').addClass('hide')
    }, 1000);
    setTimeout(function(){
        $('.preloader-container').addClass('active')
    }, 100);
    //Открытие меню
    $('.menu-btn').click(function(){
       $('.slide-menu').toggleClass('active');
       $(this).toggleClass('active');
    });
    //Закрытие меню
    $('.slide-menu-overlay').click(function(e){
        let elem = $(".slide-menu-right");
        if(e.target!=elem[0]&&!elem.has(e.target).length)
        {
            $('.slide-menu').removeClass('active');
            $('.menu-btn').removeClass('active');
        }
    });
    $('.second-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
