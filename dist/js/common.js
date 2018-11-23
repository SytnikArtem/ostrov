"use strict";

$(document).ready(function () {
    var time = 5,
        // времья перелистывания слайдов главного слайдера
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
        speed: 800,
        asNavFor: '.right-slider'
    });
    bar = $('.progress');
    $('.left-slider .slick-prev, .left-slider .slick-next').on({
        mouseenter: function mouseenter() {
            isPause = true;
        },
        mouseleave: function mouseleave() {
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
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                $('.right-slider').slick('slickNext');
                startProgressbar();
            }
        }
    }
    function resetProgressbar() {
        bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    $('.left-slider .slick-prev, .left-slider .slick-next').click(function () {
        startProgressbar();
    });
    startProgressbar();

    $('.right-slider').slick({
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.left-slider'
    });
    $('.left-slider .slick-next').click(function () {
        $('.right-slider').slick('slickNext');
    });
    $('.left-slider .slick-prev').click(function () {
        $('.right-slider').slick('slickPrev');
    });
    //Ховер эффект кнопок
    $('.js-btn').hover(function () {
        var _this = $(this);
        $(this).find('.btn-hover').addClass('active');
        setTimeout(function () {
            _this.find('.btn-text').addClass('active');
        }, 50);
    }, function () {
        $(this).find('.btn-hover').removeClass('active');
        $(this).find('.btn-text').removeClass('active');
    });
    //Паралакс для букв
    function parallaxLetters() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "200%", offset: "10" } });

        $('.js-animate').each(function () {
            var trig = $('body'),
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 40 + '%';

            new ScrollMagic.Scene({ triggerElement: trig }).setTween(this, { y: speed, ease: Linear.easeNone }).addTo(parallaxController);
        });
    }
    //Паралакс для бекграундов
    function parallaxBlock() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

        $('.js-animate-block').each(function () {
            var trigg = this.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            new ScrollMagic.Scene({ triggerElement: trigg }).setTween(this, { y: speed, ease: Linear.easeNone }).addTo(parallaxController);
        });
    }
    function parallaxBlock2() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

        $('.js-animate-block2').each(function () {
            var trigg = this.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            new ScrollMagic.Scene({ triggerElement: trigg }).setTween(this, { y: speed, ease: Linear.easeNone }).addTo(parallaxController);
        });
    }
    //Паралакс для  текстов в блоках
    function parallaxText() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter" } });

        $('.js-opacity').each(function () {
            var triggg = this;
            new ScrollMagic.Scene({ triggerElement: triggg }).setClassToggle(triggg, 'active').addTo(parallaxController);
        });
    }
    function parallaxText2() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter" } });

        $('.js-animate-block3').each(function () {
            var triggg = this;
            new ScrollMagic.Scene({ triggerElement: triggg }).setClassToggle(triggg, 'active').addTo(parallaxController);
        });
    }
    //Паралакс для появления меню
    function showMenu() {
        if ($(window).width() > 999) {
            var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", offset: "150" } });
            var scene = new ScrollMagic.Scene({ triggerElement: '.second' }).setClassToggle('.first-menu', 'hide').addTo(controller);
            var scene2 = new ScrollMagic.Scene({ triggerElement: '.second' }).setClassToggle('.menu-btn', 'show').addTo(controller);
        }
    }
    //Паралакс для появления лого
    function showLogo() {
        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", offset: "150" } });
        var scene = new ScrollMagic.Scene({ triggerElement: '.second' }).setClassToggle('.mask-img', 'active').addTo(controller);
        var scene2 = new ScrollMagic.Scene({ triggerElement: '.second' }).setClassToggle('.plus', 'show').addTo(controller);
    }
    //фиксирование оверлея
    function fixedBlock() {
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ".first",
            duration: "800",
            // offset: "50",
            triggerHook: "onLeave"
        }).setPin(".first_fixed").addTo(controller);
    }
    function showBlock() {
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ".js-opacity1",
            // duration: "150",
            offset: "-200",
            triggerHook: "onEnter"
        }).setClassToggle('.js-opacity1', 'active').addTo(controller);
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".js-opacity2",
            offset: "-100",
            triggerHook: "onEnter"
        }).setClassToggle('.js-opacity2', 'active').addTo(controller);
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".js-opacity3",
            offset: "0",
            triggerHook: "onEnter"
        }).setClassToggle('.js-opacity3', 'active').addTo(controller);
    }
    showBlock();
    // showLogo();
    parallaxLetters();
    parallaxText();
    showMenu();
    if( !(/iPad/i.test(navigator.userAgent)))   {
        fixedBlock();
        parallaxBlock();
    }
    if ($(window).width() > 768) {
        parallaxBlock2();

    }
    if ($(window).width() <= 768) {
        $('.text-content').find('.js-opacity').removeClass('.js-opacity');
    }

    //Прелоадер
    setTimeout(function () {
        $('.preloader').addClass('hide');
    }, 1000);
    setTimeout(function () {
        $('.preloader-container').addClass('active');
    }, 100);
    //Открытие меню
    $('.menu-btn').click(function () {
        $('.slide-menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    //Закрытие меню
    $('.slide-menu-overlay').click(function (e) {
        var elem = $(".slide-menu-right");
        if (e.target != elem[0] && !elem.has(e.target).length) {
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
    $( 'html, body' ).animate({
        scrollTop: 0}, 700);
    $('.text-top').click(function(e){
        e.preventDefault();
        $( 'html, body' ).animate({
            scrollTop: 0}, 700);
    });
    var video = document.querySelector('.overlay-video');
    video.play();
    if ($(window).width() <= 768) {
        $('.text-content').find('.js-opacity').removeClass('js-opacity');
    }
});
$(window).scroll(function () {
    if( !(/iPad|iPod/i.test(navigator.userAgent)))   {
        if ($(this).scrollTop() > 150) {
            $('.mask-img').addClass('active');
        } else {
            $('.mask-img').removeClass('active');
        }
    }

});
