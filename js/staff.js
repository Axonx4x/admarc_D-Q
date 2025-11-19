const form = document.getElementById("verifyForm");
const resultBox = document.getElementById("verificationResult");
const tokenDisplay = document.getElementById("tokenDisplay");
const citizenName = document.getElementById("citizenName");
const commodityName = document.getElementById("commodityName");
const statusText = document.getElementById("statusText");
const confirmBtn = document.getElementById("confirmCollection");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const token = document.getElementById("tokenInput").value.trim();

  if (!/^ADM\d{6}$/.test(token)) {
    alert("Invalid token format. Must start with ADM followed by 6 digits.");
    return;
  }

  // Simulated verification
  tokenDisplay.textContent = token;
  citizenName.textContent = "Christopher Ng'oma";
  commodityName.textContent = "Maize (50kg)";
  statusText.textContent = "Token Valid – Awaiting Collection";
  statusText.style.color = "#007e33";
  resultBox.classList.remove("hidden");
});

confirmBtn.addEventListener("click", () => {
  statusText.textContent = "Collection Confirmed";
  statusText.style.color = "green";
  alert("Collection has been confirmed and recorded successfully.");
});
