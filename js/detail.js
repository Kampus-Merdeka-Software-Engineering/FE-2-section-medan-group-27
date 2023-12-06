const API_URL = 'http://localhost:3000'

//detail berita
function renderDetail(data){
    const beritaElement = document.getElementById('berita')
    console.log(detail)
    console.log(data)
    data.forEach(item => {
        beritaElement.innerHTML += `
        <h1>${item.Judul_berita}</h1>
        <img src=${item.Image} alt=""></img>
        <h3>${item.Author}</h3>
        <h3>${item.Detail_berita}</h3>`
    });
}
fetch(`${API_URL}/news`)
.then(response => response.json())
.then(data => {
    renderDetail(data)
})
.catch(error => {
  console.error({
    error
  })
})
  
