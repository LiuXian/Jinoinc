(function ($) {
    $(document).ready(function () {
        searchHandler();
        navHandler();
        resizeBodyPaddingTop();
    });

    $(window).resize(function() {
        resizeBodyPaddingTop();
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

    function resizeBodyPaddingTop() {
        var paddingTop = $("nav").height();
        $("body").css({
            "padding-top" : paddingTop
        });
    };

})(jQuery);

function parseHash(hashStr) {
    var result = {};
    var hashValue = hashStr.substr(1);

    var valuePair = hashValue.split("&");

    for(var index = 0; index < valuePair.length; index++) {
        var valueMap = valuePair[index].split("=");
        result[valueMap[0]] = valueMap[1];
    }

    return result;
}

function makeHash(res) {
    var result = "";
    if((res.lang != undefined) && (res.lang != null)) {
        result = result + "lang=" + res.lang;
    }

    if((res.section != undefined) && (res.section != null)) {
        result = result + "&section=" + res.section;
    }

    return result
}

function scrollToSection(hash) {
    var hash = hash || window.location.hash;
    var hashObj = parseHash(hash);

    if($("#" + hashObj.section).length > 0) {
        $('html, body').animate({
            scrollTop: $("#" + hashObj.section).offset().top - 100
        }, 500);
    }
}
