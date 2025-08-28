// === Dark Mode Toggle ===
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

// Toggle on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
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

// === Modal Popups ===
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const target = card.getAttribute("data-modal");
    document.getElementById(target).style.display = "block";
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// === Resume Modal ===
const resumeModal = document.getElementById("resumeModal");
const resumeTrigger = document.getElementById("resumePopupTrigger");

if (resumeTrigger && resumeModal) {
  resumeTrigger.addEventListener("click", () => {
    resumeModal.style.display = "block";
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('chatbot-button');
  const chatbotBox = document.getElementById('chatbot-box');
  const closeButton = document.getElementById('close-chatbot');
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');

  toggleButton.onclick = () => chatbotBox.classList.toggle('hidden');
  closeButton.onclick = () => chatbotBox.classList.add('hidden');

  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const msg = input.value.trim();
      if (!msg) return;

      appendMessage('You', msg);
      input.value = '';

      // Dummy response (can be replaced with API call)
      setTimeout(() => {
        appendMessage('Bot', generateReply(msg));
      }, 600);
    }
  });

  function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.textContent = `${sender}: ${text}`;
    div.style.margin = '5px 0';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function generateReply(input) {
    if (input.toLowerCase().includes('nba'))
      return "I love NBA too! I even built a real-time dashboard 😎";
    if (input.toLowerCase().includes('resume'))
      return "You can find my full resume on the Resume page!";
    return "That's awesome! Tell me more?";
  }
});

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Mobile drawer toggle
const navToggle = document.getElementById('navToggle');
const drawer = document.getElementById('drawer');

if (navToggle && drawer){
  navToggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')){
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
    } else {
      drawer.style.maxHeight = '0px';
    }
  });

  // Close on click
  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      drawer.style.maxHeight = '0px';
    });
  });

  // Initialize collapsed
  drawer.style.overflow = 'hidden';
  drawer.style.maxHeight = '0px';
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

hamburger?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


