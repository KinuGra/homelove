import { useState } from 'react';
import { FaRegClipboard, FaRegListAlt } from 'react-icons/fa';
import './HamburgerMenu.css';
import ActivityModal from './ActivityModal';
import ActivityLogModal from './ActivityLogModal';

function HamburgerMenu({ updatePraiseText }) { // updatePraiseTextを受け取る
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activityLogOpen, setActivityLogOpen] = useState(false); // 活動記録モーダルの状態を管理

  return (
    <div className="actions-menu">
      <button onClick={() => setMenuOpen(!menuOpen)} className={`btn btn--large btn--menu ${menuOpen ? 'open' : ''}`}>
        {/* 3本線を削除 */}
      </button>
      {menuOpen && (
        <div className="menu-buttons">
            <button className="btn btn--share" onClick={() => setModalOpen(true)}>
              <FaRegClipboard /> {/* アイコンを表示 */}
            </button>
            <button className="btn btn--activity" onClick={() => setActivityLogOpen(true)}>
              <FaRegListAlt /> {/* Activityアイコンを表示 */}
            </button>
            {/* <button className="btn btn--star">Star</button>
            <button className="btn btn--comment">Comment</button> */}

        </div>
      )}
      {modalOpen && <ActivityModal onClose={() => setModalOpen(false)} updatePraiseText={updatePraiseText} />} {/* updatePraiseTextを渡す */}
      {activityLogOpen && <ActivityLogModal onClose={() => setActivityLogOpen(false)} />} {/* 活動記録モーダルを表示 */}
    </div>
  );
}

export default HamburgerMenu;
