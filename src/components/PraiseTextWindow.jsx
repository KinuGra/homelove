import { useState, useEffect } from 'react';
import './PraiseTextWindow.css';
import { geminiResponse } from '../feat/gemini';

function PraiseTextWindow() {
  const [praiseText, setPraiseText] = useState('わくわく');

  // コンポーネントがマウントされたときに、Geminiにリクエストを送信して褒め言葉を取得する
  useEffect(() => {
    const fetchPraiseText = async () => {
      const prompt = "あなたは女の子です。今日も一日頑張ってほしいと伝えて。20文字以内";
      const response = await geminiResponse(prompt);
      setPraiseText(response);
    };

    fetchPraiseText();
  }, []);

  return (
    <div className="text-window">
      <p>{praiseText}</p>
    </div>
  );
}

export default PraiseTextWindow;
