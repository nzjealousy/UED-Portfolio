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
  modalBody.innerHTML = `<h3>${courseName}</h3><p>This course covers essential concepts in ${courseName} including practical activities, assignments, and real-world applications.</p>`;
  modal.style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Animate on scroll
AOS.init();

// Form handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-msg").innerText = "Thank you for reaching out!";
  this.reset();
});
