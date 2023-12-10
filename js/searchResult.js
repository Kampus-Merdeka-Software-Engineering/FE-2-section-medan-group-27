function renderSearch(data) {
  const searchContainer = document.getElementById('show')
  console.log(cari)
  console.log(data)
  // Kosongkan konten sebelum menambahkan data baru
  searchContainer.innerHTML = "";
  data.forEach(item => {
    searchContainer.innerHTML += `
      <div class="A">
        <a href="view/detail_berita.html?id=${item.ID_berita}">
          <img src=${item.Image} alt="" class="box1" ></img>
          <p>${item.Judul_Berita}</p>
        </a>
      </div>`;
  });
}


// Ambil nilai keyword dari parameter rute
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('keyword');

// Jika keyword tidak kosong, lakukan fetch
if (keyword) {
  fetch(`${API_URL}/search/${keyword}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderSearch(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
