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

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({name: '', email: ''});
    console.log('Logout');
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span>, to Newsportal. Press logout to leave the site.</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
