import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';

function User() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter State = { counter }</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <button onClick={() => dispatch(logout())}>TOTALLY SECURE LOGOUT</button>
      </div>
    </>
  )
}

function Guest() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>You are not logged in. Please log in below.</h1>
      <button onClick={() => dispatch(login())}>TOTALLY SECURE LOGIN</button>
    </>
  )
}


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>HELLO THIS IS A REDUX PRACTICE</h1>
      <div>
        { isLogged ? <User /> : <Guest /> }
      </div>
      <br />

    </div>
  );
}

export default App;
