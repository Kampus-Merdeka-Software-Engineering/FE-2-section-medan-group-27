const keywordInput = document.getElementById('searchInput');
const keyword = encodeURIComponent(keywordInput.value.trim());

// Beranda //
function renderData(data) {
    const beritaElement = document.getElementById('berita');
    beritaElement.innerHTML = ""; // Membersihkan isi sebelum menambahkan yang baru

    data.forEach(item => {
        beritaElement.innerHTML += `<div class="A">
            <a href="view/detail_berita.html?id=${item.ID_berita}">
                <img src="${item.Image}" alt="" class="box1"></img>
                <p id="isi">${item.Judul_Berita}</p>
            </a>
        </div>`;
    });
}

// Melakukan fetch berdasarkan keyword jika ada
if (keyword) {
    fetch(`${API_URL}/news?keyword=${keyword}`)
        .then(response => response.json())
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.error({ error });
        });
} else {
    // Jika tidak ada keyword, tampilkan semua berita
    fetch(`${API_URL}/news`)
        .then(response => response.json())
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.error({ error });
        });
}


    
// function searchMenu()
// {
//   var input = document.getElementById("searchInput");
//   var filter = input.value.toLocaleLowerCase();
//   var ul = document.getElementById("baru");
//   var div = document.querySelectorAll("berita");
//   console.log(div);
//   for( var i=0; i<div.length; i++){
//     var ahref = document.querySelectorAll("isi")[i];
//     if(ahref.innerHTML.toLocaleLowerCase().includes(filter) > -1){
//       div[i].style.display = "";
//     }
//     else{
//       div[i].style.display = "none";
//     }

//   }
// }

// keyword.addEventListener("input", function() {
//   searchMenu();
// })



