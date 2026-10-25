const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeButton = lightbox?.querySelector('.lightbox-close');

if (lightbox && lightboxImage) {
  document.querySelectorAll('.gallery a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const thumbnail = link.querySelector('img');
      lightboxImage.src = link.href;
      lightboxImage.alt = thumbnail?.alt || 'Expanded photo of Sensei Kubo';

      lightbox.showModal();
    });
  });

  closeButton?.addEventListener('click', () => lightbox.close());

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
  });
}