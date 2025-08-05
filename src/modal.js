// src/modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("leadModal");
  const backdrop = document.getElementById("modalBackdrop");
  const openBtn = document.getElementById("showModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  if (!modal || !backdrop || !openBtn || !closeBtn) {
    console.warn("Modal elements not found");
    return;
  }

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  });

  backdrop.addEventListener("click", () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  });
});
