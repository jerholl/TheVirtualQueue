function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; border-top: 1px solid #2a2a2a; margin-top: 60px; background: #121212; color: #888; font-family: 'Roboto Slab', serif;">
                <div style="margin-bottom: 20px;">
                    <a href="index.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Home</a>
                    <a href="disney.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Disney</a>
                    <a href="universal.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Universal</a>
                    <a href="about.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">About</a>
                    <a href="privacy.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Privacy</a>
                    <a href="contact.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Contact</a>
                </div>
                <p style="font-size: 0.8rem; margin-bottom: 10px;">&copy; 2026 The Virtual Queue. Fast, condensed theme park news.</p>
                <p style="font-size: 0.7rem; color: #444;">All trademarks are property of their respective owners.</p>
            </div>
        `;
    }
}
loadFooter();