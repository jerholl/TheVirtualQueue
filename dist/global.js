console.log("Global JS is loaded!"); 

function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; border-top: 1px solid #2a2a2a; margin-top: 60px; background: #121212; color: #888; font-family: 'Roboto Slab', serif;">
                
                <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                    <a href="https://instagram.com/thevirtualqueue" target="_blank" style="color:#888;"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>
                    <a href="https://facebook.com/thevirtualqueue" target="_blank" style="color:#888;"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                    <a href="https://youtube.com/@thevirtualqueue" target="_blank" style="color:#888;"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg></a>
                    <a href="https://bsky.app/profile/thevirtualqueue.bsky.social" target="_blank" style="color:#888;"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg></a>
                </div>

                <div style="margin-bottom: 20px;">
                    <a href="/index.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Home</a>
                    <a href="/disney.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Disney</a>
                    <a href="/universal.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Universal</a>
                    <a href="/about.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">About</a>
                    <a href="/contact.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Contact</a>
                    <a href="/legal.html" style="color:#888; text-decoration:none; margin: 0 10px; font-weight:700; font-size: 0.85rem; text-transform: uppercase;">Privacy & Terms</a>
                </div>

                <p style="font-size: 0.8rem; margin-bottom: 10px;">&copy; 2026 The Virtual Queue. All rights reserved.</p>
            </div>
        `;
    }
}
loadFooter();