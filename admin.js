// textUpdater.js

// Función para actualizar el texto en el enlace de términos de servicio
function updateTermsLinkText() {
    const termsLink = document.getElementById('termsLink');
    if (termsLink) {
        termsLink.textContent = 'Novedades:  Ya puedes descargar videos de youtube en Mp3.';
    }
}

// Llama a la función cuando la página se carga completamente
window.onload = function() {
    updateTermsLinkText();
};
