const darkSwitch=document.getElementById("darkSwitch");function initTheme(){const e=null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch");darkSwitch.checked=e,e?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")}function resetTheme(){darkSwitch.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("darkSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("darkSwitch"))}window.addEventListener("load",()=>{darkSwitch&&(initTheme(),darkSwitch.addEventListener("change",()=>{resetTheme()}))});
;function showconfirmation () {
  document.getElementById('confirmation_alert').removeAttribute('style');
  
} 

// does not work since the alert is distroyed -- check to see if it works after finishing submission stuff
function hideconfirmation () {
  document.getElementById('confirmation_alert').style.display = 'none;';
}
;function submitContactForm(){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var name = $('#Name').val();
    var email = $('#Email').val();
    var message = $('#Message').val();
    if(name.trim() == '' ){
        alert('Please enter your name.');
        $('#Name').focus();
        return false;
    }else if(email.trim() == '' ){
        alert('Please enter your email.');
        $('#Email').focus();
        return false;
    }else if(email.trim() != '' && !reg.test(email)){
        alert('Please enter valid email.');
        $('#Email').focus();
        return false;
    }else if(message.trim() == '' ){
        alert('Please enter your message.');
        $('#Message').focus();
        return false;
    }else{
        $.ajax({
            type:'POST',
            url:'./scripts/contact.php',
            data:'contactFrmSubmit=1&name='+name+'&email='+email+'&message='+message,
            beforeSend: function () {
                $('.submitBtn').attr("disabled","disabled");
                $('.modal-body').css('opacity', '.5');
            },
            success:function(msg){
                if(msg == 'ok'){
                    $('#inputName').val('');
                    $('#inputEmail').val('');
                    $('#inputMessage').val('');
                    $('.statusMsg').html('<span style="color:green;">Thanks for contacting us, we\'ll get back to you soon.</p>');
                }else{
                    $('.statusMsg').html('<span style="color:red;">Some problem occurred, please try again.</span>');
                }
                $('.submitBtn').removeAttr("disabled");
                $('.modal-body').css('opacity', '');
            }
        });
    }
}
;