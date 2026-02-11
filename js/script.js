// Compliments array
const compliments = [
    "You are amazing! 💖",
    "Your smile lights up the world! 😍",
    "You are loved more than you know! 💌",
    "You make life beautiful! 🌹",
    "You are a true star! ⭐"
];

// Generate random compliment
function generateCompliment() {
    const msg = compliments[Math.floor(Math.random() * compliments.length)];
    alert(msg);
}

// Love letter form
function showLetterForm() { document.getElementById('letterForm').classList.remove('hidden'); }
function hideLetterForm() { document.getElementById('letterForm').classList.add('hidden'); }
function generateLetter() {
    const from = document.getElementById('fromName').value;
    const to = document.getElementById('toName').value;
    const msg = document.getElementById('letterMessage').value;
    if(!from||!to||!msg){ alert("Please fill all fields!"); return; }
    const letter = `💌 Dear ${to},\n\n${msg}\n\nWith love, ${from} 💖`;
    document.getElementById('letterOutput').innerText = letter;
}

// Floating hearts
function spawnHeart(x, y) {
    const heart = document.createElement('img');
    heart.src = 'images/hearts.gif';
    heart.className = 'floating-heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.width = 40 + Math.random()*20 + 'px';
    document.getElementById('floating-hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// Click to spawn heart
document.addEventListener('click', e => { spawnHeart(e.clientX-25, e.clientY-25); });

// Device tilt support
if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', e=>{
        const x = window.innerWidth/2 + e.gamma*10;
        const y = window.innerHeight/2 + e.beta*5;
        spawnHeart(x, y);
    });
}
