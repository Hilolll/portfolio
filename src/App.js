import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/"
            element={
              <>
                <Intro />
              </>
            }
          />
          
          <Route path='/projects' element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path='/contacts' element={<Contacts/>} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
