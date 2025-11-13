import React, { useState, useEffect, useRef } from "react";
import {
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaRobot,
  FaCheckDouble,
} from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp?: string;
}

interface ChatWidgetProps {
  isAuthenticated: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          sender: "bot",
          text: "Hi! How can I assist you today?",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages([welcomeMessage]);
      }, 500);
    }
  }, [isOpen]);

  const handleSend = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!input.trim() || isLoading) return;

    if (!isAuthenticated) {
      const authMessage: Message = {
        sender: "bot",
        text: "Please login or register to use the chatbot.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, authMessage]);
      setInput("");
      return;
    }

    const userMessage: Message = {
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse: Message = {
        sender: "bot",
        text: "Bu demo javob. Backend bilan bog'lanish kerak.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSend(e);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 ease-out hover:scale-110 hover:shadow-blue-500/50 hover:rotate-12 group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
        <div
          className={`transform transition-all duration-300 ${
            isOpen ? "rotate-90 scale-75" : "rotate-0 scale-100"
          }`}
        >
          {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        </div>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 left-8 w-96 h-[600px] shadow-2xl rounded-3xl z-50 flex flex-col overflow-hidden transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 transform scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 transform scale-90 translate-y-8 pointer-events-none"
          }`}
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
        }}
      >
        {/* Decorative blur circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative flex items-center justify-between p-5 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center space-x-3 z-10">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                <FaRobot className="text-white text-xl" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-900 animate-pulse"></span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                Eric's Assistant
                <FaCheckDouble className="text-cyan-400 text-xs" />
              </h3>
              <p className="text-xs text-cyan-200 font-medium">
                Online • Responds instantly
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="z-10 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300 hover:rotate-90"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 relative z-10">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end space-x-2 animate-[slideIn_0.4s_ease-out] ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {msg.sender === "bot" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  <FaRobot className="text-white text-sm" />
                </div>
              )}

              <div className="flex flex-col max-w-[75%]">
                <div
                  className={`group relative p-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    ${
                      msg.sender === "user"
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-br-none"
                        : "bg-white/95 backdrop-blur-sm text-gray-800 rounded-bl-none"
                    }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>

                  {/* Decorative gradient border */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      msg.sender === "user"
                        ? "rounded-br-none"
                        : "rounded-bl-none"
                    }`}
                    style={{
                      background:
                        msg.sender === "user"
                          ? "linear-gradient(135deg, rgba(6,182,212,0.5), rgba(59,130,246,0.5))"
                          : "linear-gradient(135deg, rgba(96,165,250,0.3), rgba(34,211,238,0.3))",
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  ></div>
                </div>

                {msg.timestamp && (
                  <span
                    className={`text-xs mt-1 px-2 ${
                      msg.sender === "user"
                        ? "text-cyan-200 text-right"
                        : "text-white/60 text-left"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end space-x-2 justify-start animate-[slideIn_0.4s_ease-out]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <FaRobot className="text-white text-sm" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl rounded-bl-none shadow-lg flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="relative p-5 border-t border-white/10 backdrop-blur-sm z-10">
          <div className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full bg-white/95 backdrop-blur-sm text-gray-900 rounded-full px-6 py-4 pr-16 border-2 border-transparent
                         focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 placeholder:text-gray-400"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center
                         bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:scale-110 hover:rotate-12 
                         transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:rotate-0 shadow-lg"
              disabled={isLoading || !input.trim()}
            >
              <FaPaperPlane size={16} className="transform translate-x-[1px]" />
            </button>

            {/* Glow effect on focus */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
