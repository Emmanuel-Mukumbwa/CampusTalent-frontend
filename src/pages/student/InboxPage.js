import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const InboxPage = () => {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState('all'); // Options: all, unread, read, sent
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  
  // Dummy current user data
  const currentUser = 'Emmanuel Mukumbwa';

  // Dummy messages data
  const initialMessages = [
    {
      id: 1,
      sender: 'HR Department',
      recipient: currentUser,
      subject: 'Interview Invitation',
      content: 'You are invited for an interview on February 20, 2025.',
      timestamp: '2025-02-10 09:00 AM',
      read: false,
      threadId: 1,
    },
    {
      id: 2,
      sender: currentUser,
      recipient: 'HR Department',
      subject: 'Re: Interview Invitation',
      content: 'Thank you for the invitation. I confirm my availability.',
      timestamp: '2025-02-10 10:00 AM',
      read: true,
      threadId: 1,
    },
    {
      id: 3,
      sender: 'Career Services',
      recipient: currentUser,
      subject: 'Workshop Invitation',
      content: 'Join our resume workshop on February 25, 2025.',
      timestamp: '2025-02-11 11:00 AM',
      read: false,
      threadId: 2,
    },
  ];

  useEffect(() => {
    // In production, fetch messages from your backend.
    setMessages(initialMessages);
  }, []);

  // Group messages into threads by threadId
  const threads = messages.reduce((acc, message) => {
    acc[message.threadId] = acc[message.threadId] || [];
    acc[message.threadId].push(message);
    return acc;
  }, {});

  // Filter threads based on the selected filter
  const filteredThreads = Object.entries(threads).filter(([threadId, threadMessages]) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return threadMessages.some(msg => !msg.read);
    if (filter === 'read') return threadMessages.every(msg => msg.read);
    if (filter === 'sent') return threadMessages[0].sender === currentUser;
    return true;
  });

  const handleSelectThread = (threadId) => {
    setSelectedThread(Number(threadId));
  };

  const handleReply = () => {
    if (replyContent.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: currentUser,
        recipient: threads[selectedThread][0].sender,
        subject: threads[selectedThread][0].subject,
        content: replyContent,
        timestamp: new Date().toLocaleString(),
        read: true,
        threadId: selectedThread,
      };
      // In production, send this message to your backend (e.g., via fetch or axios)
      setMessages([...messages, newMessage]);
      setReplyContent('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Inbox</h2>
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <button
            className={`btn btn-block mb-2 ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setFilter('all'); setSelectedThread(null); }}
          >
            All Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'unread' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setFilter('unread'); setSelectedThread(null); }}
          >
            Unread Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'read' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setFilter('read'); setSelectedThread(null); }}
          >
            Read Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'sent' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setFilter('sent'); setSelectedThread(null); }}
          >
            Sent Messages
          </button>
        </div>

        {/* Threads List */}
        <div className="col-md-4">
          <ul className="list-group">
            {filteredThreads.map(([threadId, threadMessages]) => (
              <li
                key={threadId}
                className={`list-group-item ${selectedThread === Number(threadId) ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectThread(threadId)}
              >
                <strong>{threadMessages[0].subject}</strong>
                <br />
                <small>{threadMessages[threadMessages.length - 1].timestamp}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation and Reply */}
        <div className="col-md-5">
          {selectedThread ? (
            <div>
              <h5>Conversation</h5>
              <div className="mb-3">
                {threads[selectedThread].map((message) => (
                  <div key={message.id} className="card mb-2">
                    <div className="card-body">
                      <h6>
                        <strong>{message.sender}</strong> to <strong>{message.recipient}</strong>
                      </h6>
                      <p>{message.content}</p>
                      <small className="text-muted">{message.timestamp}</small>
                    </div>
                  </div>
                ))}
              </div>
              <textarea
                className="form-control mb-2"
                rows="3"
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              ></textarea>
              <Button variant="primary" onClick={handleReply}>
                Send Reply
              </Button>
            </div>
          ) : (
            <p className="text-muted">Select a thread to view the conversation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
