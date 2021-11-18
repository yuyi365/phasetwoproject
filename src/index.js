import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'
import { DataProvider } from './context/data';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>,
  document.getElementById('root')
);