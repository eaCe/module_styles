/* global rex */
$(document).on('rex:ready', function () {
  new ModuleStylesSettings();
});

class ModuleStylesSettings {
  constructor () {
    this.stylesheet = rex.moduleStylesheet;
    this.flag = false;

    if (!this.stylesheet) {
      return;
    }

    // TODO: check if stylesheet exists
    // this.checkStylesheet();
  }

  checkStylesheet () {
    const request = new XMLHttpRequest();
    request.open('GET', this.stylesheet, true);
    request.onreadystatechange = () => {
      if (request.readyState !== 4 && request.status !== 200 && !this.flag) {
        const el = document.createElement('div');
        el.innerHTML = '<div class="alert alert-warning">Die Stylesheet-Datei konnte nicht gefunden werden.</div>';
        document.querySelector('.module-styles-settings').parentElement.prepend(el);
        this.flag = true;
      }
    };
    request.send();
  }
}
