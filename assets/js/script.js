function toggleMenu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
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