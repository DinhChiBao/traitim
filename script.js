const body = document.body;

// Falling text
for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.className = 'text';
  el.innerText = 'Love Pé Nhung ';
  el.style.left = `${Math.random() * 100}vw`;
  el.style.animationDuration = `${3 + Math.random() * 3}s`;
  el.style.fontSize = `${16 + Math.random() * 14}px`;
  body.appendChild(el);
}

// Floating hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.bottom = `0`;
  heart.style.animationDuration = `${2 + Math.random() * 3}s`;
  heart.style.animationDelay = `${Math.random() * 3}s`;
  body.appendChild(heart);
}

// Meteor rain
const canvas = document.getElementById('meteorCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const meteors = [];
for (let i = 0; i < 100; i++) {
  meteors.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 15 + 10,
    speed: Math.random() * 4 + 4,
    angle: Math.PI / 4
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;

  meteors.forEach(m => {
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(
      m.x - m.length * Math.cos(m.angle),
      m.y - m.length * Math.sin(m.angle)
    );
    ctx.stroke();

    m.x += m.speed;
    m.y += m.speed;

    if (m.x > canvas.width || m.y > canvas.height) {
      m.x = Math.random() * canvas.width;
      m.y = -20;
    }
  });

  requestAnimationFrame(draw);
}

draw();
