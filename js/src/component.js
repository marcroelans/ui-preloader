import h from './utlilities/h';

class UiPreloader {
  constructor(root) {
    this.root = root;
    this.template = null;
  }

  createTemplate() {

    this.template = h('div', { class: 'preloader-js' }, [
      this.createEmptyDiv(),
      this.createEmptyDiv(),
      this.createEmptyDiv(),
      this.createEmptyDiv(),
    ]);

    return this.template;

  }

  createEmptyDiv() {
    return h('div');
  }

  render() {
    if (!this.template) {
      const template = this.createTemplate();
      this.root.appendChild(template);
    };
  }
}

export default UiPreloader;
