// Progress Bar
let progress = 40;
function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    document.getElementById("progressFill").style.width = progress + "%";
  } else {
    alert("🎉 You've completed all lessons!");
  }
}

// Modal
function showDetails(course) {
  document.getElementById("courseModal").style.display = "flex";
  document.getElementById("modalTitle").innerText = course;
}
function closeModal() {
  document.getElementById("courseModal").style.display = "none";
}

// Dark/Light Mode Toggle
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
