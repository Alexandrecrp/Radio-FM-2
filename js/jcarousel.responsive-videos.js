(function($) {
    $(function() {
        var jcarousel = $('.jcarousel-videos');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

				if (width >= 1300){
					width = width / 7;
				} else if (width >= 900) {
                    width = width / 5;
                } else if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                } else if (width >= 320) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-videos-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-videos-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
