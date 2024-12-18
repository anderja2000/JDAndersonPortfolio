import { lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from './components/AboutMePage.jsx';
import CareerTimelinePage from './components/CareerTimelinePage.jsx';
import ContactPage from './components/ContactPage.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import SkillsPage from './components/SkillsPage.jsx';
import Header from './components/Header.jsx';
const InteractiveHeader = lazy(() => import('./components/InteractiveHeader.jsx'));
import { ThemeContext } from './context/ThemeContext.jsx';
import './App.css';
import ToggleSwitch from './components/smallComponents/ToggleSwitch.jsx';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`App theme-${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><HomePage /></>} />
          <Route path="/AboutMe" element={<><Header isAboutPage={true} /><AboutMePage /></>} />
          <Route path="/projects" element={<><Header /><ProjectsPage /></>} />
          <Route path="/skills" element={<><Header /><SkillsPage /></>} />
          <Route path="/timeline" element={<><Header /><CareerTimelinePage /></>} />
          <Route path="/contact" element={<><Header /><ContactPage /></>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;