import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <h2>Counter State = { counter }</h2>
        { isLogged ? <h3>Logged in text</h3> : <h3>You are not logged in!</h3> }
      </div>
    </div>
  );
}

export default App;
