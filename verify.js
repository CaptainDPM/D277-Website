function validateForm() {
  let email1 = document.getElementById("email1");
  let email2 = document.getElementById("email2");
  if (email1 !== email2) {
    alert("Emails do not match.");
    return false;
  }
}