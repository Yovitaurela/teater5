// Simulasi login (dapat diganti dengan proses login sebenarnya)
document.getElementById('login-btn').addEventListener('click', function() {
    // Cek apakah user sudah login
    const isLoggedIn = true; // Ubah ini dengan logika autentikasi yang sesuai
  
    if (isLoggedIn) {
      // Ganti tombol 'Login' menjadi gambar user
      const loginBtn = document.getElementById('login-btn');
      loginBtn.innerHTML = '<img src="user-icon.png" alt="User">';
    }
  });
  