import React, { useContext, useRef } from 'react';
import { UserContext } from '../Lab7.js';

const UserInfo = () => {
  const user = useContext(UserContext);
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Informacje o Użytkowniku</h2>
      <p style={styles.text}>Imię: <span style={styles.boldText}>{user.name}</span></p>
      <p style={styles.text}>Wiek: <span style={styles.boldText}>{user.age}</span></p>
      <p style={styles.text}>Email: <span style={styles.boldText}>{user.email}</span></p>

      <div style={styles.inputContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Wpisz coś..."
          style={styles.input}
        />
        <button onClick={handleFocus} style={styles.button}>Ustaw Fokus</button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '20px auto',
  },
  header: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    flexGrow: 1,
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default UserInfo;
