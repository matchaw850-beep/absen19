// PIN contoh. Ubah angka ini jika rapat memakai PIN lain.
const PIN_ABSENSI = "1234";

const namaInput = document.getElementById("nama");
const jabatanInput = document.getElementById("jabatan");
const submitButton = document.getElementById("submitButton");
const formStatus = document.getElementById("formStatus");
const attendanceForm = document.getElementById("attendanceForm");

const todayDate = document.getElementById("todayDate");

if (todayDate) {
  const now = new Date();
  todayDate.textContent = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).toUpperCase();
}

// Minta PIN ketika halaman dibuka.
const pin = prompt("Masukkan kode PIN absensi:");
const pinBenar = pin === PIN_ABSENSI;

if (pinBenar) {
  namaInput.disabled = false;
  jabatanInput.disabled = false;
  submitButton.disabled = false;
  formStatus.textContent = "PIN benar. Silakan isi data kehadiran kamu.";
} else {
  formStatus.textContent = "PIN salah atau dibatalkan. Muat ulang halaman untuk mencoba lagi.";
}

attendanceForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!pinBenar) {
    alert("PIN salah. Form absensi tidak dapat digunakan.");
    return;
  }

  const nama = namaInput.value.trim();
  const jabatan = jabatanInput.value;

  if (nama === "" || jabatan === "") {
    alert("Lengkapi nama dan jabatan terlebih dahulu.");
    return;
  } 