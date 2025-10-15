// Efek confetti jatuh otomatis
const duration = 10 * 1000;
const end = Date.now() + duration;

(function frame() {
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

// Tombol penyembur confetti
document.getElementById("confettiButton").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { x: 1, y: 1 },
  });
});

// Atasi autoplay browser
document.addEventListener("click", () => {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
});
