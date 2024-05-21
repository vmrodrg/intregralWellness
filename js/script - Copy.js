// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     const formData = {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//     };

//     fetch('https://example.com/submit_form', { // Reemplaza esta URL con la URL real de tu API o servicio de terceros
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('responseMessage').textContent = 'Mensaje enviado con éxito.';
//         document.getElementById('contactForm').reset();
//     })
//     .catch(error => {
//         document.getElementById('responseMessage').textContent = 'Hubo un problema al enviar el mensaje.';
//     });
// });


const formulario = document.getElementById("contactForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const telefono = document.getElementById("telefono");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regTelefono = /^\d{10}$/;

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        errorNombre.innerHTML = "Por favor, ingresa tu nombre";
        valido = false;
      }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        return console.log("Formato email no válido");
    }
    if (!regTelefono.test(telefono.value) || !telefono.value.trim()) {
        return console.log("Formato telefono no válido");
    }

    console.log("Formulario enviado con éxito");
});