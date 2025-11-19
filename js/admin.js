// Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
  const stockChartCtx = document.getElementById("stockChart");
  const tokenChartCtx = document.getElementById("tokenChart");

  // === Stock Distribution Chart ===
  new Chart(stockChartCtx, {
    type: "bar",
    data: {
      labels: ["Livingstonia", "Rumphi", "Mzuzu", "Nkhatabay", "Karonga"],
      datasets: [{
        label: "Stock (Bags)",
        data: [250, 310, 190, 270, 350],
        backgroundColor: [
          "#007e33",
          "#00a152",
          "#26c281",
          "#2bb673",
          "#1e8449"
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Stock Distribution by Depot",
          color: "#007e33",
          font: { size: 16, weight: "bold" }
        }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: "#333" } },
        x: { ticks: { color: "#333" } }
      }
    }
  });

  // === Token Activity Chart ===
  new Chart(tokenChartCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Tokens Issued",
        data: [500, 700, 850, 900, 780, 620, 880],
        borderColor: "#00a152",
        backgroundColor: "rgba(0, 161, 82, 0.1)",
        fill: true,
        tension: 0.3,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: {
          display: true,
          text: "Weekly Token Issuance Trend",
          color: "#007e33",
          font: { size: 16, weight: "bold" }
        }
      },
      scales: {
        y: { beginAtZero: true, ticks: { color: "#333" } },
        x: { ticks: { color: "#333" } }
      }
    }
  });
});
// ===== System Alert Toast Notifications =====
function showNotification(message, type = "success") {
  const container = document.getElementById("notification-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (type === "warning") toast.classList.add("warning");
  else if (type === "error") toast.classList.add("error");

  toast.textContent = message;
  container.appendChild(toast);

  // Auto-remove after 5 seconds
  setTimeout(() => toast.remove(), 5000);
}

// Example alerts (you can trigger these dynamically later)
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => showNotification("Low Stock Alert: Rumphi Depot is below 20 bags!", "warning"), 1000);
  setTimeout(() => showNotification("System Backup Completed Successfully"), 3500);
});
// ===== User Search =====
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchUser");
  const rows = document.querySelectorAll(".user-table tbody tr");

  if (searchBox) {
    searchBox.addEventListener("keyup", () => {
      const term = searchBox.value.toLowerCase();
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? "" : "none";
      });
    });
  }
});
