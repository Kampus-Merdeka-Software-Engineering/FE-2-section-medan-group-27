
// ganti warna

  const btn = document.querySelector('.btv');
  console.log(btn);

  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

  btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(500)}, ${random(500)}, ${random(500)})`;
    document.body.style.backgroundColor = rndCol;
  });

  
