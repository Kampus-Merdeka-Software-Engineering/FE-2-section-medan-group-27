const myClick = document.querySelector('.btv');
         
    function random(number) {
        return Math.floor(Math.random() * (number+1));
   }
         
    myClick.addEventListener('click', () => {
    const rndCol = `rgb(${random(500)}, ${random(500)}, ${random(500)})`;
    document.body.style.backgroundColor = rndCol;
    });



