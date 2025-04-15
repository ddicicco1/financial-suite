import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/AiChat.css';

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: 'Hello! I can help you analyze your financial data. Try asking me questions like:',
      suggestions: [
        'What is my total spending this month?',
        'Show me overdue invoices',
        'Which vendor has the highest expenses?',
        'Analyze my spending trends',
        'When is my next bill payment due?'
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Based on your financial data, I can see that...',
        data: {
          // Example data visualization could be included here
          type: 'chart',
          values: [/* ... */]
        }
      }]);
    }, 1000);

    setInput('');
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <div className={`ai-chat-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '🤖 AI Assistant'}
      </button>

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.type === 'system' && (
                  <>
                    <div className="message-content">{message.content}</div>
                    <div className="suggestions">
                      {message.suggestions.map((suggestion, i) => (
                        <button
                          key={i}
                          className="suggestion-btn"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {message.type === 'user' && (
                  <div className="message-content">{message.content}</div>
                )}
                {message.type === 'assistant' && (
                  <div className="message-content">
                    {message.content}
                    {message.data?.type === 'chart' && (
                      <div className="message-chart">
                        {/* Chart visualization would go here */}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your finances..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiChat;