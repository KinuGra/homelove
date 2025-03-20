import { useState } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import PraiseTextWindow from './components/PraiseTextWindow';
import ImageDisplay from './components/ImageDisplay';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ImageDisplay />
      <PraiseTextWindow />
      <HamburgerMenu />
    </div>
  );
}

export default App;
