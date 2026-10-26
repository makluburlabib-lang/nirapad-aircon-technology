(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const form = document.getElementById('enquiry-form');
  const note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `Service enquiry from ${String(data.get('name')).trim()}`;
      const body = [
        'NIRAPAD AIRCONDITION AND TECHNOLOGY — Service Enquiry',
        '',
        `Name: ${String(data.get('name')).trim()}`,
        `Phone or email: ${String(data.get('contact')).trim()}`,
        `Service needed: ${String(data.get('service')).trim()}`,
        `Details: ${String(data.get('message') || '').trim() || 'Not provided'}`
      ].join('\n');
      if (note) note.textContent = 'Opening your email app. Please review the message and press Send to submit it.';
      window.location.href = `mailto:nirapadservice18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
