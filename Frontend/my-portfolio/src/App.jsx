import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from './components/AboutMePage.jsx';
import CareerTimelinePage from './components/CareerTimelinePage.jsx';
import ContactPage from './components/ContactPage.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import SkillsPage from './components/SkillsPage.jsx';
import Header from './components/Header.jsx';
const InteractiveHeader = lazy(() => import('./components/InteractiveHeader.jsx'));
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/timeline" element={<CareerTimelinePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;