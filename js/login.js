document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const roleSelect = document.getElementById("role");
  const emailField = document.getElementById("emailField");
  const idField = document.getElementById("idField");

  // Toggle inputs depending on role
  roleSelect.addEventListener("change", () => {
    emailField.classList.add("hidden");
    idField.classList.add("hidden");
    if (["admin", "staff", "committee"].includes(roleSelect.value)) {
      emailField.classList.remove("hidden");
    } else if (roleSelect.value === "citizen") {
      idField.classList.remove("hidden");
    }
  });

  // Handle login
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const role = roleSelect.value;
    const email = document.getElementById("email").value.trim();
    const nationalId = document.getElementById("nationalId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = role === "citizen"
      ? { nationalId, password }
      : { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Login failed. Check your credentials.");
        return;
      }

      // Save token and role to localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userRole", data.role);

      // Redirect based on role
      switch (data.role) {
        case "admin":
          window.location.href = "admin_dashboard.html";
          break;
        case "staff":
          window.location.href = "staff_dashboard.html";
          break;
        case "committee":
          window.location.href = "committee_dashboard.html";
          break;
        case "citizen":
          window.location.href = "citizen_home.html";
          break;
        default:
          alert("Unknown user role.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to the server. Ensure it’s running.");
    }
  });
});
