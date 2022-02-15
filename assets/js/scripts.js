$('.big-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    dots: true,
    dotClass: 'slick-dots',
    draggable: true
});


$('.tourist__select').slick({
    respondTo: 'slider',
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 600,
    // infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [{
        breakpoint: 739,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 320,
        settings: {
            slidesToShow: 1
        }
    }]
});


$('.article-list').slick({
    respondTo: 'slider',
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600,
    infinite: false,
    draggable: true,
    responsive: [{
        breakpoint: 739,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 320,
        settings: {
            slidesToShow: 1
        }
    }]
});


$('.container__event').slick({
    respondTo: 'slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    draggable: true,
    responsive: [{
        breakpoint: 739,
        settings: {
            slidesToShow: 2,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: true,
            dots: true,
            dotClass: 'slick-dots',
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: true,
            dots: true,
            dotClass: 'slick-dots',
        }
    }, {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: true,
            pauseOnHover: true,
            dots: true,
            dotClass: 'slick-dots',
        }
    }]
});

$('.container__post').slick({
    respondTo: 'slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    infinite: false,
    draggable: true,
    responsive: [{
        breakpoint: 739,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 320,
        settings: {
            slidesToShow: 1
        }
    }]
});

$('.support').slick({
    respondTo: 'slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    // infinite: false,
    draggable: true,
    responsive: [{
        breakpoint: 739,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 320,
        settings: {
            slidesToShow: 1
        }
    }]
});