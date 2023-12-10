
const API_URL = 'https://kind-erin-scallop-belt.cyclic.app'
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

//contact us
function postContactUs(event){
    event.preventDefault();
    console.log("test");
    // Ambil data dari form
    // const formBox = document.querySelector('.formbox');
    const form = event.target;
    const name = form.querySelector('[name="nama"]').value;
    const email = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;

    // simpan ke dalam object javascript
    const data = {
        name: name,
        email: email,
        message: message
      };

    // post ke BE
        fetch(`http://localhost:3000/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            // Tambahkan log atau tindakan lain untuk menangani kesalahan
        })
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact form").addEventListener("submit", postContactUs);
});





