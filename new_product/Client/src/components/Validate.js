import { useState } from 'react';
import Register from './Register';
import Login from './Login';

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  console.log(registeredUsers)

  const handleRegister = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
  };

  return (
    <div>
      <h1>Register</h1>
      <Register onRegister={handleRegister} />
      <h1>Login</h1>
      <Login registeredUsers={registeredUsers} />
    </div>
  );
};

export default App;
