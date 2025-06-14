import { Modal } from './lib/modal';
import { TabSwitch } from './lib/tabSwitch';
import { Smooth } from './lib/smooth';
import { HeaderSize } from './lib/headerSize';
import { InfiniteSlider } from './lib/infiniteSlider';
import { TextSplit } from './lib/textSplit';
import { Loading } from './lib/loading';
import { ScrollAnimation } from './lib/scrollAnimation';

document.addEventListener('DOMContentLoaded', () => {
  new Modal();
  new TabSwitch();
  new Smooth();
  new HeaderSize();
  new InfiniteSlider();
  new TextSplit();
  new Loading();
  new ScrollAnimation();
});
