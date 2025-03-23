import { useState } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import PraiseTextWindow from './components/PraiseTextWindow';
import ImageDisplay from './components/ImageDisplay';

function App() {
  const [praiseText, setPraiseText] = useState('わくわく');

  const updatePraiseText = (text) => {
    setPraiseText(text);
  };

  return (
    <div>
      <ImageDisplay />
      <PraiseTextWindow praiseText={praiseText} setPraiseText={setPraiseText} /> {/* setPraiseTextを渡す */}
      <HamburgerMenu updatePraiseText={updatePraiseText} />
    </div>
  );
}

export default App;
