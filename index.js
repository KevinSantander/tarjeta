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