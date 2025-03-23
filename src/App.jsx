// App.jsx

import React from 'react';
import { speak } from './audio';

function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '50px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fceabb, #f8b500)',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#333',
      }}
    >
      <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>声が出ます🎤</h2>
      <button
        onClick={() => speak("お兄ちゃん、今日はいっぱい甘えていい？", 1)}
        style={{
          background: '#fff',
          border: '2px solid #f8b500',
          padding: '10px 20px',
          borderRadius: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={e => (e.target.style.background = '#f8b500')}
        onMouseOut={e => (e.target.style.background = '#fff')}
      >
        話す
      </button>

      <APP2 />
    </div>
  );
}

function APP2() {
  return (
    <div style={{ marginTop: '60px' }}>
      <h1 style={{ fontSize: '1.8em' }}>画像表示テスト🖼️</h1>
      <img
        src="/img/c1.png"
        alt="可愛い画像"
        style={{
          width: '300px',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
}

export default App;
