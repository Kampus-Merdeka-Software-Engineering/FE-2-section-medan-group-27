//Ganti Background
const btn = document.querySelector('.btv');
         
    function random(number) {
        return Math.floor(Math.random() * (number+1));
   }
         
    btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(500)}, ${random(500)}, ${random(500)})`;
    document.body.style.backgroundColor = rndCol;
    });
 




//Komentar
var form = document.getElementById("komentar-form");
var komentarList = document.getElementById("komentar-list");

// Tambahkan event listener ke formulir saat dikirim
form.addEventListener("submit", function(event) {
event.preventDefault(); // Mencegah refresh halaman

// Tangkap nilai input nama dan komentar
var nama = document.getElementById("nama").value;
var email = document.getElementById("email").value;
var komentar = document.getElementById("komentar").value;

// Buat objek FormData untuk mengirim data komentar ke server
var formData = new FormData();
formData.append("nama", nama);
formData.append("email", email);
formData.append("komentar", komentar);

// Kirim data komentar ke server menggunakan fetch API
fetch("../data-json/server.php", {
method: "POST",
body: formData
})
.then(function(response) {
return response.json(); // Mengubah respons server menjadi JSON
})
.then(function(data) {
// Tampilkan komentar yang baru ditambahkan
var komentarBaru = document.createElement("div");
komentarBaru.innerHTML = "<strong>" + data.nama + data.email +":</strong> " + data.komentar + "<hr>";
komentarList.appendChild(komentarBaru);

// Reset nilai input nama dan komentar
form.reset();
})
.catch(function(error) {
console.log(error);
});
});




//search
document.getElementById("tombol-search").addEventListener("click", function() {
  var inputText = document.getElementById("search-dong").value;
  var listItems = document.querySelector("#result-list main");

  for (var i = 0; i < listItems.length; i++){
    var listItem = listItems[i];

    if(listItem.innerHTML.toLowerCase().includes(inputText,toLowerCase())){
      listItem.style.display = "none";

    }
  }
});