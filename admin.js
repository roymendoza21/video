// nueva interfaz, mejoras en la estabilidad y corrección de errores.

// Función para actualizar e  nose que decir, pero es una nueva actualización. m l texto en el enlace de términos de servicio ACTUALMENTE LA FUNCION NO ESTA DISPONIBLE
function updateTermsLinkText() {
    const termsLink = document.getElementById('termsLink');
    if (termsLink) {
        termsLink.textContent = 'Novedades: Ahora ya puedes descargar videos (nueva actualización  2023 para nosotros, a celebrar jajajaj yopi ypi, new update 2024 de youtube en Mp3.';
    }
}

// Llama a la función cuando la página se carga completamente,la versión actual se está corrigiendo.
window.onload = function() {
    updateTermsLinkText();
};
