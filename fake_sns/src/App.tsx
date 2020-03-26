import React from 'react';
import CenterColumn from './Components/CenterColumn';
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';
import './App.css';

function App() {
  return (
    <div className="design horizontalFlex withCenter">
      < LeftColumn />
      < CenterColumn />
      < RightColumn />
    </div>
  );
}

export default App;
