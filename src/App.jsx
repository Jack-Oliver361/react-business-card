import './App.css';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import ProfileInfo from './components/ProfileInfo';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <ProfileInfo />
      <AboutMe />
      <Interests />
      <Socials />
    </div>
  )
}

export default App
