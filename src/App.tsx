import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { ImageCards } from 'pages/ImageCardsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-cards" element={<ImageCards />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
