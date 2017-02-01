(function ($) {
    $(document).ready(function () {
        solutionIconShow();
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

            console.log((imsgOffsetTop - scrollTop));

            if(!$imsgContainer.hasClass("normal") && ((imsgOffsetTop - scrollTop) < windowHeight)) {
                $imsgContainer.addClass("normal");
            }

            if(!$eCommerceContainer.hasClass("normal") && ((ecommerceOffsetTop - scrollTop) < windowHeight)) {
                $eCommerceContainer.addClass("normal");
            }
        });
    }


})(jQuery);
