// src/pages/recruiter/Inbox.js
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const Inbox = () => {
  // Dummy current user for recruiter
  const currentUser = 'Recruiter ABC';

  // Dummy messages for recruiter inbox (thread-based)
  const initialMessages = [
    {
      id: 1,
      sender: 'Candidate John Doe',
      recipient: currentUser,
      subject: 'Application Inquiry',
      content: 'I am interested in the Software Engineer Intern role.',
      timestamp: '2025-02-10 09:00 AM',
      read: false,
      threadId: 1,
    },
    {
      id: 2,
      sender: currentUser,
      recipient: 'Candidate John Doe',
      subject: 'Re: Application Inquiry',
      content: 'Thank you for your interest. Please send your portfolio.',
      timestamp: '2025-02-10 09:30 AM',
      read: true,
      threadId: 1,
    },
    {
      id: 3,
      sender: 'Candidate Jane Smith',
      recipient: currentUser,
      subject: 'Job Application',
      content: 'Please review my application for the Full-Stack Developer position.',
      timestamp: '2025-02-11 11:00 AM',
      read: false,
      threadId: 2,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState('all'); // Options: all, unread, read, sent
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  // Group messages into threads by threadId
  const threads = messages.reduce((acc, message) => {
    acc[message.threadId] = acc[message.threadId] || [];
    acc[message.threadId].push(message);
    return acc;
  }, {});

  // Filter threads based on selected filter
  const filteredThreads = Object.entries(threads).filter(([threadId, threadMessages]) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return threadMessages.some((msg) => !msg.read);
    if (filter === 'read') return threadMessages.every((msg) => msg.read);
    if (filter === 'sent') return threadMessages[0].sender === currentUser;
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedThread(null);
  };

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
      // In production, send this reply to your backend
      setMessages([...messages, newMessage]);
      setReplyContent('');
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        minHeight: '100vh',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Inbox</h2>
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <button
            className={`btn btn-block mb-2 ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleFilterChange('all')}
          >
            All Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'unread' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleFilterChange('unread')}
          >
            Unread Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'read' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleFilterChange('read')}
          >
            Read Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${filter === 'sent' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleFilterChange('sent')}
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

export default Inbox;
