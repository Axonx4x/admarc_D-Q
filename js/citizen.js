// Selectors
const modal = document.getElementById("purchaseModal");
const closeBtn = document.querySelector(".close-btn");
const buyButtons = document.querySelectorAll(".buy-btn");
const purchaseForm = document.getElementById("purchaseForm");
const confirmationBox = document.getElementById("confirmationBox");
const tokenDisplay = document.getElementById("tokenCode");
const collectionTime = document.getElementById("collectionTime");
const closeConfirmation = document.getElementById("closeConfirmation");

let selectedItem = "";

// Open modal
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedItem = btn.getAttribute("data-item");
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Validation and submission
purchaseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("citizenName").value.trim();
  const id = document.getElementById("nationalId").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value);
  const payment = document.getElementById("paymentMode").value;

  // Validate fields
  if (name.length < 3) {
    alert("Please enter a valid full name.");
    return;
  }
  if (!/^[0-9]{12}$/.test(id)) {
    alert("National ID must be exactly 12 digits.");
    return;
  }
  if (quantity < 1) {
    alert("Quantity must be at least 1.");
    return;
  }
  if (!payment) {
    alert("Please select a payment mode.");
    return;
  }

  // Simulate token generation
  const token = "ADM" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const time = new Date(now.getTime() + 60 * 60 * 1000); // +1 hour
  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  tokenDisplay.textContent = token;
  collectionTime.textContent = formattedTime;

  modal.style.display = "none";
  confirmationBox.style.display = "block";

  // Reset form
  purchaseForm.reset();
});

// Close confirmation box
closeConfirmation.addEventListener("click", () => {
  confirmationBox.style.display = "none";
});
