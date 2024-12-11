// // Tes Sekarang Button
// document.getElementById("tesSekarangButton").addEventListener("click", function (event) {
//     // Mencegah aksi default (seperti form submit)
//     event.preventDefault();

//     // Ambil elemen formulir
//     const formSection = document.getElementById("formInformasiPribadi");

//     // Scroll ke elemen formulir
//     formSection.scrollIntoView({ behavior: "smooth" });
// });


// // Validasi dan Simpan Data Biodata
// function validateAndSave() {
//     const nama = document.getElementById('namaLengkap').value;
//     const pekerjaan = document.getElementById('jenisPekerjaan').value;
//     const email = document.getElementById('alamatEmail').value;
//     const usia = document.getElementById('usia').value;
//     const gender = document.getElementById('jenisKelamin').value;

//     if (!nama || !pekerjaan || !email || !usia || !gender) {
//         alert('Semua bidang harus diisi!');
//         return;
//     }

//     saveBioAndProceed();
// }

// function saveBioAndProceed() {
//     const data = {
//         nama: document.getElementById('namaLengkap').value,
//         pekerjaan: document.getElementById('jenisPekerjaan').value,
//         email: document.getElementById('alamatEmail').value,
//         usia: document.getElementById('usia').value,
//         gender: document.getElementById('jenisKelamin').value,
//     };

//     localStorage.setItem('userData', JSON.stringify(data));
//     window.location.href = 'kuis.html'; // Arahkan ke halaman kuis setelah menyimpan data
// }

// // Hitung Skor Kuis
// function calculateScore() {
//     const answers = document.querySelectorAll('input[type="radio"]:checked');
//     let totalScore = 0;

//     answers.forEach(answer => {
//         totalScore += parseInt(answer.value);
//     });

//     if (answers.length === 0) {
//         alert('Harap isi semua pertanyaan sebelum melanjutkan.');
//         return;
//     }

//     localStorage.setItem('totalScore', totalScore);
//     window.location.href = 'hasil.html';
// }

// // Tampilkan Data di Halaman Hasil
// function loadUserData() {
//     const userData = JSON.parse(localStorage.getItem('userData'));

//     if (userData) {
//         document.querySelector('[data-namaLengkap]').textContent = userData.nama || '-';
//         document.querySelector('[data-jenisPekerjaan]').textContent = userData.pekerjaan || '-';
//         document.querySelector('[data-alamatEmail]').textContent = userData.email || '-';
//         document.querySelector('[data-usia]').textContent = userData.usia || '-';
//         document.querySelector('[data-jenisKelamin]').textContent = userData.gender || '-';
//     } else {
//         console.error('Data tidak ditemukan.');
//     }
// }

// function displayTotalScore() {
//     const totalScore = parseInt(localStorage.getItem('totalScore')) || ;

//     const scoreElement = document.querySelector("[data-total-skor]");
//     const classificationElement = document.getElementById("classification");
//     const actionElement = document.getElementById("action");

//     if (scoreElement && classificationElement && actionElement) {
//         scoreElement.textContent = totalScore;

//         if (totalScore >= 0 && totalScore <= 52) {
//             classificationElement.textContent = "Rendah";
//             classificationElement.classList.add("text-green-500");
//             actionElement.textContent = "Belum diperlukan adanya tindakan perbaikan.";
//         } else if (totalScore >= 53 && totalScore <= 75) {
//             classificationElement.textContent = "Sedang";
//             classificationElement.classList.add("text-yellow-500");
//             actionElement.textContent = "Mungkin diperlukan tindakan di kemudian hari.";
//         } else if (totalScore >= 76 && totalScore <= 98) {
//             classificationElement.textContent = "Tinggi";
//             classificationElement.classList.add("text-orange-500");
//             actionElement.textContent = "Diperlukan tindakan segera.";
//         } else if (totalScore >= 99 && totalScore <= 120) {
//             classificationElement.textContent = "Sangat Tinggi";
//             classificationElement.classList.add("text-red-500");
//             actionElement.textContent = "Diperlukan tindakan menyeluruh sesegera mungkin.";
//         } else {
//             classificationElement.textContent = "Tidak Valid";
//             classificationElement.classList.add("text-gray-500");
//             actionElement.textContent = "Periksa kembali nilai skor.";
//         }
//     } else {
//         console.error("Elemen tidak ditemukan.");
//     }
// }

// // Cek Data dan Tampilkan Hasil
// function checkAndDisplayResults() {
//     if (!localStorage.getItem('userData') || !localStorage.getItem('totalScore')) {
//         alert('Data tidak ditemukan! Harap isi formulir dan kuisioner terlebih dahulu.');
//         window.location.href = 'index.html';
//     } else {
//         displayUserData();
//         displayTotalScore();
//     }
// }

// // Event Listener untuk Tombol Kuis
// document.getElementById('submitQuiz')?.addEventListener('click', calculateScore);

// // Panggil Fungsi Hasil Saat Halaman Dimuat
// if (window.location.pathname.includes('hasil.html')) {
//     checkAndDisplayResults();
// }
