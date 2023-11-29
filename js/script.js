
//Function sign up

// Inisialisasi variabel
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

// Event listener untuk tombol "Sign Up"
form.addEventListener("submit", (event) => {
  // Validasi input
  if (firstNameInput.value === "") {
    alert("Nama depan tidak boleh kosong.");
    event.preventDefault();
    return;
  }
},
  // ...

//   // Kirim data ke server
//   // (Kode ini perlu disesuaikan dengan kebutuhan Anda)
//   fetch("api/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       firstName: firstNameInput.value,
//       lastName: lastNameInput.value,
//       email: emailInput.value,
//       password: passwordInput.value,
//     }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Sukses
//         alert("Pendaftaran berhasil.");

//         // Reset input
//         firstNameInput.value = "";
//         lastNameInput.value = "";
//         emailInput.value = "";
//         passwordInput.value = "";
//       } else {
//         // Gagal
//         alert(response.statusText);
//       }
//     })
//     .catch((error) => {
//       // Error
//       console.error(error);
//     });
// });


// function khusus login 
function validateForm() {
    // Validasi username
    var username = document.getElementById("username").value;
    if (username === "") {
      alert("Username tidak boleh kosong");
      return false;
    }
  
    // Validasi password
    var password = document.getElementById("password").value;
    if (password === "") {
      alert("Password tidak boleh kosong");
      return false;
    }
  
    // Validasi panjang password
    if (password.length < 6) {
      alert("Password harus minimal 6 karakter");
      return false;
    }
  
    // Validasi format email
    var email = document.getElementById("email").value;
    if (!/^\w+@\w+\.\w+$/.test(email)) {
      alert("Email tidak valid");
      return false;
    }
  
    return true;
  },
  
  function checkLogin() {
    // Dapatkan username dan password dari form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Kirim username dan password ke server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      username: username,
      password: password,
    }));
  
    // Tunggu respons dari server
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Selamat anda Berhasil Login")
        window.location.href = "/";
      } else {
        // Login gagal
        alert("Login gagal");
      }
    };
  },
  
  function loadForm() {
    // Dapatkan elemen form
    var form = document.getElementById("form-login");
  
    // Tambahkan efek animasi
    form.classList.add("animated", "fadeIn");
  },
  
  // Event handler
  document.getElementById("form-login").onsubmit = validateForm;
  
  // Tampilan form login
  loadForm();

 const btn = document.querySelector('.btv');
         
          function random(number) {
              return Math.floor(Math.random() * (number+1));
            }
         
            btn.addEventListener('click', () => {
              const rndCol = `rgb(${random(500)}, ${random(500)}, ${random(500)})`;
              document.body.style.backgroundColor = rndCol;
            });
 