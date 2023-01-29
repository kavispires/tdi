import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { ImageCards } from 'pages/ImageCardsPage';
import { SuspectCards } from 'pages/SuspectsPage';
import { Prompter } from 'pages/PrompterPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-cards" element={<ImageCards />} />
        <Route path="/suspects" element={<SuspectCards />} />
        <Route path="/prompter" element={<Prompter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
