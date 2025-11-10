import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatWidgetProps {
  isAuthenticated: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // Fetch chat history when widget opens
  useEffect(() => {
    if (isOpen) {
      const fetchChatHistory = async () => {
        try {
          // This URL is from your 'accounts/urls.py'
          const response = await fetch("/chat-bot");
          if (!response.ok) return;

          const data = await response.json();
          setMessages(data.chat_history || []);
        } catch (error) {
          console.error("Error fetching chat history:", error);
        }
      };
      fetchChatHistory();
    }
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!isAuthenticated) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "You must log in or register to use the chatbot.",
        },
      ]);
      setInput("");
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Logic from index_en.html to send message to backend
    const formData = new FormData();
    formData.append("message", input);
    // Note: Django's CSRF token needs to be handled, often via a cookie or a header.
    // For this example, we assume cookie-based CSRF.

    try {
      const response = await fetch("/chat-bot", {
        method: "POST",
        body: formData,
        // You may need to add a 'X-CSRFToken' header here
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      data.messages.forEach((msg: { text: string; sender: "bot" }) => {
        setMessages((prev) => [...prev, { sender: "bot", text: msg.text }]);
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, there was an error processing your request.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
      >
        <FaComments size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 left-8 w-80 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-2xl">
            <h3 className="font-bold text-lg">Eric's Consulting</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[80%] break-words ${
                    msg.sender === "user"
                      ? "bg-brand-blue text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex p-4 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button
              type="submit"
              className="ml-2 bg-brand-blue text-white p-3 rounded-lg"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
