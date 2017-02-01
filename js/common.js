(function ($) {
    $(document).ready(function () {
        searchHandler();
        navHandler();
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

})(jQuery);
