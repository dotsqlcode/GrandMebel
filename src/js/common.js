$(".catalog-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<svg id="prev" class="catalog-slider__arrow catalog-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="catalog-slider__arrow catalog-slider__arrow--next"><use xlink:href="#next" /></svg>'
});