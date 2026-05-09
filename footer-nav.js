// Site Navigation Script
// This file populates both the header and footer navigation so a single change
// in this file updates every page that includes it.
document.addEventListener('DOMContentLoaded', function() {
  console.log('Navigation script loaded');
  const navHtml = `
      <nav>
        <ul>
          <li><a href="index.htm">Home</a></li>
          <li><a href="rule.html">Rules</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="voting.html">Voting</a></li>
        </ul>
      </nav>
    `;

  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = navHtml;
    console.log('Header navigation inserted');
  } else {
    console.log('Header element not found');
  }

  const footerNav = document.getElementById('footer-nav');
  if (footerNav) {
    footerNav.innerHTML = navHtml;
    console.log('Footer navigation inserted');
  } else {
    console.log('Footer element not found');
  }
});