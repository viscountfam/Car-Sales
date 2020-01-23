import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import {carReducer}  from './reducers/carReducer'
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

// STEP 1 - create a store and connect it to our app
// using the createStore function
// to do this we need to also create and import a reducer
const store = createStore(carReducer);
console.log(store.getState());




// STEP 1a. Provide the store to your app by wrapping App in providers
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);
