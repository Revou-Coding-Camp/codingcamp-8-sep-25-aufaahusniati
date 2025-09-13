document.addEventListener("DOMContentLoaded", function () {
  const userName = prompt("Please enter your name:", "Guest");

  const nameSpan = document.getElementById("name-span");
  if (nameSpan && userName) {
    nameSpan.textContent = userName;
  } else if (nameSpan) {
    nameSpan.textContent = "Guest";
  }

  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  const messageForm = document.getElementById("message-form");
  const modal = document.getElementById("preview-modal");
  const closeModalBtn = document.getElementById("close-modal");

  const outputNama = document.getElementById("output-nama");
  const outputTanggalLahir = document.getElementById("output-tanggal-lahir");
  const outputJenisKelamin = document.getElementById("output-jenis-kelamin");
  const outputPesan = document.getElementById("output-pesan");

  function showModal() {
    modal.classList.remove("hidden");
  }

  function hideModal() {
    modal.classList.add("hidden");
  }

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const jenisKelaminInput = document.querySelector(
      'input[name="jenis-kelamin"]:checked'
    );
    const pesan = document.getElementById("pesan").value;
    const jenisKelamin = jenisKelaminInput ? jenisKelaminInput.value : "";

    outputNama.textContent = nama;
    outputTanggalLahir.textContent = tanggalLahir;
    outputJenisKelamin.textContent = jenisKelamin;
    outputPesan.textContent = pesan;

    showModal();
    messageForm.reset();
  });

  closeModalBtn.addEventListener("click", hideModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      hideModal();
    }
  });
});
