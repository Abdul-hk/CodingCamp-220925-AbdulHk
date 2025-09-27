document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.getElementById("welcome-text");

  if (!welcomeText) {
    console.error("Elemen #welcome-text tidak ditemukan");
    return;
  }

  // Pakai prompt untuk minta nama
  const name = prompt("Please enter your name:");

  if (name) {
    welcomeText.textContent = name;
  } else {
    welcomeText.textContent = "Guest"; // default kalau kosong
  }
});
// Ambil elemen
const form = document.getElementById("message-form");
const resultDiv = document.getElementById("result");

// Event saat submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // biar ga reload

  // Ambil value input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi sederhana
  if (name === "" || email === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  // Tampilkan hasil ke layar
  resultDiv.innerHTML = `
    <h3 class="font-bold mb-2">Your Message:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  resultDiv.classList.remove("hidden");

  // Reset form
  form.reset();
});