(function ($) {
    $(document).ready(function () {
        searchHandler();
        navHandler();
        solutionLinkHoverHander();
        aboutLinkHoverHander();
        windowResizeHandler();
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

    var solutionFadeOutTimeout = void 0;
    var contactFadeOutTimeout = void 0;

    function solutionLinkHoverHander() {
        if($(window).width() < 768) {
            return void 0;
        }

        $(".solutions-menu-link").hover(function() {
            clearTimeout(solutionFadeOutTimeout);
            $(".about-menu").hide();
            $(".solutions-menu").fadeIn();
        }, function () {
            solutionFadeOutTimeout = setTimeout(function() {
                $(".solutions-menu").fadeOut();
            }, 2000);
        });

        $(".solutions-menu-link").click(function () {
            if($(".solutions-menu").is(":visible") == true) {
                return false;
            }
        });

        $(".solutions-menu").hover(function() {
            clearTimeout(solutionFadeOutTimeout);
        }, function () {
            solutionFadeOutTimeout = setTimeout(function() {
                $(".solutions-menu").fadeOut();
            }, 2000);
        });

    }

    function aboutLinkHoverHander() {
        if($(window).width() < 768) {
            return void 0;
        }

        $(".about-menu-link").hover(function() {
            clearTimeout(contactFadeOutTimeout);
            $(".solutions-menu").hide();
            $(".about-menu").fadeIn();
        }, function () {
            contactFadeOutTimeout = setTimeout(function() {
                $(".about-menu").fadeOut();
            }, 2000);
        });

        $(".about-menu-link").click(function () {
            if($(".about-menu").is(":visible") == true) {
                return false;
            }
        });

        $(".about-menu").hover(function() {
            clearTimeout(contactFadeOutTimeout);
        }, function () {
            contactFadeOutTimeout = setTimeout(function() {
                $(".about-menu").fadeOut();
            }, 2000);
        });

    }
    
    function windowResizeHandler() {
        $(window).resize(function() {
            solutionLinkHoverHander();
            aboutLinkHoverHander();
        });
    }
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

function scrollToSection() {
    var hashObj = parseHash(window.location.hash);

    $('html, body').animate({
        scrollTop: $("#" + hashObj.section).offset().top
    }, 500);

}
