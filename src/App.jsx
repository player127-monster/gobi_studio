import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import OurWorks from './components/OurWorks';
import Info from './components/Info';
import NewArrival from './components/NewArrival';

function App() {

  const shopName="Gobi Studio"

  return (
    <BrowserRouter>
      <Header name={shopName}/>
      <Home name={shopName}/>
      <About name={shopName}/>
      <Services/>
      <OurWorks/>
      <NewArrival/>
      <Reviews/>
      <Info/>
      
      <Routes>
        <Route path="/products" element={<Home name={shopName}/>} />
      </Routes>

      <Footer name={shopName}/>
    </BrowserRouter>
  );
}

export default App;
