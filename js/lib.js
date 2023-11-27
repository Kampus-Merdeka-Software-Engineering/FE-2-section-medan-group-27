// menu navbar //
function createmenuID(name){
    let li = document.createElement('li');
    let link = document.createElement('a')
    link.href='#';
    link.textContent= name;
    li.appendChild(link);
    navbar.appendChild(li);
    return li;
}
const navbar = document.querySelector('#navbar');

navbar.appendChild(createmenuID('Apps & OS'));
navbar.appendChild(createmenuID('Internet'));
navbar.appendChild(createmenuID('Gadget'));
navbar.appendChild(createmenuID('Hardware & Software'));
navbar.appendChild(createmenuID('Video & Game'));

// // function loadJS(url) {
// //   let script = document.createElement('script');
// //  script.src = url;
// //    script.async = true;
//     document.body.appendChild(script);
// }
// loadJS('js/lib.js');