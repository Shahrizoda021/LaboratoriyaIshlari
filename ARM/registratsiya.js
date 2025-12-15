// Navigatsiyadagi ro‘yxatdan o‘tish tugmasi
document.getElementById("navRegister").onclick = function(e) {
  e.preventDefault();
  document.getElementById("modal").style.display = "block";
};

// Modalni yopish
document.getElementById("closeModal").onclick = function() {
  document.getElementById("modal").style.display = "none";
};

// Tashqariga bosilganda yopish
window.onclick = function(e) {
  if (e.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};


// Formani tekshirish
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  let error = document.getElementById("error");
  let success = document.getElementById("success");

  error.textContent = "";
  success.textContent = "";

  if (name === "") {
    error.textContent = "Ismni kiriting.";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Email noto‘g‘ri formatda.";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Parol kamida 6 ta belgidan iborat bo‘lishi kerak.";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Parollar mos emas.";
    return;
  }

  success.textContent = "Muvaffaqiyatli ro‘yxatdan o‘tildi!";
});
























