import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/:post_id">
          <Post/>
        </Route>
        <Route>
        </Route>  
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
