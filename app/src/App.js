import React from 'react';
import UserInfo from './components/UserInfo';

const App = () => {
  const user = {
    name: 'Dominik',
    age: 21,
    email: '20456@student.ans-elblag.pl'
  };

  return (
    <div className="App">
      <h1>Moja Aplikacja</h1>
      <UserInfo name={user.name} age={user.age} email={user.email} />
    </div>
  );
};

export default App;
