const reportForm = document.getElementById("reportForm");
const reportMessage = document.getElementById("reportMessage");
const closeReport = document.getElementById("closeReport");

reportForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const officer = document.getElementById("officerName").value.trim();
  const incident = document.getElementById("incidentType").value;
  const details = document.getElementById("details").value.trim();

  if (officer.length < 3) {
    alert("Please enter a valid officer/staff name.");
    return;
  }

  if (!incident) {
    alert("Please select the type of incident.");
    return;
  }

  if (details.length < 10) {
    alert("Please provide a more detailed description.");
    return;
  }

  // Simulate successful submission
  reportForm.reset();
  reportMessage.style.display = "block";
});

closeReport.addEventListener("click", () => {
  reportMessage.style.display = "none";
});
