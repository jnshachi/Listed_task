import './App.css';
import Dashboard from './components/Dashboard_Page/Dashboard';
import Login from './components/LoginPage/Login';
import { useState } from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState('')

  const handleLogin = (image) => {
    setLoggedIn(true);
    setImageUrl(image);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard imageUrl={imageUrl}/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
