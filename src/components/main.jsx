import React from "react"
import ReactDom from "react-dom/client"
import { render, screen } from '@testing-library/react';
import App from "./App.jsx"
import "../styles/styles.css"


ReactDom.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App/>

   </React.StrictMode>,
)

describe('App', () => {
   it('renders headline', () => {
     render(<App title="React" />);
 
     screen.debug();
 
     // check if App components renders headline
   });
 });

