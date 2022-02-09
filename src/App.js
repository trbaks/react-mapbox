import React from 'react';
import Amit from "../src/components/Amit";

import "./App.css";

function App() {
  const address = 'Empire State Building'
  return (
    <React.Fragment>
      <h2>This is from Appjs component</h2>
      <Amit address={address}/>
    </React.Fragment>
  );
}

export default App;
