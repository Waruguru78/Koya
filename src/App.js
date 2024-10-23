import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Courses from './components/Courses';
import SignUp from './components/SignUp';
import Testimonial from './components/Testimonials';
import AllCourses from './components/AllCourses';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <SignUp />
            <Testimonial />
            <Courses />
          </>
        } />
        <Route path="/allcourses" element={<AllCourses />} /> {/* All Courses route */}
      </Routes>
    </Router>
  );
}

export default App;
