function validateForm() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Regex Patterns
  let phonePattern = /^[0-9]{10}$/;
  let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;

  // Empty field check
  if (!username || !email || !phone || !password || !confirmPassword) {
    errorMsg.textContent = "⚠️ All fields are required.";
    return false;
  }

  // Phone validation
  if (!phonePattern.test(phone)) {
    errorMsg.textContent = "⚠️ Phone number must be 10 digits only.";
    return false;
  }

  // Password validation
  if (!passwordPattern.test(password)) {
    errorMsg.textContent = "⚠️ Password must have at least 7 chars, one uppercase, one number & one special character (&,$,#,@).";
    return false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    errorMsg.textContent = "⚠️ Passwords do not match.";
    return false;
  }

  // Email validation
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠️ Invalid email format.";
    return false;
  }

  // Success
  alert("✅ Registration Successful!");
  errorMsg.textContent = "";
  return true;
}
