import './App.css';
import LoginPage from './Pages/LoginPage';
import QuizPage from './Pages/QuizPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import LogoutPage from './Pages/LogoutPage';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import ProtectedRoute from './Routes/ProtecteRoute';

function App() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='quiz' element={<ProtectedRoute Component={QuizPage} />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<SignupPage />} />
                <Route path='logout' element={<LogoutPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
  );
}

export default App;
