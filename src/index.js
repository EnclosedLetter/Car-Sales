import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"
import { reducer } from "./reducers/reducer"

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore (reducer) 

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store= {store}>
<App />
</Provider>
, rootElement);

//App is wrapped around a provider
// import { createStore } from "react-redux"
// import { Provider } from "react-redux" - Provider always capital
//Once App is wrapped in Provider and you have imported, all done with index