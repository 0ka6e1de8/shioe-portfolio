import { Modal } from './lib/modal';
import { TabSwitch } from './lib/tabSwitch';
import { Smooth } from './lib/smooth';
import { HeaderSize } from './lib/headerSize';
import { InfiniteSlider } from './lib/infiniteSlider';
import { Loading } from './lib/loading';

document.addEventListener('DOMContentLoaded', () => {
  new Modal();
  new TabSwitch();
  new Smooth();
  new HeaderSize();
  new InfiniteSlider();
  new Loading();
});
