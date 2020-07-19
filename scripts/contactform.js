function submitContactForm(){
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