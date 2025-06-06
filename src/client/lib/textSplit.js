export class TextSplit {
  constructor() {
    const el = document.querySelectorAll('.js-split_wrap');
    const elArr = Array.prototype.slice.call(el, 0);
    elArr.forEach((element) => {
      const text = element.textContent;
      let newText = '';
      const result = text.split('');

      for (let i = 0; i < result.length; i++) {
        if (result[i] === '\n') {
          newText += '<br class="u-hidden-sp">';
        }
        newText += '<span class="js-split c-split">' + result[i] + '</span>';
      }
      element.innerHTML = newText;
    });
  }
}
