import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { ImageCards } from 'pages/ImageCardsPage';
import { SuspectCards } from 'pages/SuspectsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-cards" element={<ImageCards />} />
        <Route path="/suspects" element={<SuspectCards />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
