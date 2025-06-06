import gsap from 'gsap';

export class TabSwitch {
  constructor() {
    this.init();
  }

  init() {
    const tabMenus = document.querySelectorAll('.js-tab_trg');

    // イベント付加
    tabMenus.forEach((tabMenu) => {
      tabMenu.addEventListener('click', this.tabSwitch.bind(this));
    });
  }

  tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;

    // 全ての `.c-tab__menu` の `.c-tab__menu-item` を取得
    const allTabMenus = document.querySelectorAll('.js-tab_trg');
    allTabMenus.forEach((tabItem) => {
      if (tabItem.dataset.tab === tabTargetData) {
        tabItem.classList.add('is-active');
      } else {
        tabItem.classList.remove('is-active');
      }
    });

    // 全ての `.c-tab__content` を取得
    const allTabContents = document.querySelectorAll('.js-tab_content');
    allTabContents.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add('is-show');
      } else {
        tabPanelItem.classList.remove('is-show');
      }
    });
  }
}
