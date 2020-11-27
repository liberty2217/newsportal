import React from 'react'
import ReactDOM from 'react-dom';
import { LoginForm } from './components/LoginForm';

function App() {
  const adminUser = { // stores details we will check
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = React.useState({name: "", email: ""});
  const [error, setError] = React.useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log('Logout');
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
