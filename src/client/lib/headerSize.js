export class HeaderSize {
  static instance = null;
  constructor() {
    if (HeaderSize.instance !== null) {
      return HeaderSize.instance;
    }
    HeaderSize.instance = this;

    this.header = document.getElementById('js-header');
    this.size = 0;
    if (this.header === null) return;
    const html = document.documentElement;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(({ borderBoxSize }) => {
        this.size = borderBoxSize[0].blockSize;
        html.style.setProperty('--header-height', `${this.size}px`);
      });
    });
    resizeObserver.observe(this.header);
  }
}
