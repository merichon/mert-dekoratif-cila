/* -------------------------------------------------------------
   MERT DEKORATİF CİLA ATÖLYESİ - CIRIKOĞLU
   Website Interaction Script
------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
