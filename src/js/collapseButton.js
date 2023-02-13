export default class CollapseButton {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static markup(buttonContent, collapsibleContent) {
    return `
        <button class="collapse-button" type="button">${buttonContent}</button>
        <div class="collapse">
          <div class="collapse__body">
            ${collapsibleContent}
          </div>
        </div>
      `;
  }

  static get collapseButtonSelector() {
    return '.collapse-button';
  }

  static get collapseSelector() {
    return '.collapse';
  }

  bindToDOM() {
    const { buttonContent, collapsibleContent } = this.parentEl.dataset;

    this.parentEl.innerHTML = this.constructor.markup(
      buttonContent,
      collapsibleContent,
    );

    const collapseButton = this.parentEl.querySelector(
      this.constructor.collapseButtonSelector,
    );
    const collapse = this.parentEl.querySelector(
      this.constructor.collapseSelector,
    );

    const collapseHeight = collapse.clientHeight;
    collapse.style.maxHeight = '0px';

    collapseButton.addEventListener('click', () => this.constructor.clickHandler(
      collapse,
      collapseHeight,
    ));
  }

  static clickHandler(collapse, collapseHeight) {
    const collapseStyle = collapse.style;
    if (!collapse.classList.contains('show')) {
      collapseStyle.maxHeight = `${collapseHeight}px`;
      collapse.classList.add('show');
    } else {
      collapseStyle.maxHeight = '0px';
      collapse.classList.remove('show');
    }
  }
}
