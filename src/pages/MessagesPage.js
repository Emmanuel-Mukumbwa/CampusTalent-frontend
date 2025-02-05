import React, { useState, useEffect } from 'react';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState('all'); // all, unread, read, sent
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [socket, setSocket] = useState(null); // WebSocket connection

  // Mock user data
  const currentUser  = 'John Doe';

  // Group messages into threads
  const threads = messages.reduce((acc, message) => {
    acc[message.threadId] = acc[message.threadId] || [];
    acc[message.threadId].push(message);
    return acc;
  }, {});

  // Fetch initial messages (Simulate API call)
  useEffect(() => {
    const fetchMessages = async () => {
      const initialMessages = [
        {
          id: 1,
          sender: 'HR Team',
          recipient: 'John Doe',
          subject: 'Interview Schedule',
          content: 'Your interview has been scheduled for January 25th, 2025.',
          timestamp: '2025-01-20 10:00 AM',
          read: false,
          threadId: 1,
        },
      ];
      setMessages(initialMessages);
    };

    fetchMessages();

    // Setup WebSocket connection
    const ws = new WebSocket('ws://localhost:8080'); // Replace with actual WebSocket URL
    setSocket(ws);

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      ws.close(); // Cleanup WebSocket on component unmount
    };
  }, []);

  // Filtered messages based on selected filter
  const filteredMessages = messages.filter((msg) => {
    if (filter === 'unread') return !msg.read;
    if (filter === 'read') return msg.read;
    if (filter === 'sent') return msg.sender === currentUser ;
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedThread(null); // Reset selected thread when changing filters
  };

  const handleSelectThread = (threadId) => {
    setSelectedThread(threadId);
  };

  const handleReply = () => {
    if (replyContent.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: currentUser ,
        recipient: threads[selectedThread][0].sender,
        subject: threads[selectedThread][0].subject,
        content: replyContent,
        timestamp: new Date().toLocaleString(),
        read: true,
        threadId: selectedThread,
      };

      // Send message to backend via WebSocket
      socket.send(JSON.stringify(newMessage));

      // Update UI optimistically
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setReplyContent('');
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)', // Soft gradient background
        minHeight: '100vh',
        padding: '20px',
        borderRadius: '8px', // Optional: rounded corners
      }}
    >
      <h2>Messages</h2>
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3">
          <button
            className={`btn btn-block mb-2 ${
              filter === 'all' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleFilterChange('all')}
          >
            All Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${
              filter === 'unread' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleFilterChange('unread')}
          >
            Unread Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${
              filter === 'read' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleFilterChange('read')}
          >
            Read Messages
          </button>
          <button
            className={`btn btn-block mb-2 ${
              filter === 'sent' ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleFilterChange('sent')}
          >
            Sent Messages
          </button>
        </div>

        {/* Message Threads */}
        <div className="col-md-4">
          <ul className="list-group">
            {Object.entries(threads)
              .filter(([threadId, threadMessages]) =>
                threadMessages.some((msg) => filteredMessages.includes(msg))
              )
              .map(([threadId, threadMessages]) => (
                <li
                  key={threadId}
                  className={`list-group-item ${
                    selectedThread === Number(threadId) ? 'active' : ''
                  }`}
                  onClick={() => handleSelectThread(Number(threadId))}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{threadMessages[0].subject}</strong>
                  <br />
                  <small>
                    {threadMessages[threadMessages.length - 1].timestamp}
                  </small>
                </li>
              ))}
          </ul>
        </div>

        {/* Message Details and Reply */}
        <div className="col-md-5">
          {selectedThread ? (
            <div>
              <h5>Conversation</h5>
              <div className="mb-3">
                {threads[selectedThread].map((message) => (
                  <div key={message.id} className="card mb-2">
                    <div className="card-body">
                      <h6>
                        <strong>{message.sender}</strong> to{' '}
                        <strong>{message.recipient}</strong>
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
              <button className="btn btn-primary" onClick={handleReply}>
                Send Reply
              </button>
            </div>
          ) : (
            <p className="text-muted">Select a thread to view the conversation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;