(function ($) {
    $(document).ready(function () {
        scrollToSection();
        scrollSpy();
    });

    function scrollSpy() {
        $(".about-menu .menu-item").click(function () {
            scrollToSection();
        });
    }

})(jQuery);