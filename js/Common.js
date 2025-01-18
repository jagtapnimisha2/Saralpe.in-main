//Demo of calling Ajax
//$('.button').on('click', function () {
//    var params = $.extend({}, doAjax_params_default);
//    params['url'] = `your url`;
//    params['data'] = `your data`;
//    params['successCallbackFunction'] = `your success callback function`
//    doAjax(params);
//});
const myEnum = {
    Get: 2,
    POST: 3,
    PUT: 4,
    DELETE:5
};
const NONE = 0;
const MOVEDATAVALIDATIONMSG = "Please select at least one records";

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var doAjax_params_default = {
    'url': null,
    'requestType': "GET",
    'contentType': 'application/x-www-form-urlencoded; charset=UTF-8',
    'dataType': 'json',
    'data': {},
    'beforeSendCallbackFunction': null,
    'successCallbackFunction': null,
    'completeCallbackFunction': null,
    'errorCallBackFunction': null,
};
//TEST data

function doAjax(doAjax_params) {
  
    var url = doAjax_params['url'];
    var requestType = doAjax_params['requestType'];
    var contentType = doAjax_params['contentType'];
    var dataType = doAjax_params['dataType'];
    var data = doAjax_params['data'];
    var beforeSendCallbackFunction = doAjax_params['beforeSendCallbackFunction'];
    var successCallbackFunction = doAjax_params['successCallbackFunction'];
    var completeCallbackFunction = doAjax_params['completeCallbackFunction'];
    var errorCallBackFunction = doAjax_params['errorCallBackFunction'];

    //make sure that url ends with '/'
    /*if(!url.endsWith("/")){
     url = url + "/";
    }*/
  /*  loaderShow();*/
    $.ajax({
        url: url,
        crossDomain: true,
        type: requestType,
        contentType: contentType,
        dataType: dataType,
        data: data,
        beforeSend: function (jqXHR, settings) {
            if (typeof beforeSendCallbackFunction === "function") {
                debugger
             
                beforeSendCallbackFunction();
              
            }
        },
        success: function (data, textStatus, jqXHR) {
            if (typeof successCallbackFunction === "function") {
                successCallbackFunction(data);
              /*  loaderhide();*/
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (typeof errorCallBackFunction === "function") {
              /*  loaderhide();*/
            }
        },
        complete: function (jqXHR, textStatus) {
            if (typeof completeCallbackFunction === "function") {
              
                completeCallbackFunction();
             /*   loaderhide();*/
            }
        }
    });
   // ResetThisSession();
}

function DownloadExcel() {
    var params = $.extend({}, doAjax_params_default);
    params['url'] = '/Common/ExportExcel';
    params['data'] = { stateId: this.value };
    params['successCallbackFunction'] = ExportExcelFile;
    doAjax(params);
}

//function ExportExcelFile(data) {
//    notif({
//        msg: 'Your Data Export Successfully',
//        type: "success"
//    });
//};

//$('.form-control').mouseout(function () {
//    $(this).val($(this).val().trim());
//});

////$('._datepicker').datepicker({
////    changeMonth: true,
////    changeYear: true,
////    dateFormat: "m/d/yy",
////    minDate: -16000, maxDate: "+0"
////});
//$(function () {
//    var dateFormat = "dd/mm/yy",
//        from = $("._datepicker")
//            .datepicker({
//                changeMonth: true,
//                changeYear: true,
//                dateFormat: "dd/mm/yy",
//                minDate: -16000, maxDate: "+0"
//            })
//            .on("change", function () {
//                to.datepicker("option", "minDate", getDate(this));
//            }),
//        to = $("._datepickerTo").datepicker({
//            changeMonth: true,
//            changeYear: true,
//            dateFormat: "dd/mm/yy",
//            minDate: -16000, maxDate: "+0"
//        })
//            .on("change", function () {
//                from.datepicker("option", "maxDate", getDate(this));
//            });

//    function getDate(element) {
//        var date;
//        try {
//            date = $.datepicker.parseDate(dateFormat, element.value);
//        } catch (error) {
//            date = null;
//        }

//        return date;
//    }
//});