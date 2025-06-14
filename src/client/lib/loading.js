export class Loading {
  constructor() {
    const el = document.getElementById('js-loading');
    if (!el) return;
    const sliders = document.querySelectorAll('.p-index_kv__motif');

    window.addEventListener('load', () => {
      setTimeout(() => {
        el.classList.add('is-hidden');
      }, 3000);
      setTimeout(() => {
        document.querySelector('.p-index_kv__main__en')?.classList.add('is-act');
      }, 3500);
      setTimeout(() => {
        sliders.forEach((elm) => {
          elm.classList.add('is-act');
        });
      }, 4000);
    });
  }
}
