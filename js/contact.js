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
