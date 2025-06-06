import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
export class InfiniteSlider {
  constructor() {
    const dur = 20000;
    const animation = { duration: dur, easing: (t) => t };
    const sliders = document.querySelectorAll('.js-infinite_slider');

    const initSlider = (slider, animation, rtl) => {
      const slide = new KeenSlider(slider, {
        loop: true,
        renderMode: 'performance',
        drag: false,
        rtl: rtl ? true : false,
        slides: {
          spacing: 0,
          perView: 'auto',
        },
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
      });
    };
    sliders.forEach((slider, i) => {
      if (slider.classList.contains('is-rtl')) {
        initSlider(slider, animation, true);
      } else {
        initSlider(slider, animation);
      }
    });
  }
}
