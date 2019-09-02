import UiPreloader from './component';

/**
 * init component
 * @param {Node} root
 * @return {Object} 
 */
const init = (root = document.querySelector('body')) => new UiPreloader(root);

export { init };
