import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import SignUp from './components/SignUp';
import Testimonial from './components/Testimonials';
import AllCourses from './components/AllCourses';
import Header from './components/Header';
import Why from './components/why';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Wrap each section with <Element> and assign a unique 'name' prop */}
              <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="signup">
                <SignUp />
              </Element>
              <Element name="testimonials">
                <Testimonial />
              </Element>
              <Element name="courses">
                <Courses />
              </Element>
              <Element name="Why">
                <Why />
              </Element>
              <Element name="footer">
                <Footer />
              </Element>
            </>
          }
        />
        <Route path="/allcourses" element={<AllCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
