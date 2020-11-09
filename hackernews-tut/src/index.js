import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import * as serviceWorker from './ServiceWorker';
import reportWebVitals from './reportWebVitals';

render(<App />, document.getElementById('root'));

serviceWorker.register();
