# react-hooks-keydow

React js library that contains a KeyDown event listener which will execute a function whenever the key pressed by the user matches some keys of the array you provide.

## Install

You can use `yarn` or `npm`.

### Yarn

```bash
yarn add react-hooks-keydow
```

### npm

```bash
npm i react-hooks-keydow
```

## Usage

- Simply import react-hooks-keydow

```js
import useKeyDownEvent from 'react-hooks-keydow';

const App = () => {
  const callback = key => {
    console.log(key);
  };

  // the parameters are required
  useKeyDownEvent({
    callback,
    keys: ['a', 'b', 'Escape'],
  });
};

export default App;
```
