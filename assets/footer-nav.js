// Footer Navigation Script
document.addEventListener('DOMContentLoaded', function() {
  const footerNav = document.getElementById('footer-nav');
  if (footerNav) {
    footerNav.innerHTML = `
      <nav>
        <ul>
          <li><a href="index.htm">Home</a></li>
          <li><a href="rule.html">Rules</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="voting.html">Voting</a></li>
        </ul>
      </nav>
    `;
  }
});