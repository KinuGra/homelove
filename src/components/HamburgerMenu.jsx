import { useState } from 'react';
import './HamburgerMenu.css';
import ActivityModal from './ActivityModal'; // 新しく作成するコンポーネントをインポート

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // モーダルの状態を管理

  return (
    <div className="actions-menu">
      <button onClick={() => setMenuOpen(!menuOpen)} className={`btn btn--large btn--menu ${menuOpen ? 'open' : ''}`}>
        {/* 3本線を削除 */}
      </button>
      {menuOpen && (
        <div className="menu-buttons">
            <button className="btn btn--share" onClick={() => setModalOpen(true)}>Share</button>
            <button className="btn btn--star">Star</button>
            <button className="btn btn--comment">Comment</button>
        </div>
      )}
      {modalOpen && <ActivityModal onClose={() => setModalOpen(false)} />} {/* モーダルを表示 */}
    </div>
  );
}

export default HamburgerMenu;
