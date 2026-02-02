import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Headercomponent } from './compont/Headercomponent';
import { PortfolioComponent } from './compont/PortfolioComponent';
import Contentcomponent from './compont/Contentcomponent';
import { Footercomponent } from './compont/Footercomponent';
//import './App.css'

function App() {
  
  
  
  
  return (
   
      <div>
        <Headercomponent></Headercomponent>
      <Contentcomponent></Contentcomponent>
       <Footercomponent></Footercomponent>
    </div>
  );
}

export default App;
