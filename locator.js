// Inicializa o mapa com posição genérica
const map = L.map('map').setView([-15.7942, -47.8822], 4); // Brasília

// Camada de mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap',
}).addTo(map);

// Evento do botão
document.getElementById('btn-localizar').addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Geolocalização não suportada pelo seu navegador.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Centraliza e adiciona marcador
      map.setView([lat, lon], 16);
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup('Você está aqui!')
        .openPopup();
    },
    (error) => {
      alert('Erro ao obter localização: ' + error.message);
    }
  );
});
