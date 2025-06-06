export class Loading {
  constructor() {
    const el = document.getElementById('js-loading');

    window.addEventListener('load', () => {
      setTimeout(() => {
        el.classList.add('is-hidden');
      }, 3000);
    });
  }
}
