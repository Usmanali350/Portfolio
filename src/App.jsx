import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      
      <Navbar />
      <div id="Home">
  <Home />
</div>
<div id="Skills">
  <Skills />
</div>
<div id='Services'>
<Services/>
</div>
<div id='Projects'>
  <Projects/>
</div>
<div id='Contact'>
  <Contact/>
</div>
<div id='Footer'>
  <Footer/>
</div>

    </>
  );
}
export default App;
