
$(document).ready(function() {

    loginId = 'jpeek'

    $.ajax({
        type: "POST",
        url: '/login',
        data: data,
        success: success,
        dataType: dataType
    }).then(function() {
        window.location.href = "/questions"
    });
});