function toggleMenu() {
  var x = document.getElementById("navbar");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(" responsive", "");
  }


var navLinks = document.querySelectorAll(".navbar a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var x = document.getElementById("navbar");
    if (x.className.indexOf("responsive") === -1) {
      x.className += " responsive";
    } else {
      x.className = x.className.replace(" responsive", "");
    }
  });
}
}




function initMap() {
  var ubicacion = {lat: -34.397, lng: 150.644}; // Cambia las coordenadas según la ubicación que desees mostrar
  var mapa = new google.maps.Map(document.getElementById('map'), {
    zoom: 8, // Nivel de zoom
    center: ubicacion // Ubicación del centro del mapa
  });
  var marcador = new google.maps.Marker({
    position: ubicacion,
    map: mapa,
    title: 'Mi Ubicación' // Título del marcador (opcional)
  });
}
function validarFormulario() {
  //Obtiene los valores del documento y los convierte en variables de la funcion
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var comentario = document.getElementById("comentario").value;
  var informacion = document.getElementById("informacion").checked;
  //Verifica que tanto nombre como apellido tengan solo letras mayusculas o minusculas
  if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido)) {
    alert("El campo de nombre solo debe contener letras.");
    return false;
    }
  //Verifica que el email incluya un arroba, pero no si hay un dominio despues del mismo
  if (!(email.includes('@')) ) {
    alert("Ingrese una direccion valida");
    return false;
    } 
  // Verifica que el comentario no esté en vacio
  if (comentario.trim() === "") {
    alert("El campo de comentario no puede estar en blanco.");
      return false;
    }
  // Deshabilita el botón de enviar después de hacer clic en él
  document.getElementById("enviar").disabled = true;

  // Muestra mensaje de éxito
    alert("Mensaje enviado con éxito.");

  //Envia el formulario
  return true;
        }
    
