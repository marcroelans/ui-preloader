import UiPreloader from './component';

/**
 * init component
 */
const init = (root = document.querySelector('body')) => new UiPreloader(root);

export { init };
