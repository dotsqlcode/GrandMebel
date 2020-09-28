$(".catalog-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<svg id="prev" class="catalog-slider__arrow catalog-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="catalog-slider__arrow catalog-slider__arrow--next"><use xlink:href="#next" /></svg>',

});


$(".feedback-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<svg id="prev" class="feedback-slider__arrow feedback-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="feedback-slider__arrow feedback-slider__arrow--next"><use xlink:href="#next" /></svg>',
});


$(".bed-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<svg id="prev" class="bed-slider__arrow bed-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="bed-slider__arrow bed-slider__arrow--next"><use xlink:href="#next" /></svg>',
});


//Hover effect for fabrics

$('.step__fabrics').find('.step__fabrics-hover').each(function () {
    var src = null;
    $(this).on('mouseover', function() {
        $(this).addClass('step__fabrics-hover--active')
        src = $(this).attr('src');

        
        $(this).parent().find('.step__fabrics-hover').each(function() {
            if($(this).attr('src') != src) {
                $(this).addClass('step__fabrics-hover--unactive');
            }
        })

    })
    $(this).on('mouseout', function() {
        $(this).removeClass('step__fabrics-hover--active');

        $(this).parent().find('.step__fabrics-hover').each(function() {
            $(this).removeClass('step__fabrics-hover--unactive')
        })
    })
})