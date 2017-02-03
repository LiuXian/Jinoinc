(function ($) {
    $(document).ready(function () {
        scrollToSection();
        scrollSpy();
    });

    function scrollSpy() {
        $(".about-menu .menu-item").click(function () {
            var hash = $(this).attr("href");
            hash = hash.substr(hash.indexOf("#"));
            $(".about-menu").fadeOut();
            scrollToSection(hash);
        });

        $(".about-us-dropdown a").click(function () {
            var hash = $(this).attr("href");
            hash = hash.substr(hash.indexOf("#"));
            scrollToSection(hash);
        });

        $(".contact-us-link").click(function () {
            var hash = $(this).attr("href");
            hash = hash.substr(hash.indexOf("#"));
            scrollToSection(hash);
        });

        $(".links a").click(function () {
            var href = $(this).attr("href");
            var keyword = "contacts.html";

            if(href.indexOf(keyword) !== -1) {
                var hash = href.substr(href.indexOf("#"));
                scrollToSection(hash);
            }
        });
    }

})(jQuery);