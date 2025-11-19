document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullname").value.trim();
    const nid = document.getElementById("nid").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!/^[A-Za-z0-9]{8,12}$/.test(nid)) return alert("Invalid National ID format.");
    if (!/^\+?\d{10,15}$/.test(phone)) return alert("Invalid phone number format.");
    if (password.length < 8) return alert("Password must be at least 8 characters.");
    if (password !== confirmPassword) return alert("Passwords do not match.");

    // Assign a unique queue ID (simulation)
    const queueId = "Q" + Math.floor(100000 + Math.random() * 900000);

    alert(`Registration successful! Your Queue ID is ${queueId}.\nPlease login to continue.`);
    window.location.href = "login.html";
  });
});
