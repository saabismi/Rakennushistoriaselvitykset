var map = L.map('map').setView([60.185, 24.83], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name && feature.properties.address && feature.properties.rhs) {
        layer.bindPopup(
            '<strong>' + feature.properties.name + '</strong><br>' +
            feature.properties.address + '<br>' +
            '<a href="' + feature.properties.rhs + '" target="_blank">Rakennushistoriaselvitys</a>' + '<br>' +
            '<a href="https://web.archive.org/' + feature.properties.rhs + '" target="_blank">Rakennushistoriaselvitys (arkistoitu)</a>'
        );
    }
}

L.geoJSON(rakennushistoria, {onEachFeature: onEachFeature}).addTo(map); // Add GeoJSON layer

/*
// A button for getting coordinates visible by clicking on the map
function enableAdminmode() {
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Tämä pisteen WGS84-koordinaatit: " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}
*/