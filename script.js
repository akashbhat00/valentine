function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    alert("Yay! I love you! ❤️ Let's spend forever together.");
    // You could also redirect to a video or show confetti here
}
