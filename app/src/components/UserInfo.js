import React, { useContext, useRef } from 'react';

import { UserContext } from '../App';

const UserInfo = () => {
  const user = useContext(UserContext);

  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Informacje o Użytkowniku</h2>
      <p>Imię: {user.name}</p>
      <p>Wiek: {user.age}</p>
      <p>Email: {user.email}</p>
      <input ref={inputRef} type="text" placeholder="Wpisz coś..." />
      <button onClick={handleFocus}>Ustaw Fokus</button>
    </div>
  );
};

export default UserInfo;
