import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {

  return (
    <Router>
      
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />

    </Router>
  )
}

export default App
