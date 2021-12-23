import React from 'react';
import ReactDOM from 'react-dom';
import SkillsApp from './components/SkillsApp/SkillsApp';
import reportWebVitals from './reportWebVitals';
import registerSwitcher from "./common.blocks/theme-switcher/theme-switcher";

import './index.scss';

window.addEventListener('DOMContentLoaded', function () {
    registerSwitcher();
});

ReactDOM.render(
  <React.StrictMode>
    <SkillsApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
