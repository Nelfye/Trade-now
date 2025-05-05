document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('search-input').value.toLowerCase();
  if (query.includes('entity')) {
    window.location.href = 'vehicules/entityxf/index.html';
  } else if (query.includes('bati')) {
    window.location.href = 'vehicules/bati801/index.html';
  } else if (query.includes('zentorno')) {
    window.location.href = 'vehicules/zentorno/index.html';
  } else {
    alert('Véhicule non trouvé.');
  }
});
