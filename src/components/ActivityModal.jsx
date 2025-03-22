import { useState, useEffect } from 'react';
import './ActivityModal.css';

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
    // ここで活動記録を保存する処理を追加できます
    console.log({ date, hours, minutes, details });
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
