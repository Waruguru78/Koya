// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
// import Courses from './components/Courses';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
 import Header from './components/Header';
import About from './components/About';
import SignUp from './components/SignUp';
// import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <SignUp />
    </div>
    
  );
}

export default App;
