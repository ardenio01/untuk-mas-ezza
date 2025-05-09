function revealContent(id) {
  const content = document.getElementById('content' + id);

  // Toggle: kalau sudah tampil, disembunyikan. Kalau belum, ditampilkan.
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}
