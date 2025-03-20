import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div>
        <div>
          <img src="/public/img/tsukuyomi01.png" alt="Tsukuyomi" className="fullscreen-image" />
          <div className="text-window">
            <p>すごい！よく頑張ったね！</p>
          </div>
        </div>
      </div>
      <div className="actions-menu">
        <button onClick={() => setMenuOpen(!menuOpen)} className={`btn btn--large btn--menu ${menuOpen ? 'open' : ''}`}>
          {/* 3本線を削除 */}
        </button>
        {menuOpen && (
          <div className="menu-buttons">
            <button className="btn btn--share">Share</button>
            <button className="btn btn--star">Star</button>
            <button className="btn btn--comment">Comment</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
