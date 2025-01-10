// Mendapatkan elemen-elemen
const transaksiForm = document.getElementById('transaksiForm');
const transaksiTableBody = document.querySelector('.transaksi-table tbody');
const message = document.getElementById('message');

// Menangani pengiriman form
transaksiForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mendapatkan nilai form
    const namaTransaksi = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const jumlah = document.getElementById('jumlah').value;
    const tanggal = document.getElementById('tanggal').value;

    // Validasi form dasar
    if (!namaTransaksi || !kategori || jumlah <= 0 || !tanggal) {
        message.textContent = "Semua bidang harus diisi dengan benar!";
        message.style.color = "red";
        return;
    }

    // Menambahkan data ke tabel transaksi
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${transaksiTableBody.children.length + 1}</td>
        <td>${tanggal}</td>
        <td>${kategori}</td>
        <td>Rp ${parseInt(jumlah).toLocaleString()}</td>
        <td>Sukses</td>
    `;
    transaksiTableBody.appendChild(newRow);

    // Menampilkan pesan sukses
    message.textContent = `Transaksi "${namaTransaksi}" berhasil ditambahkan!`;
    message.style.color = "green";

    // Mengatur ulang form setelah pengiriman
    transaksiForm.reset();
});
