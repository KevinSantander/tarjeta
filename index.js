let texto = document.getElementById('texto');
let url = document.getElementById('url');
let areatext = document.getElementById('areatext');
let btn = document.getElementById('btn');

btn.addEventListener('click' , ()=> {
  let textoValue = texto.value;
  let urlValue = url.value;
  let areaTextValue = areatext.value;

  document.getElementById('card-title').innerHTML = textoValue;
  document.getElementById('card-img-top').src = urlValue;
  document.getElementById('card-text').innerHTML = areaTextValue;
  
 

  console.log();

});

/*
let count = document.getElementById('div').children.length;
console.log(count); //element.children, encuentra los elementos hijos

let fahter = document.getElementById('p2').parentElement.id;
console.log(fahter); //element.parentElement, encuentra el elemento padre.


let prevBro = document.getElementById('p2').previousElementSibling.innerText;
console.log(prevBro); //element.previousElementSibling, encuentra el hermano anterior.

let nextBro = document.getElementById('p2').nextElementSibling.innerText;
console.log(nextBro); //element.nextElementSibling, encuentra el siguiente hermano.

let centBro = document.getElementById('p1').nextElementSibling.innerText;
console.log(centBro);

//Retorna un nodo
let primerParr = document.querySelector(".p1");
console.log(primerParr);

let segunParr = document.getElementById('p2');
console.log(segunParr);*/
