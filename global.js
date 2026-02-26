// This function finds the <footer> tag and fills it with your links automatically
function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="footer-links" style="text-align:center; padding: 20px;">
                <a href="/privacy-policy" style="margin: 0 10px;">Privacy Policy</a>
                <a href="/terms" style="margin: 0 10px;">Terms of Service</a>
                <a href="/contact" style="margin: 0 10px;">Contact</a>
            </div>
            <p style="text-align:center;">&copy; 2026 The Virtual Queue</p>
        `;
    }
}
loadFooter();