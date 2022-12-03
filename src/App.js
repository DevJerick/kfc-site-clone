import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Categories from './components/Categories'
import Product from './components/Product'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Categories />
      <Product />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
