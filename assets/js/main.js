window.addEventListener('load',function(){
  document.getElementById('content').appendChild(crearCampo());
});
function crearCampo(){
  var campo = document.createElement("div");
  campo.setAttribute("class","campo");
  var cancha = document.createElement("div");
  cancha.setAttribute("class","cancha");
  var arcoIzquierdo = document.createElement("div");
  arcoIzquierdo.setAttribute("class",'aLeft');

  var arcoDeerecho = document.createElement("div");
  arcoDeerecho.setAttribute("class",'aRight');

  var circulo = document.createElement("div");
  circulo.setAttribute("class", "circulo");

  var pelota1= document.createElement("div");
  pelota1.setAttribute("class", "pelota");

  var pelota2= document.createElement("div");
  pelota2.setAttribute("class", "pelota");
  pelota2.setAttribute("id", "pelota-cancha");

  var pelota3= document.createElement("div");
  pelota3.setAttribute("class", "pelota");

  arcoIzquierdo.appendChild(pelota1);
  arcoDeerecho.appendChild(pelota3);

  cancha.appendChild(pelota2);
  cancha.appendChild(arcoIzquierdo);
  cancha.appendChild(arcoDeerecho);
  cancha.appendChild(circulo);

  campo.appendChild(cancha);
  return campo;
}
