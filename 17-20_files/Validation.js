
function selectCheckToDelete(senderid, icount, strchkbox) {
    var flag = false;
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'You must check at least one of the record to delete !', html: true });      
        return false;
     
    }
    else {
        if (confirm('Are you sure to delete this record !')) {
            return true;
        }
        else {
            return false;
        }
    }
}

function selectCheckToEdit(senderid, icount, strchkbox) {
    var count = 0;
    var flag = false;
    for (var ii = 1; ii <= icount; ii++) {
        if (document.getElementById(senderid + strgetid(ii) + strchkbox).checked) {
            count += 1;
        }
    }
    if (count > 1) {
        swal({ title: 'Warning', text: 'You must check only one record to edit !', html: true });
        return false;
    }
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'You must check any one of the record to edit !', html: true });
        return false;
    }
    else {
        return true;
    }
}
function selectCheckToMulEdit(senderid, icount, strchkbox) {
    var count = 0;
    var flag = false;
    for (var ii = 1; ii <= icount; ii++) {
        if (document.getElementById(senderid + strgetid(ii) + strchkbox).checked) {
            count += 1;
        }
    }
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'You must check any one of the record to edit !', html: true });
        return false;
    }
    else {
        return true;
    }
}
function selectCheckToEditAll(senderid, icount, strchkbox) {
    var count = 0;
    var flag = false;
    for (var i = 0; i <= icount; i++) {
        var idd = senderid + strchkbox + i.toString();
        if (document.getElementById(idd).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select at least one record to edit !', html: true });
        return false;
    }
    else {
        return true;
    }
}

//used in fine master
function selectToAction(senderid, icount, strchkbox, strAction) {
    var count = 0;
    var flag = false;

    for (var ii = 1; ii <= icount; ii++) {
        if (document.getElementById(senderid + strgetid(ii) + strchkbox).checked) {
            count += 1;
        }
    }
       
    if (count > 1) {
        swal({ title: 'Warning', text: 'Please select only one record to  ' + strAction + ' !', html: true });
        return false;
    }
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select one record to  ' + strAction + ' !', html: true });
        return false;
    }
    else {
        return true;
    }
}
function selectAllToAction(senderid, icount, strchkbox, strAction) {
    var count = 0;
    var flag = false;
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select at least one record to ' + strAction + ' !', html: true });
        return false;
    }
    else {
        return true;
    }
}
function selectAll(senderid, icount, strchkbox, isselect) {
    for (var i = 1; i <= icount; i++) {
        if (document.getElementById(senderid + strgetid(i) + strchkbox).disabled == false)
            document.getElementById(senderid + strgetid(i) + strchkbox).checked = isselect;
    }
    return false;
}
function selectDeselectAll(sender, senderid, icount, strchkbox) {
    for (var i = 1; i <= icount; i++) {
        document.getElementById(senderid + strgetid(i) + strchkbox).checked = sender.checked;
    }
}
function selectAllLv(senderid, icount, strchkbox, isselect) {
    for (var i = 0; i < icount; i++) {
        if (document.getElementById(senderid + strchkbox + i.toString()).disabled == false)
            document.getElementById(senderid + strchkbox + i.toString()).checked = isselect;
    }
    return false;
}
function selectDeselectAllLv(sender, senderid, icount, strchkbox) {
    for (var i = 0; i < icount; i++) {
        document.getElementById(senderid + strchkbox + i.toString()).checked = sender.checked;
    }
}
function selectCheckToEditLv(senderid, icount, strchkbox) {
    debugger;
    var count = 0;
    var flag = false;
    for (var ii = 0; ii < icount; ii++) {
        var idd = senderid + strchkbox + ii.toString();
        if (document.getElementById(senderid + strchkbox + ii.toString()).checked) {
            count += 1;
        }
    }
    if (count > 1) {
        swal({ title: 'Warning', text: 'Please select only one record to edit !', html: true });
        return false;
    }
    for (var i = 0; i < icount; i++) {
        if (document.getElementById(senderid + strchkbox + i.toString()).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select one record to edit !', html: true });
        return false;
    }
    else {
        return true;
    }
}

function selectCheckToEditAllLv(senderid, icount, strchkbox) {
    var count = 0;
    var flag = false;
    for (var i = 0; i < icount; i++) {
        var idd = senderid + strchkbox + i.toString();
        if (document.getElementById(senderid + strchkbox + i.toString()).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select at least one record to edit !', html: true });
        return false;
    }
    else {
        return true;
    }
}

function selectToActionLv(senderid, icount, strchkbox, strAction) {
    var count = 0;
    var flag = false;
    for (var ii = 0; ii < icount; ii++) {
        if (document.getElementById(senderid + strchkbox + ii.toString()).checked) {
            count += 1;
        }
    }
    if (count > 1) {
        swal({ title: 'Warning', text: 'Please select only one record to ' + strAction + ' !', html: true });
        return false;
    }
    for (var i = 0; i < icount; i++) {
        if (document.getElementById(senderid + strchkbox + i.toString()).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select one record to  ' + strAction + '!', html: true });
        return false;
    }
    else {
        return true;
    }
}

function selectAllToActionLv(senderid, icount, strchkbox, strAction) {
    var count = 0;
    var flag = false;
    for (var i = 0; i < icount; i++) {
        if (document.getElementById(senderid + strchkbox + i.toString()).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select at least one record to ' + strAction + '!', html: true });       
        return false;
    }
    else {
        return true;
    }
}
function selectCheckToDeleteLv(senderid, icount, strchkbox) {
    debugger;
    var flag = false;
    for (var i = 0; i < icount; i++) {
        if (document.getElementById(senderid + strchkbox + i.toString()).checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        swal({ title: 'Warning', text: 'Please select at least one of the record to delete !', html: true });
        return false;
    }
    else {
        if (confirm('Are you sure to delete this record !')) {
            return true;
        }
        else {
            return false;
        }
    }
}

function strgetid(strid) {
    if (Number(strid) <= 9)
        return '0' + strid.toString();
    return strid.toString();
}

function CheckWeightage(strid, strVal) {
    if (document.getElementById(strid).value > Number(strVal)) {
        document.getElementById(strid).value = "";
        alert("Weightage can't be greater than " + strVal + " %.");
        return false;
    }
}

function ConfirmDeleteAllFiles() {
    if (confirm('Are you sure to delete all files !')) {
        return true;
    }
    else {
        return false;
    }
}
function CheckDecimal(e) {
        var key //= (window.event) ? event.keyCode : e.which;
        if (window.event) {
            key = event.keyCode
        }
        else {
            key = e.which
        }
        // Was key that was pressed a numeric character (0-9) and (.) or backspace (8)?
        if (key > 47 && key < 58 || key == 46 || key == 8 || key == 0)
            return; // if so, do nothing
        else // otherwise, discard character
            if (window.event) //IE
        {
            window.event.returnValue = null;
        } else //Firefox
        {
            e.preventDefault();
        }
    }
function selectCheckToApprove(senderid,icount,strchkbox)
    {
        var flag=false;
        for(var i=1;i<=icount;i++)
        {
            if(document.getElementById(senderid+strgetid(i)+strchkbox).checked)
            {
                flag=true;
                break;
            }
        }
        if(flag==false)
        {
            alert('You must check at least one of the record to approve !');
            return false;
        }
        else
        {
                return true;
        }
    }
    
    
function selectCheckToReject(senderid,icount,strchkbox)
    {
        var flag=false;
        for(var i=1;i<=icount;i++)
        {
            if(document.getElementById(senderid+strgetid(i)+strchkbox).checked)
            {
                flag=true;
                break;
            }
        }
        if(flag==false)
        {
            alert('You must check at least one of the record to reject !');
            return false;
        }
        else
        {
                return true;
        }
    }
function curselectCheckToreturnbookLv(senderid, icount, strchkbox) {
        var flag = false;
        for (var i = 0; i < icount; i++) {
            if (document.getElementById(senderid + i.toString() + strchkbox).checked) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            alert('Please select at least one of the record to return !');
            return false;
        }
        else {
            if (confirm('Are you sure to return this book !')) {
                return true;
            }
            else {
                return false;
            }
        }
    }
function selectCheckToReserveBookLv(senderid, icount, strchkbox) {
        var count = 0;
        var flag = false;
        for (var ii = 0; ii < icount; ii++) {
            if (document.getElementById(senderid + ii.toString() + strchkbox).checked) {
                count += 1;
            }
        }
        if (count > 3) {
            alert('Please do not select more than 3 record to reserve book !');
            return false;
        }
        for (var i = 0; i < icount; i++) {
            if (document.getElementById(senderid + i.toString() + strchkbox).checked) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            alert('Please select one record to reserve book !');
            return false;
        }
        else {
            return true;
        }
    }
function selectCheckToReserveBookUnReserveLv(senderid, icount, strchkbox) {
        var count = 0;
        var flag = false;
        for (var ii = 0; ii < icount; ii++) {
            if (document.getElementById(senderid + ii.toString() + strchkbox).checked) {
                count += 1;
            }
        }
        if (count > 3) {
            alert('Please do not select more than 3 record to cancellation book !');
            return false;
        }
        for (var i = 0; i < icount; i++) {
            if (document.getElementById(senderid + i.toString() + strchkbox).checked) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            alert('Please select one record to cancellation book !');
            return false;
        }
        else {
            return true;
        }
    }
function selectAlltoSave(senderid, icount, strchkbox, isselect) {
        for (var i = 1; i <= icount; i++) {
            if (document.getElementById(senderid + strgetid(i) + strchkbox)!=null)
                document.getElementById(senderid + strgetid(i) + strchkbox).checked = isselect;
        }
        return false;
    }
function openBill(senderid, icount, strchkbox, id) {

        var count = 0;
        var flag = false;
        for (var ii = 1; ii <= icount; ii++) {
            if (document.getElementById(senderid + strgetid(ii) + strchkbox).checked) {
                count += 1;
            }
        }
        if (count > 1) {
            alert('You must check only one record print !');
            return false;
        }
        for (var i = 1; i <= icount; i++) {
            if (document.getElementById(senderid + strgetid(i) + strchkbox).checked) {
                var SId = document.getElementById(senderid + strgetid(i) + "_hidStuAutoId").value;
                var Ids = document.getElementById(senderid + strgetid(i) + "_hidSACategoryId").value;
                var CId = document.getElementById(senderid + strgetid(i) + "_hidSectionId").value;
                var FId = document.getElementById(senderid + strgetid(i) + "_hidFinId").value.split('#')[1];
               
                return openpopup('../FeeManagement/FM_DwnldFeeBillaspx.aspx?sid=' + SId + '&id=' + id + '&cid=' + CId + '&fid=' + FId + '', 'FeeBill', 700, 650, 50, 100, 'FeeBill');
                break;
            }
        }
        if (flag == false) {
            alert('You must check any one of the record to print !');
            return false;
        }
        else {
            return true;
     
     
     
        }

    }
function openpopup(url, icount, popw, poph, popt, popl, ttl) {

        var params = 'width=' + popw + ', height=' + poph;
        params += ', top=' + popt + ', left=' + popl;
        params += ', directories=no';
        params += ', location=no';
        params += ', menubar=no';
        params += ', resizable=no';
        params += ', scrollbars=no';
        params += ', status=no';
        params += ', toolbar=no';
        //alert(ttl);
        //alert(url);
        //alert(popw);
        //alert(poph);
        //alert(popl);
        //alert('url='+url,'wth='+popw,'hgt='+poph,'tp='+popt,'lp='+popl);
        // newwin=window.open(url,'NewPopUp'+icount, params);
        newin = window.open(url, 'ttl' + icount, params);
        if (window.focus) { newwin.focus() }
        return false;
}
function NumberOnly() {
    $('.NumberOnly').keypress(function (event) {

        debugger;
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if ((event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) && event.keyCode != 46) {
            return true;
        }

        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }

    });
}



function NumberWithOneDot() {
    $('.NumberWithOneDot').keypress(function (event) {
        debugger;
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode == 46) {
            var countDot = $(this).val().split(".").length - 1;
            if (countDot == 1) {
                return false;
            }
        }
        if (event.keyCode == 8 || event.keyCode == 46) {
            return true
        }
        else {

            if (
                //(charCode != 45 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.
                (charCode != 46 || $(this).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
                (charCode < 48 || charCode > 57))
                return false;
        }
        return true;
    });
}

$(document).ready(function () {
    InitNumber();
    InitMaxLengthMobile();
});
function InitNumber() {

    $('.NumberWithOneDot,.NumberOnly').bind("cut paste drop", function (e) {
        e.preventDefault();
    });
    $('.NumberWithOneDot,.NumberOnly').attr("autocomplete", "off");

    $('.NumberWithOneDot').keypress(function (event) {

        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode == 46) {
            var countDot = $(this).val().split(".").length - 1;
            if (countDot == 1) {
                return false;
            }
        }
        if (event.keyCode == 8 || event.keyCode == 46) {
            return true
        }
        else {

            if (
                //(charCode != 45 || $(element).val().indexOf('-') != -1) &&  // “-” CHECK MINUS, AND ONLY ONE.
                (charCode != 46 || $(this).val().indexOf('.') != -1) &&      // “.” CHECK DOT, AND ONLY ONE.
                (charCode < 48 || charCode > 57))
                return false;
        }
        return true;
    });

    $('.NumberOnly').keypress(function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if ((event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) && event.keyCode != 46) {
            return true;
        }

        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }

    });
}
function InitMaxLengthMobile() {
    //some mobile divice dose't support maxlength property this will help;
    var $input = $('input')
    var max = 0;
    $($input).each(function () {
        if ($(this).attr('MaxLength') != null) {
            max = $(this).attr('MaxLength');
            $(this).bind("drop", function (e) {
                e.preventDefault();
            });
            $(this).bind('keyup', function () {
                if ($(this).val().length > parseInt($(this).attr('MaxLength'))) {
                    $(this).val($(this).val().substr(0, parseInt($(this).attr('MaxLength'))));
                }
            });

        }
        
    });
    
    var $textarea = $('textarea')
    $($textarea).each(function () {
        
        if ($(this).attr('Max_Length') != null) {
            max = $(this).attr('Max_Length');
            $(this).bind("drop", function (e) {
                e.preventDefault();
            });

            $(this).bind('keyup', function () {
                if ($(this).val().length > parseInt($(this).attr('Max_Length'))) {
                    $(this).val($(this).val().substr(0, parseInt($(this).attr('Max_Length'))));
                }
            });

        }
    });



}

function MySwal(title, text)
{
    swal({
        title: title,
        text: text,
        html: true
    });
}


function CheckChangeAdvance(args, childclass) {
    var isok = false;
    if ($(args).attr('checked')) {
        isok = true;
    }
    if (!isok) {
        $(args).closest('span').removeClass('checked');
        $('.' + childclass + ' input').each(function () {
            $(this).attr('checked', false);
            $(this).closest('span').removeClass('checked');
        });
    }
    else if (isok) {
        $(args).closest('span').addClass('checked');
        $('.' + childclass + ' input').each(function () {
            if ($(this).closest('tr').is(':visible')) {

                if (!$(this).attr('disabled')) {
                    $(this).attr('checked', true);
                    $(this).closest('span').addClass('checked');
                }
             
            }
        });
    }
}
