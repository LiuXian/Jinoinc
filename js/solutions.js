(function ($) {
    $(document).ready(function () {
        resizeIcon();
        solutionIconShow();
        scrollToSection();
        scrollSpy();
    });

    function solutionIconShow() {
        var $booguContainer = $("#boogu-container");
        var $imsgContainer = $("#imsg-container");
        var $eCommerceContainer = $("#e-commerce-container");

        $booguContainer.addClass("normal");

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var imsgOffsetTop = $imsgContainer.offset().top;
            var ecommerceOffsetTop = $eCommerceContainer.offset().top;
            var windowHeight = $(window).height();

            if(!$imsgContainer.hasClass("normal") && ((imsgOffsetTop - scrollTop) < windowHeight)) {
                $imsgContainer.addClass("normal");
            }

            if(!$eCommerceContainer.hasClass("normal") && ((ecommerceOffsetTop - scrollTop) < windowHeight)) {
                $eCommerceContainer.addClass("normal");
            }
        });
    }

    function scrollSpy() {
        $(".solutions-dropdown a").click(function () {
            var hash = $(this).attr("href");
            hash = hash.substr(hash.indexOf("#"));
            scrollToSection(hash);
        });

        $(".links a").click(function () {
            var href = $(this).attr("href");
            var keyword = "solutions.html";

            if(href.indexOf(keyword) !== -1) {
                var hash = href.substr(href.indexOf("#"));
                scrollToSection(hash);
            }
        });
    }

    $(window).resize(function() {
        resizeIcon();
    });

    function resizeIcon() {
        var times = 0.13;
        var windowWidth = $(window).width();

        if(windowWidth < 992) {
            times = 0.2;
        }

        if(windowWidth < 600) {
            times = 0.25;
        }

        if(windowWidth < 475) {
            times = 0.4;
        }

        var backWidth = windowWidth*times;
        $(".solutions-image-container").css({
            "margin-left": 0 - backWidth/2,
            "width" : backWidth,
            "height": backWidth,
            "border-radius": backWidth,
            "-webkit-border-radius": backWidth
        });
    }
    
})(jQuery);
