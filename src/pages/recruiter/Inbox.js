import React, { useState } from 'react';

const initialMessages = [
  { id: 1, sender: 'Candidate John Doe', message: 'I am interested in the Software Engineer Intern role.' },
  { id: 2, sender: 'Candidate Jane Smith', message: 'Please review my application for the Full-Stack Developer position.' },
];

const Inbox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      const newMsg = { id: messages.length + 1, sender: 'Recruiter', message: newMessage };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Inbox</h2>
      <div className="card">
        <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`mb-2 ${msg.sender === 'Recruiter' ? 'text-end' : 'text-start'}`}>
              <span className="badge bg-secondary">{msg.sender}</span>
              <p>{msg.message}</p>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <form onSubmit={handleSendMessage} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
