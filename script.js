
// Sidebar toggle
document.getElementById("hamburger").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
  sidebar.style.flexDirection = "column";
});

// Modal logic
function openModal(courseName) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `<h3>${courseName}</h3><p>This course covers essential concepts in ${courseName}, including activities, assessments, and real-world applications.</p>`;
  modal.style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Animate on scroll
AOS.init();

// UED102 collapsible section
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
