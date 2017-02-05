//form submit Ajax

$(function() {
    $("div#submit").click(function(){
        var email = $("#email").val();
        $.ajax({
            type: "POST",
            url: "",
            data: email,
            success: function(data){
                if(email.trim()=='') {
                    showError();
                } else {
                    showSucces();
                    console.log ('succes! your ' + email + ' has been sent to us' );
                }
            },
            error: function(){
                console.log ('failure');
            }
        });
    });
});

function showSucces() {
    $('#form-open').addClass('hide');
    $('#form-succes').removeClass('hide');

}
function showError() {
    $('.form-error').removeClass('hide');
}