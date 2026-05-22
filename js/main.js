// Main JS module — typewriter animation
const phrases = [
  "build LLM-powered RAG chatbots.",
  "train reinforcement learning agents.",
  "turn raw data into decisions.",
  "build deep learning systems.",
  "love solving real-world problems with ML.",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
  const current = phrases[phraseIndex];
  if (!isDeleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 40 : 60);
}

type();
