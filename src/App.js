import LoginPage from './LoginPage';
import MainPage from './MainPage';
import OtpChecker from './OtpChecker';
import SignupPage from './SignupPage';
import logo from './logo.svg';
// import './App.css';
import Grid from '@mui/material/Grid';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage/> }/>
          <Route path="/OtpChecker" element={<OtpChecker/> }/>
          {/* <Route path="/ForgetPassword" element={<ForgetPassword/> }/> */}
          <Route path="/MainPage" element={<MainPage/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 {/* <SignupPage/> */}
        {/* <OtpChecker/> */}