import React, { useState } from "react";

const Chatbox = () => {
  const [contacts, setContacts] = useState([
    { name: "James Johnson", avatar: "https://i.pravatar.cc/40?img=1", lastMessage: "How are you?", time: "5 min", unseenCount: 3 },
    { name: "Maria Hernandez", avatar: "https://i.pravatar.cc/40?img=2", lastMessage: "See you tomorrow!", time: "10 min", unseenCount: 0 },
    { name: "Robert Smith", avatar: "https://i.pravatar.cc/40?img=3", lastMessage: "Let’s schedule a call.", time: "15 min", unseenCount: 5 },
    { name: "Anna Williams", avatar: "https://i.pravatar.cc/40?img=4", lastMessage: "I’ll send the document.", time: "20 min", unseenCount: 1 },
  ]);

  const [currentContact, setCurrentContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim() && currentContact) {
      setMessages([...messages, { sender: "You", text: newMessage, time: "Just now" }]);
      setNewMessage("");
    }
  };

  const selectContact = (contact) => {
    setCurrentContact(contact);

    // Reset unseen messages for the selected contact
    setContacts((prevContacts) =>
      prevContacts.map((c) =>
        c.name === contact.name ? { ...c, unseenCount: 0 } : c
      )
    );

    // Mock messages for the selected contact
    setMessages([
      { sender: contact.name, text: "Hey, how are you doing?", time: "5 min ago" },
      { sender: "You", text: "I’m good! How about you?", time: "3 min ago" },
      { sender: contact.name, text: "Pretty good! Thanks for asking.", time: "2 min ago" },
    ]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} transition-colors`}>
      <div className="flex h-full">
        {/* Sidebar */}
        <div
  className={`w-1/4 ${
    isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
  } border-r transition-colors`}
>
  <div className="p-4">
    <input
      type="text"
      placeholder="Search contacts..."
      className={`w-full p-2 border rounded-full focus:outline-none ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  <div
    className="p-4 overflow-y-auto"
    style={{ maxHeight: "calc(100vh - 64px)" }} // Adjust height to make the list scrollable
  >
    {filteredContacts.map((contact, index) => (
      <div
        key={index}
        className={`flex items-center p-2 mb-3 ${
          isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
        } cursor-pointer rounded-lg transition-all`}
        onClick={() => selectContact(contact)}
      >
        <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-1">
          <h2 className="font-semibold">{contact.name}</h2>
          <p className="text-sm truncate">{contact.lastMessage}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs">{contact.time}</p>
          {contact.unseenCount > 0 && (
            <span
              className={`text-xs bg-red-500 text-white px-2 py-1 rounded-full`}
            >
              {contact.unseenCount}
            </span>
          )}
        </div>
      </div>
    ))}
    {filteredContacts.length === 0 && (
      <p className={`text-center mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>No contacts found</p>
    )}
  </div>
</div>


        {/* Chat Window */}
        <div className={`w-3/4 flex flex-col ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors relative`}>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          {currentContact ? (
            <>
              <div className="p-4 flex items-center bg-gray-300 dark:bg-gray-800 text-black dark:text-white">
                <img src={currentContact.avatar} alt={currentContact.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h2 className="font-semibold">{currentContact.name}</h2>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "You"
                          ? "bg-blue-500 text-white"
                          : isDarkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 text-gray-400">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`p-4 flex items-center ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } border-t transition-colors`}
              >
                <button
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition-transform transform hover:scale-110 mr-3"
                  title="Emoji"
                >
                  😊
                </button>
                <button
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition-transform transform hover:scale-110 mr-3"
                  title="Attach File"
                >
                  📎
                </button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={`flex-1 border rounded-full p-2 focus:outline-none focus:ring-2 ${
                    isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                  }`}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 ml-3 transition-colors"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-300">
              Select a contact to view messages.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
