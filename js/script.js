// ---- Quiz ----
function startQuiz() {
    const questions = [
        { q:"What's your ideal date?", a:["Movie night","Picnic","Adventure"] },
        { q:"Favorite romantic color?", a:["Red","Pink","Purple"] },
        { q:"Ideal gift?", a:["Flowers","Chocolate","Jewelry"] }
    ];
    let result="";
    questions.forEach((q,i)=>{
        const answer = prompt(q.q + "\nOptions: "+q.a.join(" / "));
        result += `Q${i+1}: ${answer}\n`;
    });
    alert("Your quiz answers:\n"+result);
}

// ---- Love Letter ----
function showLetterForm() { document.getElementById('letterForm').classList.remove('hidden'); }
function hideLetterForm() { document.getElementById('letterForm').classList.add('hidden'); }
function sendLetter() {
    const from = document.getElementById('fromName').value;
    const to = document.getElementById('toName').value;
    const msg = document.getElementById('letterMessage').value;
    if(!from||!to||!msg){ alert("Please fill all fields!"); return; }
    const letter=`💌 Dear ${to},\n\n${msg}\n\nWith love, ${from} 💖`;
    document.getElementById('letterOutput').innerText=letter;
}

// ---- Floating Hearts ----
function spawnHeart(x, y) {
    const heart = document.createElement('img');
    heart.src = 'images/hearts.gif';
    heart.className = 'floating-heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.width = 40 + Math.random() * 20 + 'px';
    document.getElementById('floating-hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// Click anywhere to spawn hearts
document.addEventListener('click', (e) => {
    spawnHeart(e.clientX - 25, e.clientY - 25);
});

// Device tilt support (optional)
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
        const x = window.innerWidth / 2 + event.gamma * 10;
        const y = window.innerHeight / 2 + event.beta * 5;
        spawnHeart(x, y);
    });
}
