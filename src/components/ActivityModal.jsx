import { useState, useEffect } from 'react';
import './ActivityModal.css';
import { saveToDynamoDB } from '../feat/lambda';
import { v4 as uuidv4 } from 'uuid';

function ActivityModal({ onClose }) {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      id: uuidv4(), // uuidを使用してIDを生成
      date: new Date().toISOString(),
      learningTime: `${hours} hours ${minutes} minutes`, // ここで適切な学習時間を設定する
      detail: details // ここで適切な詳細を設定する
    };
    saveToDynamoDB(activity);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>活動記録を入力</h2>
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
            />
          </label>
          <button type="submit">保存</button>
          <button type="button" onClick={onClose}>キャンセル</button>
        </form>
      </div>
    </div>
  );
}

export default ActivityModal;
