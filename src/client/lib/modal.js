export class Modal {
  constructor() {
    this.initModals();
  }

  toggleModal(isActive, modalId = null) {
    const body = document.body;
    const modal = modalId ? document.getElementById(modalId) : null;
    if (modal) {
      modal.classList.toggle('is-act', isActive);
    }
    this.overlay.classList.toggle('is-act', isActive);
    body.classList.toggle('is-act', isActive);
    if (!isActive) {
      this.modals.forEach((elm) => elm.classList.remove('is-act'));
    }
  }

  initModals() {
    this.modals = document.querySelectorAll('.js-modal_body');
    this.overlay = document.querySelector('.js-modal_overlay');
    if (!this.overlay) return;
    document.querySelectorAll('.js-modal_trg').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.toggleModal(true, id);
      });
    });

    this.overlay.addEventListener('click', () => {
      this.toggleModal(false);
    });

    document.querySelectorAll('.js-modal_close').forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        this.toggleModal(false);
      });
    });
  }
}
