// === Dark Mode Toggle ===
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("dark");
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "light" : "dark");
});

// === Typewriter Effect ===
const typewriter = document.querySelector(".typewriter");
const text = typewriter.textContent;
typewriter.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

type();
