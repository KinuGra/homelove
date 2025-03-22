import { useState, useEffect } from 'react';
import './PraiseTextWindow.css';
import { geminiResponse } from '../feat/gemini';

function PraiseTextWindow() {
  const [praiseText, setPraiseText] = useState('わくわく');

  useEffect(() => {
    const fetchPraiseText = async () => {
      const prompt = "あなたは女の子です。勉強している人を褒めてください。15文字以内";
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
