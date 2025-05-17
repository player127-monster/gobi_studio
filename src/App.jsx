import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load route components
const HomePage = lazy(() => import('./pages/Homepage'));
const Services = lazy(() => import('./components/Services'));
const OurWorks = lazy(() => import('./components/OurWorks'));
const NewArrival = lazy(() => import('./components/NewArrival'));

function App() {
  const shopName = "Gobi Studio";

  return (
    <Router basename="/">
      <Header />

      <Suspense fallback={<div className="text-center p-10 text-xl">Loading...</div>}>
        <Routes>
          {/* Home route (scroll-based for sections like Home, About, Contact) */}
          <Route path="/" element={<HomePage shopName={shopName} />} />

          {/* Separate route pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/explore" element={<OurWorks />} />
          <Route path="/new" element={<NewArrival />} />
        </Routes>
      </Suspense>

      <Footer name={shopName} />
    </Router>
  );
}

export default App;
