/* global rex */
$(document).on('rex:ready', function () {
  new ModuleStyles()
})

class ModuleStyles {
  constructor () {
    this.$slicePanels = document.querySelectorAll('ul.rex-slices .panel-default .panel-body');
    this.stylesheet = rex.moduleStylesheet;

    if (!this.stylesheet) {
      return
    }

    if (this.$slicePanels.length) {
      for (let i = 0; i < this.$slicePanels.length; i++) {
        this.wrapSlices(this.$slicePanels[i])
      }
    }
  }

  wrapSlices ($panel) {
    const content = $panel.innerHTML;

    // attach shadow DOM
    $panel.attachShadow({ mode: 'open' });
    $panel.shadowRoot;
    $panel.shadowRoot.host;

    // add slice content
    $panel.shadowRoot.innerHTML = content;

    // add stylesheet
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.onload = () => {
      $panel.classList.add('module-styles-loaded');
    };
    link.setAttribute('href', this.stylesheet);
    $panel.shadowRoot.appendChild(link);
  }
}
