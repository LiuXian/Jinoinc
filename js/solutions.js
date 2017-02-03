(function ($) {
    $(document).ready(function () {
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
        $(".solutions-menu .menu-item").click(function () {
            var hash = $(this).attr("href");
            hash = hash.substr(hash.indexOf("#"));
            scrollToSection(hash);
        });


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
    
})(jQuery);
