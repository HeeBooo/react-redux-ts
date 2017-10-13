import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello name="123" />
  </Provider>,
  // 类型断言，也叫转换
  // 因为getElementById的返回值类型是HTMLElement | null
  // 我们假设getElementById总是成功的，因此我们要使用as语法告诉TypeScript这点。
  document.getElementById('root') as HTMLElement
);