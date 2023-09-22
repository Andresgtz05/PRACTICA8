function initMap() {
    var mapOptions = {
        center: { lat: 12.635335, lng: -87.081678 }, // Coordenadas de tu ubicación
        zoom: 15, // Nivel de zoom
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}