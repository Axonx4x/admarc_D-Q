document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("adminLoginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    const adminEmail = "admin@admarc.mw";
    const adminPass = "Admin@2025"; // placeholder until backend verification

    if (email === adminEmail && password === adminPass) {
      localStorage.setItem("admarcUser", "admin");
      window.location.href = "admin_dashboard.html";
    } else {
      alert("Invalid admin credentials. Access denied.");
    }
  });
});
