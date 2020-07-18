function showconfirmation () {
  document.getElementById('confirmation_alert').removeAttribute('style');
  
} 

// does not work since the alert is distroyed -- check to see if it works after finishing submission stuff
function hideconfirmation () {
  document.getElementById('confirmation_alert').style.display = 'none;';
}