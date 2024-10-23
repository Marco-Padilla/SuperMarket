//inicio en el que aparece una imagen antes del contenido
window.addEventListener("load", function () {
  const inicio = document.getElementById("inicio");
  const content = document.getElementById("content");

  // Define un tiempo mínimo de 2 segundos (2000 milisegundos)
  setTimeout(function () {
    // Oculta la pantalla de carga
    inicio.style.display = "none";

    // Muestra el contenido de la página
    content.style.display = "block";
  }, 2000); // 2000 milisegundos = 2 segundos
});

document.querySelectorAll("input[type=number]").forEach(function (input) {
  input.setAttribute(
    "style",
    "-webkit-appearance: none; -moz-appearance: textfield;"
  );
});

document
  .getElementById("form-register-client")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const numero = document.getElementById("numero").value;
    const cedula = document.getElementById("cedula").value;

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: document.getElementById("nombre").value,
          numero: document.getElementById("numero").value,
          cedula: document.getElementById("cedula").value,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`); // Lanza un error si el status no es 200-299
      }

      const data = await response.json(); // Solo se ejecuta si la respuesta es OK
      document.getElementById("resultado").innerText = data.message;
    } catch (error) {
      console.error("Error al registrar:", error);
      document.getElementById("resultado").innerText = "Error al registrar";
    }
  });
