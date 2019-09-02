const isEvent = event => (event.startsWith('on') ? event.toLowerCase() : `on${event}`) in window;

const h = (tag = 'div', props = null, childs = []) => {
  const el = document.createElement(tag);

  if (props !== null) {
    for (const key in props) {
      if (isEvent(key)) {
        el.addEventListener(key, (e) => {
          props[key](e, el);
        });
      } else {
        el.setAttribute(key, props[key]);
      }
    }
  }

  if (childs.length > 0) {
    childs.forEach((child) => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else if (child !== null){
        el.appendChild(child);
      }
    });
  }
  return el;
};

export default h;
