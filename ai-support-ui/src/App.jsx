
import { useState } from 'react';

export default function App() {
  const [msg,setMsg] = useState('');
  const [out,setOut] = useState('');

  async function send() {
    const r = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg }),
    });
    const txt = await r.text();
    setOut(txt);
  }

  return (
    <div style={{padding: 20, fontFamily: 'sans-serif'}}>
      <h1>AI Support UI</h1>
      <textarea
        rows={4}
        style={{width: '100%'}}
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <br />
      <button onClick={send}>Send</button>
      <pre>{out}</pre>
    </div>
  );
}
