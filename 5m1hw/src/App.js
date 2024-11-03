import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Counter from './components/Counter';

const App = () => {
  return (
      <Provider store={store}>
        <Counter />
      </Provider>
  );
};

export default App;
