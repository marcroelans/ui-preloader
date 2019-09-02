import h from './util/h';
import div from './util/div';

class UiPreloader {
  constructor(root) {
    this.root = root;
    this.template = null;
  }

  createTemplate() {

    this.template = h('div', { class: 'preloader-js' }, [
      div(),
      div(),
      div(),
      div(),
    ]);

    return this.template;
  }

  render() {
    if (!this.template) {
      const template = this.createTemplate();
      this.root.appendChild(template);
    };
  }

  destroy() {
    if(!this.template) {
      return;
    }

    this.root.removeChild(this.template);
    this.template = null;
  }
}

export default UiPreloader;
