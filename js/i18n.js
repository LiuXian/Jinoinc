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
}

I18N.prototype.langSwitchHandler = function () {
    var i18n = this;
    i18n.init();

    $(".lang-switcher").click(function () {
        $(".lang-switcher").removeClass("active");
        $(this).addClass("active");
        window.location.hash = $(this).attr("lang");
        var lang = i18n.getLang();
        i18n.repaceText(lang);
    });
}

I18N.prototype.getLang = function () {
    var langHash = window.location.hash;

    if(langHash != "#en") {
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
