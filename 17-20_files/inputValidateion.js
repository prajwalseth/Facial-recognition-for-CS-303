$(function () {

    $('.AlphaNumeric').bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $('.AlphaNumericSpace').bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9 ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 39 || event.keyCode == 53) {//|| event.keyCode == 37
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 53) {
            return false;
        }

    });

    $('.AlphaSpace').bind('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 39) {//|| event.keyCode == 37
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 53) {
            return false;
        }

    });

    $('.datepicker').bind('keypress', function (event) {
        return false;
    });


    $('.Numeric').bind('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });


    //$('.email').bind('keypress', function (event) {
    //    //var regex = new RegExp("/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/);
    //    var regex = new RegExp("^[a-zA-Z0-9@.]+$");
    //    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    //    if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
    //        return true;
    //    }
    //    if (!regex.test(key)) {
    //        event.preventDefault();
    //        return false;
    //    }
    //    if (event.keyCode == 53) {
    //        return false;
    //    }
    //});
    $(".email").blur(function () {        
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddress = $(this).val();
        $('.parsley-errors-list').empty();
        if (!emailReg.test(emailaddress)) {
            $(this).val('');
            $(this).addClass('parsley-error');
            $(this).parent().append('<ul class="parsley-errors-list filled" id="parsley-id-7825"><li class="parsley-required">This value is required.</li></ul>');
            $(this).focus();            
        }
    });

    $('.fax').bind('keypress', function (event) {
        //var regex = new RegExp("/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/);
        var regex = new RegExp("^[0-9+.]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 53) {
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 53) {
            return false;
        }
    });
    $('.pin').bind('keypress', function (event) {
        //var regex = new RegExp("/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/);
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 53) {
            return true;
        }
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        if (event.keyCode == 53) {
            return false;
        }
    });
});