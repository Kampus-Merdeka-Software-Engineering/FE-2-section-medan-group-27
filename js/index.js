//Beranda//
function renderData(data){
  const beritaElement = document.getElementById('berita')
  console.log(baru)
  console.log(data)
  data.forEach(item => {
      beritaElement.innerHTML += `<div class="A">
       <a href="view/detail_berita.html?id=${item.ID_berita}">
          <img src=${item.Image} alt="" class="box1" ></img>
          <p>${item.Judul_Berita}</p>
      </a>
  </div>`
  });

}

fetch(`${API_URL}/news`)
  .then(response => response.json())
  .then(data => {
      renderData(data)
  })
  .catch(error => {
    console.error({
      error
    })
  })




