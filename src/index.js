import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from '../src/App';
import '../src/styles/index.scss';

ReactDOM.render(<App />, document.getElementById("root"));