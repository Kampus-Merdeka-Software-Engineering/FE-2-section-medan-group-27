const API_URL = 'http://localhost:3000';

// Detail berita
function renderDetail(item) {
  console.log(item); // Tambahkan ini untuk melihat struktur objek item di konsol peramban
  const beritaElement = document.getElementById('detail');
  beritaElement.innerHTML = `
      <h1>${item.Judul_Berita}</h1>
      <img src="${item.Image}" alt=""></img>
      <h3> Author : ${item.Author}</h3>
      <p>${item.Detail_berita}</p>`;
}


const urlParams = new URLSearchParams(window.location.search);
const idBerita = urlParams.get('id');

if (idBerita) {
    // Fetch berita berdasarkan ID
    fetch(`${API_URL}/news/${idBerita}`)
        .then(response => response.json())
        .then(data => {
            renderDetail(data);
        })
        .catch(error => {
            console.error({
                error
            });
        });
} else {
    console.error('ID Berita tidak ditemukan dalam parameter URL');
}




  
