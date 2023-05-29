import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-body'>
        <Hero />
      </div>
      <Footer text='Copyright 2023' />
    </div>
  )
}

export default App
