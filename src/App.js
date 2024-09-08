import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import SignupForm from './components/SignupForm';
import PrivateRoute from './components/PrivateRoute';
import useLocalStorage from './hooks/useLocalStorge';

function App() {
  const [loggedInUser] = useLocalStorage('loggedInUser', null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={loggedInUser ? <Navigate to="/" replace /> : <LoginForm />}
          />
          <Route
            path="/signup"
            element={
              loggedInUser ? <Navigate to="/" replace /> : <SignupForm />
            }
          />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Dashboard />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Route>

          <Route
            path="*"
            element={<Navigate to={loggedInUser ? '/' : '/login'} replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
