import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect, Provider } from 'react-redux';

import './App.css';
import './styles/bootstrap/bootstrap.min.css';
import Table from '@lugia/lugia-web/dist/table';
import Input from '@lugia/lugia-web/dist/input';
import { configureStore, history } from './store/index';
import { ConnectedRouter } from "connected-react-router";
import bindActionCreator from "./store/utils/bindActionCreator";
import { changeAge, changeName } from "./store/reducers/Query";

const columns = [{
  title: 'Name', dataIndex: 'name', key: 'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key: 'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key: 'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key: 'operations', render: () => <a href="javascript:;">Delete</a>,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
  { name: 'Uzi', age: 36, address: 'some where', key: '3' },
  { name: 'ClearLove', age: 36, address: 'some where', key: '4' },
  { name: 'Rookie', age: 36, address: 'some where', key: '5' },
  { name: 'TheShy', age: 36, address: 'some where', key: '6' },
];


const store = configureStore({
  Query: {
    name: 'ligx',
    age: 15,
  }
});

const Page = connect(
  state => {
    const { Query: { name, age } } = state;
    return { name, age };
  },
  dispatch => bindActionCreator({
    changeName,
    changeAge
  }, dispatch)
)((props) => {
  const { name, age, changeName, changeAge } = props;
  const onChangeAge = (e) => {
    changeAge(e.newValue);
  };
  const onChangeName = (e) => {
    changeName(e.newValue);
  };
  return <React.Fragment>
    姓名<Input value={name} onChange={onChangeName}></Input>,
    年龄<Input value={age} onChange={onChangeAge}></Input>,
    <Table columns={columns} data={data}/>
  </React.Fragment>
});

class App extends Component {
  render () {
    return <Provider store={store}>
      <ConnectedRouter history={history}>
        <Page/>
      </ConnectedRouter>
    </Provider>
  }
}

// ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
