import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import RootComponent from './App';

// ReactDOM.render(
//     <RootComponent></RootComponent>,
//     document.getElementById('root')
// );

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => document.getElementById('react-app') // 指定要挂载到哪个dom元素上面
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];
