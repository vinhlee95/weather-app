import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store = {createStoreWithMiddleware(rootReducer)} >
        <div className="App">
          <h1>MyWeather</h1>
          <SearchBar />
          <WeatherList />
        </div>
      </Provider>
    );
  }
}

export default App;
