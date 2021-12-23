import React from 'react';
import ReactDOM from 'react-dom';
import './core/index.css';
import App from './core/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
