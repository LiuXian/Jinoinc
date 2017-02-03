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
        if (!checkStringName('userName', '姓名不能为空'))
            return false;
        if (!checkStringName('email', 'E-mail不能为空')) {
            return false;
        } else {
            var reEmail = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
            if (!reEmail.test(jQuery('#email').val())) {
                jQuery('#emailMessage').html('E-mail必须符合要求');
                jQuery('#email').focus();
                return false;
            } else {
                jQuery('#emailMessage').html('');
            }
        }
        if (!checkStringName('address', '联系地址不能为空'))
            return false;
        if (!checkStringName('company', '公司名称不能为空'))
            return false;
        if (!checkStringName('phone', '办公电话不能为空')) {
            return false;
        } else {
            var reg = /[\u4e00-\u9fa5|a-zA-Z]*/ig;
            if (jQuery('#phone').val().length < 8 || jQuery('#phone').val().match(reg).length < jQuery('#phone').val().length) {
                jQuery('#phoneMessage').html('请输入正确的联系电话');
                jQuery('#phone').focus();
                return false;
            } else {
                jQuery('#phoneMessage').html('');
            }
        }
        if (!checkStringName('fax', 'fax不能为空')) {
            return false;
        } else {
            var rex = /^(0{1})([^06]{1})([\d]{1,2})(\-{1})([\d]{7})$/
            if (!rex.test(jQuery('#fax').val())) {
                jQuery('#faxMessage').html('fax必须符合要求');
                jQuery('#fax').focus();
                return false;
            } else {
                jQuery('#faxMessage').html('');
            }
        }

        if (!jQuery('#question').val().match(/^\s*$/g) && jQuery('#question').val().length > 140) {
            jQuery('#questionMessage').html('最多字数是140字');
            jQuery('#question').focus();
            return false;
        } else {
            jQuery("#questionMessage").html('');
        }

        var captcha = document.getElementsByName('captcha');
        if (captcha[0].value == '') {
            $('#captchaMessage').html('验证码不能为空');
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
                    $('#captchaMessage').html('验证码不正确');
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


