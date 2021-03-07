$(function() {

    // FIXED HEADER
    //
    //
    //
    let header = $("#header");
    let intro = $("#intro");
    // let introH = intro.height();
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop(); // сколько проискролили от верха страницы
    
    // scroll && load && resize - события
    $(window).on("scroll load resize", function() { // следим за скролом
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH) {
           header.addClass("fixed");
        } else {
           header.removeClass("fixed");
        }
    });


    // SMOOTH SCROLL
    //
    //
    //
    //делаем выборку элементов у которых есть data-scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // отменяем стандартное поведение ссылки

        //получаем атрибут по которому кликнули
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top; // отступ от верха элемента

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70 // сколько отнять от верха
        }, 1000); // секунды
    });


    // NAV TOGGLE
    //
    //
    //
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });

    // REVIEWS : https://kenwheeler.github.io/slick/
    //
    //
    //
    let slider = $("#reviewsSlider "); 

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});