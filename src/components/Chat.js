import React, { useState } from 'react';

const Chat = () => {
  // Simulated users: Buyer and Seller
  const buyer = "Buyer";
  const seller = "Seller";

  // State to hold messages
  const [messages, setMessages] = useState([
    { user: seller, message: "Hi, how can I help you?" },
    { user: buyer, message: "I am interested in the product. Is it available?" },
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Handle message submission
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { user: buyer, message: newMessage },
      ]);
      setNewMessage(''); // Clear input field
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Chat with Seller</h2>

      <div className="space-y-4 h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-md ${msg.user === buyer ? 'bg-blue-100 text-right' : 'bg-green-100 text-left'}`}>
            <p className="font-medium">{msg.user}:</p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-blue-500 text-white p-3 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
