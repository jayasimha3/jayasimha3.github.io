(function() {
  var darkSwitch = document.getElementById("darkSwitch");
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function(event) {
      resetTheme();
    });
    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.removeAttribute("data-theme");
    }
    function resetTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
    }
  }
})();

;!function(){
    var t, e = document.getElementById("darkSwitch");
    if (e) {
        t = null !== localStorage.getItem("darkSwitch") && "dark" === localStorage.getItem("darkSwitch"),
        (e.checked = t)?document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme"),
        e.addEventListener("change", function(t){
            e.checked?(document.body.setAttribute("data-theme", "dark"), localStorage.setItem("darkSwitch", "dark")) :
            (document.body.removeAttribute("data-theme"), localStorage.removeItem("darkSwitch"))
        })
    }
}();
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
;function changeActive () {
    if (window.location.pathname == "/about") {
        document.getElementById("aboutNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/work-experience") {
        document.getElementById("weNavbar").classList.add("active");
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/projects") {
        document.getElementById("projectsNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    } else if (window.location.pathname == "/extracurricular") {
        document.getElementById("extraNavbar").classList.add("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("aboutNavbar").classList.remove("active");
    } else {
        document.getElementById("aboutNavbar").classList.remove("active");
        document.getElementById("weNavbar").classList.remove("active");
        document.getElementById("projectsNavbar").classList.remove("active");
        document.getElementById("extraNavbar").classList.remove("active");
    }
}
;