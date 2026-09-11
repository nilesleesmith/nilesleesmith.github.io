const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeButton = lightbox?.querySelector('.lightbox-close');

if (lightbox && lightboxImage) {
  document.querySelectorAll('.gallery a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      lightboxImage.src = link.href;
      lightbox.showModal();
    });
  });

  closeButton?.addEventListener('click', () => lightbox.close());

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    const recipient = 'niles@simplelogin.com';

    const subject = `Portfolio inquiry from ${name}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailtoUrl =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}
