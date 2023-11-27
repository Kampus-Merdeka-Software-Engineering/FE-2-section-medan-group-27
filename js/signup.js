
//Function sign up

// Inisialisasi variabel
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let form = document.getElementById("signup-form");
// Event listener untuk tombol "Sign Up"
form.addEventListener('submit', (event) => {
    console.log(firstNameInput.value);
  event.preventDefault();
  // if (firstNameInput.value === "") {
  //   alert("Nama depan tidak boleh kosong.");
  //   return;
  // }
  console.log("submit-signup");
});
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


