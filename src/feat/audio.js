// src/audio.js

export async function speak(text, speaker = 1) {
    try {
      // Step 1: クエリ作成
      const queryRes = await fetch(
        `http://127.0.0.1:50021/audio_query?text=${encodeURIComponent(text)}&speaker=${speaker}`,
        { method: 'POST' }
      );
      const queryData = await queryRes.json();
  
      // Step 2: 音声合成（WAVファイルとして受け取る）
      const synthesisRes = await fetch(
        `http://127.0.0.1:50021/synthesis?speaker=${speaker}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(queryData)
        }
      );
      const audioBlob = await synthesisRes.blob();
  
      // Step 3: 再生する
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
  
    } catch (err) {
      console.error("音声再生でエラーが出ちゃったわ：", err);
    }
  }
  
