(function ($) {
    $(document).ready(function () {
        contactModalAnchor();
        contactModalHander();
    });


    function contactModalAnchor() {
        $("#contactModal").modal({
            show: false,
            backdrop: false
        });

        $("#contact-modal-btn").click(function() {
            $("#contactModal").modal("show");
        });
    }

    function contactModalHander() {
        $("#contact-modal-submit").click(function () {
            saveSend();
        });

        $("#contact-modal-cancel").click(function () {
            $("#contactModal").modal('hide');
        });

        
    }

    function saveSend() {
        var i18n = new I18N();
        var lang = i18n.getLang();

        if (!checkStringName('userName', langSwitch["CONTACT-US-MODAL-USERNAME-EMPTY-ERROR-TEXT"][lang]))
            return false;
        if (!checkStringName('email', langSwitch["CONTACT-US-MODAL-EMAIL-EMPTY-ERROR-TEXT"][lang])) {
            return false;
        } else {
            var reEmail = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
            if (!reEmail.test(jQuery('#email').val())) {
                jQuery('#emailMessage').html(langSwitch["CONTACT-US-MODAL-EMAIL-FORMAT-ERROR-TEXT"][lang]);
                jQuery('#email').focus();
                return false;
            } else {
                jQuery('#emailMessage').html('');
            }
        }
        if (!checkStringName('address', langSwitch["CONTACT-US-MODAL-CONTACT-ADDR-EMPTY-ERROR-TEXT"][lang]))
            return false;
        if (!checkStringName('company', langSwitch["CONTACT-US-MODAL-COMPANY-ADDR-EMPTY-ERROR-TEXT"][lang]))
            return false;
        if (!checkStringName('phone', langSwitch["CONTACT-US-MODAL-OFFICE-TEL-ERROR-TEXT"][lang])) {
            return false;
        } else {
            var reg = /[\u4e00-\u9fa5|a-zA-Z]*/ig;
            if (jQuery('#phone').val().length < 8 || jQuery('#phone').val().match(reg).length < jQuery('#phone').val().length) {
                jQuery('#phoneMessage').html(langSwitch["CONTACT-US-MODAL-OFFICE-TEL-FORMAT-ERROR-TEXT"][lang]);
                jQuery('#phone').focus();
                return false;
            } else {
                jQuery('#phoneMessage').html('');
            }
        }
        if (!checkStringName('fax', langSwitch["CONTACT-US-MODAL-FAX-EMPTY-ERROR-TEXT"][lang])) {
            return false;
        } else {
            var rex = /^(0{1})([^06]{1})([\d]{1,2})(\-{1})([\d]{7})$/
            if (!rex.test(jQuery('#fax').val())) {
                jQuery('#faxMessage').html(langSwitch["CONTACT-US-MODAL-FAX-FORMAT-ERROR-TEXT"][lang]);
                jQuery('#fax').focus();
                return false;
            } else {
                jQuery('#faxMessage').html('');
            }
        }

        if (!jQuery('#question').val().match(/^\s*$/g) && jQuery('#question').val().length > 140) {
            jQuery('#questionMessage').html(langSwitch["AT-MOST-140-WORDS-ERROR-TEXT"][lang]);
            jQuery('#question').focus();
            return false;
        } else {
            jQuery("#questionMessage").html('');
        }

        var captcha = document.getElementsByName('captcha');
        if (captcha[0].value == '') {
            $('#captchaMessage').html(langSwitch["CONTACT-US-MODAL-CAPTCHA-EMPTY-ERROR-TEXT"][lang]);
            return false;
        }

        var form = $('#send');
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            dataType: 'json',
            success: function (data) {
                if (data == false) {
                    $('#captcha').attr('src', 'captcha.php?t=' + Math.random());
                    $('#captchaMessage').html(langSwitch["CONTACT-US-MODAL-CAPTCHA-ERROR-TEXT"][lang]);
                }
                else {
                    $("#contactModal").modal('hide');
                }
            }


        });
    }

    function getMessageSend(res) {
        resText = res.responseText;
        var jsonMsgObj = new JsonMsgObj(resText);
        var codeid = jsonMsgObj.getCodeid();
        if (codeid == 0) {
            alert(jsonMsgObj.getMessage());
            if (url == null || url == '') {
                window.location.href = '/';
            } else {
                window.location.href = url;
            }
        } else {
            hiddenButton_2();
            alert(jsonMsgObj.getMessage());
        }
    }

    function testStatInput() {
        statInput('question', 140);
    }

    function checkStringName(nameId, message) {
        nameId = '#' + nameId;
        if (jQuery(nameId).val().match(/^\s*$/g)) {
            jQuery(nameId + "Message").html(message);
            jQuery(nameId).focus();
            return false;
        } else {
            jQuery(nameId + "Message").html('');
            return true;
        }
    }
})(jQuery);


