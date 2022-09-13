import './App.css';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import ProfileInfo from './components/ProfileInfo';

function App() {
  return (
    <div className="App">
      <ProfileInfo />
      <AboutMe />
      <Interests />
    </div>
  )
}

export default App
