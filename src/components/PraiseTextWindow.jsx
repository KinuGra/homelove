import { useEffect } from 'react';
import './PraiseTextWindow.css';
import { geminiResponse } from '../feat/gemini';

function PraiseTextWindow({ praiseText, setPraiseText }) { // setPraiseTextを受け取る
  useEffect(() => {
    const fetchPraiseText = async () => {
      const prompt = "あなたは女の子です。今日も一日頑張ってほしいと伝えて。20文字以内";
      const response = await geminiResponse(prompt);
      setPraiseText(response);
    };

    fetchPraiseText();
  }, [setPraiseText]); // setPraiseTextが変更されたときのみ実行

  return (
    <div className="text-window">
      <p>{praiseText}</p>
    </div>
  );
}

export default PraiseTextWindow;
