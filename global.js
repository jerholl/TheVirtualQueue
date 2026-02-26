function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; border-top: 1px solid #2a2a2a; margin-top: 60px; background: #121212; color: #888;">
                <div style="margin-bottom: 20px;">
                    <a href="/" style="color:#888; text-decoration:none; margin: 0 15px; font-weight:700; font-size: 0.9rem; text-transform: uppercase;">Home</a>
                    <a href="/about" style="color:#888; text-decoration:none; margin: 0 15px; font-weight:700; font-size: 0.9rem; text-transform: uppercase;">About</a>
                    <a href="/privacy" style="color:#888; text-decoration:none; margin: 0 15px; font-weight:700; font-size: 0.9rem; text-transform: uppercase;">Privacy</a>
                    <a href="/contact" style="color:#888; text-decoration:none; margin: 0 15px; font-weight:700; font-size: 0.9rem; text-transform: uppercase;">Contact</a>
                </div>
                <p style="font-size: 0.8rem; line-height: 1.5; max-width: 600px; margin: 0 auto 15px;">
                    The Virtual Queue provides condensed, fluff-free theme park news. <br>
                    &copy; 2026 The Virtual Queue. All rights reserved.
                </p>
                <div style="font-size: 0.7rem; color: #555;">
                    Member of the Theme Park News Network.
                </div>
            </div>
        `;
    }
}
loadFooter();
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