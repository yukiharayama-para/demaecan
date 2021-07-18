import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from "./AppBar";
import SimpleContainer from "./SearchAdress";
import Genre from "./Genre";

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar />
      <SimpleContainer/>
      <Genre/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
