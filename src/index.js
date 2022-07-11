import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import CryptoContext from './CryptoContext.js';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <CryptoContext>
//   <App />
//   </CryptoContext>
    
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);