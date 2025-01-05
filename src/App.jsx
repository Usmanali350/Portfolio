import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';

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

     

    </>
  );
}
export default App;
