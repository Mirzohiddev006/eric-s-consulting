// src/components/ChatWidget.tsx

import React, { useState, useEffect, useRef } from "react";
// Ikonkalarni import qilish (FaRobot - yangi avatar uchun)
import { FaComments, FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";

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
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Xabarlar o'zgarganda pastga skroll qilish
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, isLoading]);

  // Oyna ochilganda chat tarixini yuklash
  useEffect(() => {
    if (isOpen) {
      const fetchChatHistory = async () => {
        setIsLoading(true);
        try {
          // Bu URL sizning Django'dagi 'accounts/urls.py' faylingizdan olingan
          const response = await fetch("/chat-bot");
          if (!response.ok) return;
          const data = await response.json();
          // Salomlashish xabari (Figmadagidek)
          const welcomeMessage = {
            sender: "bot",
            text: "Salom, sizga qanday yordam bera olaman?",
          };
          setMessages([welcomeMessage, ...(data.chat_history || [])]);
        } catch (error) {
          console.error("Chat tarixini yuklashda xatolik:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchChatHistory();
    }
  }, [isOpen]);

  // Xabarni yuborish funksiyasi
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!isAuthenticated) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Chatbotdan foydalanish uchun tizimga kiring yoki ro'yxatdan o'ting.",
        },
      ]);
      setInput("");
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true); // "Yozmoqda..." indikatorini yoqish

    const formData = new FormData();
    formData.append("message", input);
    // CSRF token (agar kerak bo'lsa)

    try {
      const response = await fetch("/chat-bot", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP xatolik! Status: ${response.status}`);
      }

      const data = await response.json();
      data.messages.forEach((msg: { text: string; sender: "bot" }) => {
        setMessages((prev) => [...prev, { sender: "bot", text: msg.text }]);
      });
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Kechirasiz, xabar yuborishda xatolik yuz berdi.",
        },
      ]);
    } finally {
      setIsLoading(false); // "Yozmoqda..." indikatorini o'chirish
    }
  };

  return (
    <>
      {/* Chatni ochish/yopish tugmasi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300 ease-in-out hover:scale-110"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Oynasi (Figmadagidek to'q fon bilan) */}
      <div
        className={`fixed bottom-[calc(4rem+1.5rem)] left-8 w-96 h-[600px] shadow-2xl rounded-2xl z-50 flex flex-col transition-all duration-300 ease-in-out bg-brand-dark-blue
          ${
            isOpen
              ? "opacity-100 transform scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 transform scale-95 -translate-y-4 pointer-events-none"
          }`}
      >
        {/* Oyna Bosh qismi (Header) - Figmadagidek "Last seen" qo'shildi */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <FaRobot className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Eric's Assistant</h3>
              <p className="text-xs text-gray-400">Last seen recently</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Xabarlar maydoni */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end space-x-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Bot avatarkasi (Figmadagidek) */}
              {msg.sender === "bot" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <FaRobot className="text-white" />
                </div>
              )}

              {/* Xabar matni (bubble) */}
              <div
                className={`p-3 rounded-2xl max-w-[80%] break-words shadow-sm
                  ${
                    msg.sender === "user"
                      ? "bg-brand-blue text-white rounded-br-none"
                      : "bg-blue-200 text-gray-900 rounded-bl-none" // Figmadagidek och ko'k
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* "Yozmoqda..." indikatori (avatarka bilan) */}
          {isLoading && (
            <div className="flex items-end space-x-2 justify-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <FaRobot className="text-white" />
              </div>
              <div className="bg-blue-200 text-gray-900 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Xabar kiritish maydoni (Figmadagidek "suzib yuruvchi") */}
        <form onSubmit={handleSend} className="p-4">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-white text-gray-900 rounded-full px-6 py-4 pr-16 border-none
                         focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center
                         text-gray-500 hover:text-brand-blue hover:bg-gray-100 transition-colors
                         disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
