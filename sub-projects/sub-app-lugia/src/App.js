import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import './styles/bootstrap/bootstrap.min.css';
import { createApp, createRoute} from '@lugia/lugiax-router';
import { createBrowserHistory, } from 'history';


const history = createBrowserHistory();

const Main = ()=>{

  return [
    <h1>
      头部
    </h1>,
    createRoute({
      '/lugia/query': {
        exact: true,
        render: ()=>import('./pages/Query'),
      }
    })
  ]
};
const App = createApp(
  {
      '/lugia':{
        component: Main,
      }
  },
  history,
  {},
);

// ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
