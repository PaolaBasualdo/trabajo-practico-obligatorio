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
  const ubicaciones = [
    {
      nombre: "Planta de dióxido de uranio Dioxitek SA, Sitio Córdoba",
      coordenadas: { lat: -31.3772, lng: -64.1878 } 
    },
    {
      nombre: "Nueva Planta de Uranio, Dioxitek SA, Formosa",
      coordenadas: { lat: -26.1823,  lng: -58.1760 }
    },
    {
      nombre: "Ex mina de uranio Sierra Pintada, Mendoza",
      coordenadas: { lat: -34.6506,  lng: -68.5939 }
    },
    {
      nombre: "Reactor CAREM, Buenos Aires",
      coordenadas: { lat: -33.9645,  lng: -59.2074 }
    },
    {
      nombre: "Reactor Multipropósito RA-10, Buenos Aires",
      coordenadas: { lat: -34.8214,  lng: -58.5748  }
    },
    {
      nombre: "Centro Atómico Constituyentes, Buenos Aires",
      coordenadas: { lat:-34.5723,  lng:-58.5118  }
    },
    {
      nombre: "Centro Atómico Ezeiza, Buenos Aires",
      coordenadas: { lat: -34.8214,  lng: -58.5748 }
    },
    {
      nombre: "Ex mina de uranio Huemul, Mendoza",
      coordenadas: { lat: -35.7666,  lng: -69.6617 }
    },
    {
      nombre: "Ex mina de uranio La Estela, San Luis",
      coordenadas: { lat: -32.6179,  lng: -64.9846}
    },
    {
      nombre: "Ex mina de uranio Los Colorados, La Rioja",
      coordenadas: { lat: -29.9748,  lng: -67.0853 }
    },
    {
      nombre: "Ex mina de uranio Tonco-Don Otto, Salta",
      coordenadas: { lat: -25.6125,  lng: -65.9240 }
    },
    {
      nombre: "Ex Complejo Minero Fabril Malargüe, Mendoza",
      coordenadas: { lat: -35.4631, lng: -69.5717  }
    },
    {
      nombre: "Planta de uranio de Pilcaniyeu, Rio Negro",
      coordenadas: { lat: -41.1216,  lng: -70.7267 }
    },
    {
      nombre: "Planta Industrial de Agua Pesada, Neuquen",
      coordenadas: { lat: -39.1009,  lng: -68.5975 }
    },
    {
      nombre: 'Central Nuclear Atucha I',
      coordenadas: { lat: -33.9668,  lng: -59.2072 }
    },
    {
      nombre: 'Central Nuclear Embalse',
      coordenadas: { lat: -32.2321,  lng: -64.4423 }
    },
    {
      nombre: 'Central Nuclear Atucha II',
      coordenadas: { lat: -33.9668,  lng: -59.2072 }
    },
    {
      nombre: 'Perforaciones Exploratorias de Uranio Valcheta, Rio Negro',
      coordenadas: { lat: -40.6860,  lng: -66.1757 }
    },
    {
      nombre: 'Ex Complejo Minero Pichinan, Chubut',
      coordenadas: { lat: -43.71742,  lng: -69.3144 }
    },
    {
      nombre: 'Ex Mina de Uranio Los Gigantes, Cordoba',
      coordenadas: { lat: -31.3948,  lng: -64.7803 }
    },
  ];

  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.0751,  lng: -64.0539 }, 
    zoom: 4.5
  });

  

  // Crea marcadores para cada ubicación y agrégalos al mapa
  ubicaciones.forEach((ubicacion) => {
    new google.maps.Marker({
      position: ubicacion.coordenadas,
      map: map,
      title: ubicacion.nombre,
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,  
        fillColor: 'yellow',
        fillOpacity: 1,    
        scale: 3,         
      }
      
    });
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
    
