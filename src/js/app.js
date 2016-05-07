import React from 'react';
import {render, Component} from 'react'
import ReactDOM  from 'react-dom';
import App from './modules/FizzBuzzApp';

const appContainer = document.getElementById('appContainer');

ReactDOM.render( <App />, appContainer);
