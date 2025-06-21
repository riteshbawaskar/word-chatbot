import { useState } from 'react';
import axios from 'axios';

export default function ChatBox() {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('http://localhost:3001/chat', { message: input });
    setMessages([...messages, { user: input, bot: res.data.response }]);
    setInput('');
  };

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>
          <p><strong>You:</strong> {m.user}</p>
          <p><strong>Bot:</strong> {m.bot}</p>
        </div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}