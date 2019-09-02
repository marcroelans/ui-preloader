import UiPreloader from './component';

/**
 * init componenent
 */
const init = (root = document.querySelector('body')) => new UiPreloader(root);

export { init };
