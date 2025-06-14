// 使用方法
// <div class="js-anim_elm" data-margin="-10%">
// 現在デフォルトの発火位置は-25%になっていますが、data-marginを指定すると、その要素はその位置で発火します。
// data-marginを指定しないと、デフォルトのmarginの位置で発火します。
// 例）
// <div class="js-anim_elm" data-margin="-10%"> -> -10%
// <div class="js-anim_elm"> -> -25%
// <div class="js-anim_elm" data-margin=""> -> -25%
// <div class="js-anim_elm" data-margin="亜wgなw"> -> -25%

/**
 * Intersection Observer を使ったインビューの検知
 */
export class ScrollAnimation {
  constructor() {
    this.boxes = [...document.getElementsByClassName('js-anim_elm')]
    if (this.boxes.length === 0) return
    this.defaultMargin = '-25%' // ここでデフォルトを書き換え
    this.keys = []
    this.elements = {}

    this.boxes.forEach((box) => {
      let key = box.getAttribute('data-margin')
      if (key !== null && key !== '' && key.match(/-*[0-9]*%/)) {
        if (key.replace('%', '') - 0 < -50) {
          key = '-50%'
          box.setAttribute('data-margin', key)
        }
        if (this.keys.indexOf(key) == -1) {
          this.keys.push(key)
          this.elements[key] = []
        }
        this.elements[key].push(box)
      } else {
        if (this.keys.indexOf(this.defaultMargin) == -1) {
          this.keys.push(this.defaultMargin)
          this.elements[this.defaultMargin] = []
        }
        this.elements[this.defaultMargin].push(box)
      }
    })

    this.keys.forEach((key) => {
      const observer = new IntersectionObserver(this.doWhenIntersect.bind(this), { root: null, rootMargin: key + ' 0px', threshold: 0 })
      this.elements[key].forEach((element) => {
        observer.observe(element)
      })
    })
  }
  doWhenIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-act')
      }
    })
  }
}
