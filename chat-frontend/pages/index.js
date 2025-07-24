import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://your-backend-app.onrender.com'); 
export default function Home() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat-message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msg = { text: message, sender: 'You' };
    setChat((prev) => [...prev, msg]);
    socket.emit('chat-message', msg);
    setMessage('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>💬 Real-Time Chat</h1>
      <div style={{ marginBottom: 10, height: 200, overflowY: 'auto', border: '1px solid #ccc', padding: 10 }}>
        {chat.map((msg, i) => (
          <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message"
        style={{ width: '80%', marginRight: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
