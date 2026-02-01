function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate the available width and height of the window
    // We subtract the button's own width/height to keep it fully visible
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    // Generate random coordinates within those bounds
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Apply the new position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

function celebrate() {
    // 1. Trigger the Heart Confetti
    // 1. Play the music immediately on click
    const music = document.getElementById('celebrationMusic');
    music.play().catch(error => {
        console.log("Audio playback failed:", error);
    });
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confetti hearts!
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1'],
        shapes: ['circle'] // You can use 'heart' if using a specific custom build, but circles in pink look like petals!
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1'],
        shapes: ['circle']
      });
    }, 250);

    // 2. Change the text on the page smoothly
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1 style="color: #ff4d6d;">I guess the no button was a bit too shy 💖</h1>
        <p style="font-size: 1.5rem;">I love you so much, Musku. <br> Can't wait for our Valentine's Day!</p>
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHk1ZGY5anQyZGg2OTNpbXZ5MXpnOHk1Y3lpOHltM3kxeDB5M2tnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pk9n41p2yA7CFGJg60/giphy.gif" 
                 alt="Celebration GIF" 
                 style="width: 80%; max-width: 300px; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
        </div>
    `;
}