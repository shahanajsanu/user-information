import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import User from './Component/User/User';
import Newsletter from './Component/Newsletter/Newsletter';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <User></User>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
