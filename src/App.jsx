import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import Services from './components/Services';
import OurWorks from './components/OurWorks';
import NewArrival from './components/NewArrival';


function App() {
  const shopName = "Gobi Studio";

  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage shopName={shopName} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/explore" element={<OurWorks />} />
        <Route path="/new" element={<NewArrival />} />
      </Routes>
      <Footer name={shopName} />
    </Router>
  );
}

export default App;
