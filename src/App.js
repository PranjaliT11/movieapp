import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home"

import { SignIn } from "./Components/SignIn/SignIn";
import { SignUp } from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard"
import { MovieDetail } from "./Components/MovieDetail/MovieDetail";
import { Bookticket } from "./Components/Bookticket/Bookticket";
import ShowTicket from "./Components/ShowTicket/ShowTicket";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { ForgotUser } from "./Components/ForgetPassword/ForgetPassword";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<ProtectedRoutes Component={Dashboard} />}/>          
          <Route path='/movie/:id/' element={<MovieDetail />} />
          <Route path='/movie/:id/bookticket' element={<Bookticket/>}/>
          <Route path='/getticket/' element={<ProtectedRoutes Component={ShowTicket} />}/>
          <Route path='/reset'element={<ForgotUser/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;