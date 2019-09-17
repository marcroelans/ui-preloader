
<p align="center"><img src="assets/logo.png" width="300" height="auto"></p>

---

Ui-Preloader is a simple vanilla js component for simple messages in the browser.

## Install / Import

### via npm

Install the package
``` sh
npm i ui-preloader --save
```

``` javascript
import { init as UiPreloaderInit } from 'ui-preloader';
```


### via script

Download the file **ui-preloader.js** in the `js/dist/` folder and place it into your html file.

```html
...
<body>

  ...
  <script src="ui-prelader.js"></script>
  <script>
    // use here
  </script>

</body>
```

## API
To create a preloader component you just need to call the init function.
The first argument is the root. It´s the container where the component gets inserted.
Root is by default the body element.

`init(root <HTML Element>)`

``` javascript
  const myPreloader = init(document.querySelector('.container'));
```

`destroy()`
Once you create an inheritance and the preloader is not needed anymore
you can just call the destroy method to remove it from the dom.

``` javascript
 myPreloader.destroy()
```
