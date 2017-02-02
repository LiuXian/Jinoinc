(function ($) {
    $(document).ready(function () {
        learnMoreScroll();
        productIconShow();
    });

    function searchHandler() {
        $(".search-input-button").click(function (event) {
            event.stopPropagation();

            if($(".search-input-box").is(":visible") == false) {
                $(".search-input-box").fadeIn();
            } else {
                var searchText = $(".search-input-box").val();
                openSearchPage(searchText);
            }
        });

        $(".search-input-box").keyup(function (event) {
            if (event.which == 13) {
                var searchText = $(".search-input-box").val();
                openSearchPage(searchText);
            }
        });

        function openSearchPage(searchText) {
            if(searchText.length > 0) {
                window.open("http://www.baidu.com/s?wd=" + searchText + "+site%3Awww.jinoinc.com.cn");
            }
        }

        $(document).on("click", function (event) {
            var clickover = $(event.target);
            if (!clickover.hasClass("search-container") && !clickover.hasClass("icon-bar") && !clickover.hasClass("navbar-toggle")) {
                $(".search-input-box").fadeOut();
            }
        });

        $(".search-container").click(function (event) {
            event.stopPropagation();
        });
    }

    function learnMoreScroll() {
        $(".jumbotron-learn-more").click(function() {
            $('html, body').animate({
                scrollTop: $("#bugu-content").offset().top
            }, 500);
        });
    }

    function navHandler() {
        $(document).on("touchstart", function (event) {
            var clickover = $(event.target);
            var isOpened = $(".navbar-collapse").hasClass("collapse in");

            if (isOpened === true && !clickover.hasClass("navbar-toggle")) {
                $("button.navbar-toggle").click();
            }
        });

        $(".navbar-collapse").on("touchstart", function (event) {
            event.stopPropagation();
        });
    }

    function productIconShow() {
        var $booguContainer = $(".boogu-container");
        var $imsgContainer = $(".imsg-container");
        var $eCommerceContainer = $(".e-commerce-container");

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var booguOffsetTop = $booguContainer.offset().top;
            var imsgOffsetTop = $imsgContainer.offset().top;
            var ecommerceOffsetTop = $eCommerceContainer.offset().top;
            var windowHeight = $(window).height();

            if(!$booguContainer.hasClass("normal") && ((booguOffsetTop - scrollTop) < windowHeight)) {
                $booguContainer.addClass("normal");
            }

            if(!$imsgContainer.hasClass("normal") && ((imsgOffsetTop - scrollTop) < windowHeight)) {
                $imsgContainer.addClass("normal");
            }

            if(!$eCommerceContainer.hasClass("normal") && ((ecommerceOffsetTop - scrollTop) < windowHeight)) {
                $eCommerceContainer.addClass("normal");
            }
        });
    }


})(jQuery);
