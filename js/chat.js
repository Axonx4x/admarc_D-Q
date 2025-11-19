const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  // Sent message
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "sent");
  msgDiv.innerHTML = `
    <div class="avatar">YO</div>
    <div class="bubble">
      <div class="sender">You</div>
      <div class="text">${message}</div>
      <div class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    </div>
  `;
  chatBox.appendChild(msgDiv);
  chatInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate system/moderator reply
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.innerHTML = `
      <div class="avatar">MO</div>
      <div class="bubble">
        <div class="sender">Moderator</div>
        <div class="text">Noted, thank you for the update.</div>
        <div class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      </div>
    `;
    chatBox.appendChild(reply);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1500);
});
// Hide the notification badge when user enters the chat
document.addEventListener("DOMContentLoaded", () => {
  const forumBadge = document.getElementById("forumBadge");
  if (forumBadge) forumBadge.style.display = "none";
});
