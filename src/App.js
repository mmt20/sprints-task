import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='/users' element={<Dashboard />} />
          <Route path='/profile/:userId' element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
