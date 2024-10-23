document.getElementById('form-update-progress').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const cedula = document.getElementById('cedula').value;
  
    try {
      const response = await fetch('/form/update-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cedula })
      });
  
      const data = await response.json();
      document.getElementById('resultado').innerText = data.message;
    } catch (error) {
      console.error('Error al actualizar progreso:', error);
      document.getElementById('resultado').innerText = 'Error al actualizar progreso';
    }
  });