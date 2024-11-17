import React from 'react';

const UserInfo = ({ name, age, email }) => {
  return (
    <div className="user-info">
      <h2>Informacje o użytkowniku</h2>
      <p><strong>Imię:</strong> {name}</p>
      <p><strong>Wiek:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserInfo;
