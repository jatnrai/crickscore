// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import LiveMatch from './Components/Pages/LiveMatch/LiveMatch';
import Login from './Components/Auth/Login/Login';
import SignIn from './Components/Auth/Signin/SignIn';
import Contact from './Components/Pages/Email/Email';
import SeriesList from './Components/Pages/SeriesList/SeriesList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livematches" element={<LiveMatch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SeriesList" element={<SeriesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;