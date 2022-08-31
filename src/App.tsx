import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import LoginView from './components/LoginView/LoginView';
import {AuthProvider} from './context/authContext';
import RegisterView from './components/RegisterView/RegisterView';
import ProtectedRouter from './components/ProtectedRoute';
import ContentCategory from './components/ContentCategory/ContentCategory.';
import ContentDetail from './components/ContentDetail/ContentDetail';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRouter>
                <HomeView/>
              </ProtectedRouter>
            } 
          />
          <Route 
            path="/contentcategory" 
            element={
              <ProtectedRouter>
                <ContentCategory/>
              </ProtectedRouter>
            } 
          />
          <Route 
            path="/contentdetail" 
            element={
              <ProtectedRouter>
                <ContentDetail/>
              </ProtectedRouter>
            } 
          />
          <Route path="/login" element={<LoginView/>} />
          <Route path="/register" element={<RegisterView/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
