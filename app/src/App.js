import React, { useState, useReducer, useEffect, createContext } from 'react';
import UserInfo from './components/UserInfo';

export const UserContext = createContext();

const App = () => {

  const [showUserInfo, setShowUserInfo] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW':
        return { ...state, show: !state.show };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { show: true });

  const user = {
    name: 'Dominik',
    age: 21,
    email: '20456@student.ans-elblag.pl'
  };

  useEffect(() => {
    console.log('App component mounted or updated');
    return () => {
      console.log('App component unmounted');
    };
  }, [showUserInfo, state.show]);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>Moja Aplikacja</h1>

        <button onClick={() => setShowUserInfo(!showUserInfo)}>
          {showUserInfo ? 'Ukryj informacje o użytkowniku' : 'Pokaż informacje o użytkowniku'}
        </button>

        <button onClick={() => dispatch({ type: 'TOGGLE_SHOW' })}>
          {state.show ? 'Ukryj komponent' : 'Pokaż komponent'}
        </button>

        {showUserInfo && <UserInfo />}
        {state.show && <p>Kolejny komponent jest widoczny!</p>}
      </div>
    </UserContext.Provider>
  );
};

export default App;
