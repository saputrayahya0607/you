window.onload = function() {
  // Posisi acak untuk balon-balon
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach((balloon) => {
      balloon.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
      balloon.style.animationDelay = Math.random() * 6 + 's'; // Penundaan animasi acak
  });

  // Mendapatkan elemen fireworks
  const fireworks = document.getElementById('fireworks');

  // Fungsi untuk meluncurkan kembang api
  function launchFireworks() {
      for (let i = 0; i < 10; i++) {
          const firework = document.createElement('div');
          firework.className = 'firework';
          firework.style.top = Math.random() * 300 + 'px'; // Posisi vertikal acak
          firework.style.left = Math.random() * 300 + 'px'; // Posisi horizontal acak
          firework.style.animationDelay = Math.random() * 2 + 's'; // Penundaan animasi acak
          fireworks.appendChild(firework); // Menambahkan ke elemen fireworks
      }
  }

  // Memulai kembang api setelah 2 detik
  setTimeout(launchFireworks, 2000);

  // Menampilkan nama di layar
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = 'Nur Fitri Fauziyah';
  document.body.appendChild(name); // Menambahkan elemen name ke body
};
