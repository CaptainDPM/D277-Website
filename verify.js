function emailMatch() {
  var email1 = document.getElementById("email1").value
  var email2 = document.getElementById("email2").value

  if (email1 === email2) {
    prompt("Emails match.");
  } else {
    prompt("Emails do not match.");
  }
}