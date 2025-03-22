import { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({page,setPage}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="actions-menu">
      <button onClick={() => setMenuOpen(!menuOpen)} className={`btn btn--large btn--menu ${menuOpen ? 'open' : ''}`}>
        {/* 3本線を削除 */}
      </button>
      {menuOpen && (
        <div className="menu-buttons">
            <button className="btn btn--share">Share</button>
            <button className="btn btn--star" onClick={() => setPage("next")} >Star</button>
            <button className="btn btn--comment">Comment</button>
        </div>
      )}
      {page === "next" && <NextPage />} {/* 次の画面 */}
    </div>
  );
}

export default HamburgerMenu;
