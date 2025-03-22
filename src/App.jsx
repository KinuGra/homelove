import { useState } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import PraiseTextWindow from './components/PraiseTextWindow';
import ImageDisplay from './components/ImageDisplay';
import NextPage from './components/NextPage';

function App() {
  const [page, setPage] = useState("home");
  const [selectedImage, setSelectedImage] = useState("/img/c2.png"); // 🌟 デフォルト画像

  return (
    <div>
      {page === "home" && (
        <>
          <ImageDisplay imageUrl={selectedImage} /> {/* 選ばれた画像を表示 */}
          <PraiseTextWindow />
          <HamburgerMenu setPage={setPage} />
        </>
      )}
      {page === "next" && (
        <NextPage setPage={setPage} setSelectedImage={setSelectedImage} />
      )}
    </div>
  );
}

export default App;



