// textUpdater.js

// Función para actualizar el texto en el enlace de términos de servicio
function updateTermsLinkText() {
    const termsLink = document.getElementById('termsLink');
    if (termsLink) {
        termsLink.textContent = 'Al utilizar nuestro servicio, aceptas nuestros terminos y condiciones.';
    }
}

// Llama a la función cuando la página se carga completamente
window.onload = function() {
    updateTermsLinkText();
};
