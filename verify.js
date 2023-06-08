function validateForm() {
  let email1 = document.getElementById("email1");
  let email2 = document.getElementById("email2");
  let emailError = document.getElementById("emailError");
  
    if (email1.value !== email2.value) {
      emailError.textContent = "Email addresses do not match.";
      emailError.style.color = "red";
    }
    e.preventdefault();
    
  console.log("Emails do not match.")
}