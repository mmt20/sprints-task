import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import SignupForm from './components/SignupForm';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          {isLoggedIn ? (
            <>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<Dashboard />} />
              <Route path='/profile/:userId' element={<Profile />} />
            </>
          ) : (
            <Route path="*" element={<LoginForm />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
