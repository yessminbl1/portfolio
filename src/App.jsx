
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout.jsx';
import Hero from './components/Accueil/Hero.jsx';
import About from './components/Accueil/About.jsx';
import Services from './components/Accueil/Services.jsx';
import Skills from './components/Accueil/Skills.jsx';
import Experience from './components/Accueil/Experience.jsx';
import Projects from './components/Accueil/Projects.jsx';
import ContactForm from './components/Formulaire/FormulaireG6.jsx';
import Login from './Pages/Login.jsx';
import ProtectedLayout from './components/Admin/ProtectedLayout.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx';

// Home Component that combines sections
const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
    </Layout>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Admin Routes */}
      <Route path="/admin" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
