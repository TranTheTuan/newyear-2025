document.addEventListener('DOMContentLoaded', () => {
  const heartBlock = document.querySelector('.paper.heart');
  const audio = document.getElementById('background-audio');
  const fireworkContainer = document.getElementById('firework-container');

  // Add both click and touchstart event listeners
  heartBlock.addEventListener('click', startEffects);
  heartBlock.addEventListener('touchstart', startEffects, { passive: true });

  function startEffects() {
    // Play audio (ensure it starts only on user interaction)
    if (audio.paused) {
      audio.play().catch((error) => {
        console.error('Audio play blocked:', error);
      });
    }

    // Generate fireworks while the audio is playing
    const interval = setInterval(() => {
      createFirework(fireworkContainer);
    }, 200); // Adjust frequency here (e.g., every 200ms)

    // Stop fireworks when the audio ends
    audio.addEventListener('ended', () => {
      clearInterval(interval);
    });
  }

  // Function to create a single firework
  function createFirework(container) {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Randomize position and animation direction
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const tx = (Math.random() - 0.5) * 400; // Random translation x
    const ty = (Math.random() - 0.5) * 400; // Random translation y

    firework.style.left = `${posX}px`;
    firework.style.top = `${posY}px`;
    firework.style.setProperty('--tx', `${tx}px`);
    firework.style.setProperty('--ty', `${ty}px`);

    container.appendChild(firework);

    // Remove firework after animation ends
    firework.addEventListener('animationend', () => {
      firework.remove();
    });
  }
});
