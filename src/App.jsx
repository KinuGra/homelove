import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
