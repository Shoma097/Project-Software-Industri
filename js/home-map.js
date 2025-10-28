// Ganti semua isi 'js/home-map.js' dengan kode ini

(function() {
  document.addEventListener('DOMContentLoaded', function () {
    try {
      // --- KOORDINAT BARU (SESUAI PERMINTAAN ANDA) ---
      
      // Keke Homestay (Tetap sama)
      const kekeHomestayLatLng = [-8.6906, 115.2624];

      // Destinasi Lainnya (Koordinat Baru)
      const destinations = [
        {
          position: [-8.707153, 115.26233], // Sanur Beach (TripExpress)
          title: 'Sanur Beach'
        },
        {
          position: [-8.67131, 115.25956], // Sanur Harbour (Traveling.com)
          title: 'Sanur Harbour'
        },
        {
          position: [-8.6749, 115.2638], // Museum Le Mayeur (TravelFish)
          title: 'Museum Le Mayeur'
        },
        {
          // ICON Mall (Koordinat dari Google Search sebelumnya, cukup akurat untuk alamat tsb)
          position: [-8.68675, 115.26332], 
          title: 'ICON Mall'
        },
        {
          position: [-8.68527, 115.26017], // Sindhu Market (30 Sundays)
          title: 'Sindhu Market'
        },
        {
          position: [-8.70591, 115.25414], // Pura Blanjong (Wikivoyage)
          title: 'Pura Blanjong'
        }
      ];
      
      // --- Inisialisasi Peta ---
      const map = L.map('homepage-map', {
        center: kekeHomestayLatLng,
        zoom: 15,
        scrollWheelZoom: true,
        zoomControl: true 
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // --- Opsi untuk Popup Kustom (Tetap untuk background putih) ---
      const popupOptions = {
        className: 'custom-leaflet-popup'
      };

      // --- Mendefinisikan Ikon Pin (Biru Besar, Merah Kecil) ---
      const homestayIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      const destinationIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [20, 33],
        iconAnchor: [10, 33],
        popupAnchor: [1, -34],
        shadowSize: [33, 33]
      });

      // --- Menambahkan Pin Keke Homestay ---
      const homestayMarker = L.marker(kekeHomestayLatLng, {icon: homestayIcon}).addTo(map);
      
      // PERUBAHAN DI SINI: Popup HANYA NAMA
      homestayMarker.bindPopup('<b>Keke Homestay</b>', popupOptions);

      // --- Menambahkan Pin Destinasi ---
      const bounds = L.latLngBounds([kekeHomestayLatLng]);

      destinations.forEach(location => {
        const marker = L.marker(location.position, {icon: destinationIcon}).addTo(map);
        
        // PERUBAHAN DI SINI: Popup HANYA NAMA
        marker.bindPopup(`<b>${location.title}</b>`, popupOptions);
        
        bounds.extend(location.position);
      });

      // Atur zoom peta agar pas dengan semua pin
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 16
      });

    } catch (e) {
      console.warn('Homepage map failed to initialize', e);
      const mapBlock = document.getElementById('location-map');
      if (mapBlock) mapBlock.style.display = 'none';
    }
  });
})();