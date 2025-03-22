import React, { useState, useEffect } from 'react';
import './ActivityLogModal.css';
import { fetchFromDynamoDB } from '../feat/lambda';

function ActivityLogModal({ onClose }) {
  const [activityLogs, setActivityLogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const logs = await fetchFromDynamoDB();
      logs.sort((a, b) => new Date(b.date) - new Date(a.date)); // dateで降順にソート
      setActivityLogs(logs);
    }
    fetchData();
  }, []);

  const formatStudyTime = (time) => {
    const timeParts = time.match(/(\d+)\s*hours\s*(\d+)\s*minutes/);
    if (timeParts) {
      const hours = parseInt(timeParts[1], 10);
      const minutes = parseInt(timeParts[2], 10);
      return { hours, minutes, totalMinutes: hours * 60 + minutes };
    }
    return { hours: 0, minutes: 0, totalMinutes: 0 };
  };

  const getBarColor = (totalMinutes) => {
    return 'orange'; // バーの色をオレンジに変更
  };

  return (
    <div className="modal">
      <div className="modal-content" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Activity Log</h2>
        <ul>
          {activityLogs.map((log, index) => {
            const { hours, minutes, totalMinutes } = formatStudyTime(log.learningTime);
            const barColor = getBarColor(totalMinutes);
            const barWidthPercentage = Math.min(totalMinutes / (5 * 60) * 100, 100); // 親要素に対する割合で設定
            return (
              <li key={index}>
                <p className="date">Date: {new Date(log.date).toLocaleDateString()}</p>
                <p className="study-time">Study Time: {hours}時間{minutes}分</p>
                <div className="study-time-bar" style={{ width: `${barWidthPercentage}%`, backgroundColor: barColor, height: '10px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }}></div>
                <p className="detail">Detail: {log.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ActivityLogModal;
