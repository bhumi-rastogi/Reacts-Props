import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {imageData} from './Components/DataComponent';
import AppClass from './AppClass';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass imageData = {imageData} />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
