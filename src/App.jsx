import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';

function App() {
  

    return (
    <>
      
      <Header />

      <div>
          <Home/>
      </div>
      <Footer />

    </>
  )
}

export default App
