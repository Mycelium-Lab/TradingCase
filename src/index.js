import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import { Provider } from 'react-redux'
import { configureStore } from './redux/store'

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/mycelium-lab/a-subgraph-for-the-case-project',
  cache: new InMemoryCache()
});

ReactDOM.render(
    <Provider store={configureStore()}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
