$(".catalog-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<svg id="prev" class="catalog-slider__arrow catalog-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="catalog-slider__arrow catalog-slider__arrow--next"><use xlink:href="#back" /></svg>',

});


$(".feedback-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<svg id="prev" class="feedback-slider__arrow feedback-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="feedback-slider__arrow feedback-slider__arrow--next"><use xlink:href="#back" /></svg>',
});


$(".bed-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<svg id="prev" class="bed-slider__arrow bed-slider__arrow--back"><use xlink:href="#back" /></svg>',
    nextArrow: '<svg id="next" class="bed-slider__arrow bed-slider__arrow--next"><use xlink:href="#back" /></svg>',
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


//Burger menu


$('.nav__burger').on('click', function() {

    if($(this).hasClass('active')) {
        $('.nav--mobile').animate({
            height: "0px",
            paddingTop: "0px"
    
        })

        $('.nav__burger-line').each(function() {
            $(this).removeClass('nav__burger-line--active');
        })

    } else {
        $('.nav--mobile').animate({
            height: 242 + "px",
            paddingTop: "30px"
    
        })

        $('.nav__burger-line').each(function() {
            $(this).addClass('nav__burger-line--active');
        })
    }


    $(this).toggleClass('active');


})

//Scroll to target



$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});


//Map shop page navigation

const placemarks = [
    {
        id: 1,
        name: 'ЦДиИ «Expostroy»',
        desc: 'Нахимовский проспект, 24 ',
        coords: [
            55.672428,
            37.582709
        ]
    },
    {
        id: 2,
        name: 'МЦ «Империя» ',
        desc: 'Дмитровское шоссе, 161 б ',
        coords: [
            55.905447, 
            37.539302
        ]
    },
    {
        id: 3,
        name: 'ТЦ «Черёмушки» ',
        desc: 'Профсоюзная улица, 56 ',
        coords: [
            55.670021, 
            37.552480
        ]
    },
    {
        id: 4,
        name: 'ТРК VEGAS ',
        desc: 'Каширское шоссе, 24 км МКАД ',
        coords: [
            55.582889, 
            37.745313
        ]
    },
    {
        id: 5,
        name: 'МЦ «Family room»',
        desc: 'Ленинградское шоссе 25 ',
        coords: [
            55.828010, 37.489392
        ]
    },
    {
        id: 6,
        name: 'МЦ «Family room» ',
        desc: 'Киевское шоссе, 1,5 км от МКАД',
        coords: [
            55.627783, 
            37.436391
        ]
    },
    {
        id: 7,
        name: 'МЦ «Соле молл» ',
        desc: 'Ярославское шоссе, 19 стр. 1 ',
        coords: [
            55.858653, 
            37.685933
        ]
    },
    {
        id: 8,
        name: 'МЦ «Roomer» ',
        desc: 'Улица Ленинская Слобода, 26 ',
        coords: [
            55.710124, 
            37.654601
        ]
    },
    {
        id: 9,
        name: 'МТЦ «Мебель-Сити» ',
        desc: 'Дмитровское шоссе, 118 к. 1 ',
        coords: [
            55.905679, 
            37.544423
        ]
    },
    {
        id: 10,
        name: 'МК «Армада» ',
        desc: 'Кировоградская улица, 11 ',
        coords: [
            55.615904, 
            37.607915
        ]
    },
    {
        id: 11,
        name: 'ТРЦ «Чайна Таун» ',
        desc: '32 км МКАД ',
        coords: [
            55.573049, 37.608117
        ]
    },
    {
        id: 12,
        name: 'ТРК «Красный кит» ',
        desc: 'г. Красногорск, улица Ленина, 2 ',
        coords: [
            55.819454, 
            37.320239
        ]
    },
    {
        id: 13,
        name: 'МЦ «Таурус»',
        desc: 'улица Коминтерна, 24 б ',
        coords: [
            54.201365, 
            37.595321
        ]
    },
    {
        id: 14,
        name: 'ЦМиИ «Мебель Молл» ',
        desc: 'Осиновая гора, 2 ',
        coords: [
            54.173564, 
            37.642770
        ]
    },
    {
        id: 15,
        name: 'ИМ «Themebel» ',
        desc: 'улица Батуевская ветка, 20 б ',
        coords: [
            48.493128, 
            135.084844
        ]
    },
    {
        id: 16,
        name: 'МЦ «Таурус» ',
        desc: 'улица Калинина, 29 б ',
        coords: [
            43.101569, 
            131.923609
        ]
    }
]




ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });


    let points = placemarks.map((item, index) => {
        let point = new ymaps.Placemark(item.coords, { 
            balloonContentHeader: item.name,
            balloonContent: item.desc,
        }, 
        {
            preset: 'islands#redIcon',
        });
        // point.description = item.desc;
        // point.name = item.name;
        return point;
    })

    points.forEach((item) => {
        myMap.geoObjects.add(item);
    })

    //Mark point on the map
    $('.shop-item__name').on('click', function() {
        setTimeout(() => {
            let targetId = $(this).data('id');

            placemarks.forEach((item) => {
                if(item.id == targetId) {
                    myMap.setCenter(item.coords, 17, {
                        duration: 400,
                        checkZoomRange: true,
                    });
                }
            })
        }, 400)
    })

}


