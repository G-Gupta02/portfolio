
import './App.css';
import './components/navbar.css';
import './components/profile.css';
import './components/about.css';
import './components/skills.css';
import './components/projects.css';
import './components/footer.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <br color='white'/>
      <Footer/>
    </>
  );
}

export default App;
