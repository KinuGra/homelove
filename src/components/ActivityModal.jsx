import { useState, useEffect } from 'react';
import './ActivityModal.css';
import { saveToDynamoDB } from '../feat/lambda';
import { v4 as uuidv4 } from 'uuid';
import { geminiResponse } from '../feat/gemini'; // geminiResponseをインポート
import { speak } from '../feat/audio';

function ActivityModal({ onClose, updatePraiseText }) { // updatePraiseTextを受け取る
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activity = {
      id: uuidv4(),
      date: new Date().toISOString(),
      learningTime: `${hours} hours ${minutes} minutes`,
      detail: details
    };
    await saveToDynamoDB(activity);
    const prompt = `あなたは女の子です。${details}を${hours}時間${minutes}分も頑張ったことを褒めてください。30文字以内`;
    const response = await geminiResponse(prompt);
    updatePraiseText(response); // PraiseTextWindowの内容を更新
    speak(response, 17); // テキストを発音
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>活動記録</h2>
        <form onSubmit={handleSubmit}>
          <label>
            日付:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label>
            学習時間:
            <div className="time-inputs">
              <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} required placeholder="時間" />
              <span>:</span>
              <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} required placeholder="分" />
            </div>
          </label>
          <label>
            詳細:
            <textarea 
              value={details} 
              onChange={(e) => setDetails(e.target.value)} 
              style={{ width: '100%', height: '100px' }} 
              placeholder="例：英文法の復習、システム英単語101~200" 
            />
          </label>
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>保存</button>
          <button type="button" onClick={onClose}>キャンセル</button>
        </form>
      </div>
    </div>
  );
}

export default ActivityModal;
