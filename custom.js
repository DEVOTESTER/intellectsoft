
jQuery(document).ready(function () {

$("#cemetery").owlCarousel({
	autoplay: true,
	items: 5,
	responsive: {
        1199: {
            items: 5
        },
        1024: {
            items: 4
        },
        768: {
            items: 3
        },
        320: {
            items: 1
        }
	},
	onInitialized: function (event) {
	$("#cemetery").parent().css({opacity: 1})
}
});


$("#officesSlider").owlCarousel({
    loop: true,
    autoplay: false,
    items: 4,
    margin: 1,
    nav: true,
    dots: false,
    smartSpeed: 600,
    responsive: {
        1024: {
            items: 4
        },
        768: {
            nav: true,
            items: 3,
            autoplay: false,
        },
        320: {
            nav: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 800
        }
    }
});

});

