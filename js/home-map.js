// Homepage map with a single non-interactive marker
(function() {
  document.addEventListener('DOMContentLoaded', function () {
    try {

  const homestayLatLng = [-8.690611, 115.262444];

      const map = L.map('homepage-map', {
        center: homestayLatLng,
        zoom: 15,
        scrollWheelZoom: true,
        zoomControl: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

  // Add a marker that shows an address popup when clicked
  const marker = L.marker(homestayLatLng).addTo(map);
  marker.bindPopup('<strong>Keke Homestay</strong><br>xxxxx');

      // Slightly adjust view to make the marker clearly visible
      map.setView(homestayLatLng, 15);
    } catch (e) {
      console.warn('Homepage map failed to initialize', e);
    }
  });
})();

