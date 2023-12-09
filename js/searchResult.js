const keyword = document.getElementById('searchInput');

function renderSearch(data) {
  const searchContainer = document.getElementById('search');

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

// document.addEventListener('DOMContentLoaded', function () {
//   const keywordInput = document.getElementById('searchInput');

//   document.getElementById('searchButton').addEventListener('click', function () {
//     const keyword = keywordInput.value.trim();

//     // Rest of your code
//   });
// });


  if (!keyword) {
    // Jika keyword kosong atau hanya terdiri dari spasi
    fetch(`${API_URL}/news?keyword=`)
      .then(response => response.json())
      .then(data => {
        renderSearch(data);
      })
      .catch(error => {
        console.error({
          error
        });
      });
  } else {
    // Jika keyword tidak kosong
    fetch(`${API_URL}/news?keyword=${keyword}`)
      .then(response => response.json())
      .then(data => {
        renderSearch(data);
      })
      .catch(error => {
        console.error({
          error
        });
      });
  }

