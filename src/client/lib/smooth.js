import gsap, { Power2 } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { HeaderSize } from './headerSize';
gsap.registerPlugin(ScrollToPlugin);

/**
 * アンカーリンクをなめらかにスクロール。
 * ページ読み込み時にハッシュがついている時、そのIDのタグがあれば同じくスクロール
 */
export class Smooth {
  constructor() {
    const hash = location.hash;
    const header = new HeaderSize();
    if (hash) {
      const hashTarget = document.querySelector(hash);
      if (hashTarget !== null) {
        gsap.to(window, {
          duration: 1,
          ease: Power2.easeInOut,
          scrollTo: {
            y: hashTarget,
            offsetY: header.size,
          },
        });
      }
    }

    this.smoothScrollTriggers = [...document.querySelectorAll('a[href^="#"]')];

    if (this.smoothScrollTriggers.length === 0) return;

    this.smoothScrollTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          ease: Power2.easeInOut,
          scrollTo: {
            y: trigger.getAttribute('href'),
            offsetY: header.size,
          },
        });
      });
    });
  }
}
