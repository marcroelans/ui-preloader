import { h } from 'create-element-lib';
import div from './util/div';

class UiPreloader {

  /**
  * constructor
  * @param {Node} root
  */
  constructor(root) {
    this.root = root;
    this.template = null; // store complete html container
  }

  /**
   * creates the html template
   * @return {HTMLElement}
   */
  createTemplate() {
    this.template = h('div', { class: 'preloader-js-container' }, [
      h('div', { class: 'shadow' }),
      h('div', { class: 'preloader-js' }, [
        div(),
        div(),
        div(),
        div(),
      ]),
    ]);

    return this.template;
  }

  /**
   * renders the html template in the dom
   */
  render() {
    if (this.template) {
      return;
    }

    const template = this.createTemplate();
    this.root.appendChild(template);
  }

  /**
   * deletes the html template from the dom
   */
  destroy() {
    if(!this.template) {
      return;
    }

    this.root.removeChild(this.template);
    this.template = null;
  }
}

export default UiPreloader;
