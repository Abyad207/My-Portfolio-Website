/* ========================
   Sidebar Toggle
   ======================== */
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* ========================
   Scroll Spy Navigation
   ======================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ========================
   Typewriter Effect
   ======================== */
const typewriter = document.querySelector(".typewriter");
if (typewriter) {
  const text = typewriter.textContent;
  typewriter.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();
}

/* ========================
   Modals
   ======================== */
const modals = document.querySelectorAll(".modal");
const modalTriggers = document.querySelectorAll("[data-modal]");
const closeBtns = document.querySelectorAll(".close");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const target = document.querySelector(trigger.dataset.modal);
    if (target) target.style.display = "block";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modals.forEach(m => m.style.display = "none");
  }
});



