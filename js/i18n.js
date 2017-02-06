(function ($) {
    $(document).ready(function () {
        var i18n = new I18N();
        i18n.langSwitchHandler();
    })
})(jQuery);

function I18N() {

}

I18N.prototype.init = function () {
    var i18n = this;
    var lang = i18n.getLang();
    i18n.repaceText(lang);
    i18n.repaceLink(lang);
}

I18N.prototype.langSwitchHandler = function () {
    var i18n = this;
    i18n.init();

    $(".lang-switcher").click(function () {
        $(".lang-switcher").removeClass("active");
        $(this).addClass("active");
        var targetlang = $(this).attr("lang");
        var res = parseHash(window.location.hash);
        res.lang = targetlang;
        window.location.hash = makeHash(res);
        var lang = i18n.getLang();
        i18n.repaceText(lang);
        i18n.repaceLink(lang);
    });
}

I18N.prototype.getLang = function () {
    var res = parseHash(window.location.hash);
    var langHash = res.lang;

    if(langHash != "en") {
        return "zh";
    }

    return "en";
}

I18N.prototype.repaceText = function (lang) {
    for(var textClass in langSwitch) {
        var text = langSwitch[textClass][lang];
        $("." + textClass).text(text);
    }
}

I18N.prototype.repaceLink = function (lang) {
    $("a").each(function() {
        var originHref = $(this).attr("href");

        if((originHref != undefined) && (originHref != null)) {
            originHref = originHref.replace(/lang=zh/g, "lang=" + lang);
            originHref = originHref.replace(/lang=en/g, "lang=" + lang);
            $(this).attr("href", originHref);
        }
    })

    var $booguSolutionImg = $("#bogu-solution-img");
    if($booguSolutionImg.length > 0) {
        if(lang == "en") {
            $booguSolutionImg.attr("src", "images/bugu-solution2.svg");
        } else {
            $booguSolutionImg.attr("src", "images/bugu-solution1.svg");
        }
    }

}

