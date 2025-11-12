// src/App.tsx

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { User } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

// Sahifalarni import qilish
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Profile va Admin sahifalarni ham keyinroq shu yerga qo'shish mumkin

// Bu funksiya Django'dagi 'active_page' logikasini almashtiradi
const getActivePage = (pathname: string) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/service")) return "services";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/login")) return "login";
  // ... va hokazo
  return "";
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);

  const location = useLocation();
  const activePage = getActivePage(location.pathname);

  // Sayt ochilganda bir marta backend'dan foydalanuvchi ma'lumotlarini tekshiradi
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/check-auth/");
        const data = await response.json();

        if (data.isAuthenticated) {
          setUser(data.user);
          setHasUnreadMessages(data.hasUnreadMessages);
          setOpenRequests(data.openRequests);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth tekshirishda xatolik:", error);
        setUser(null);
      }
    };
    checkAuth();
  }, []); // [] - faqat bir marta ishga tushadi

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        user={user}
        hasUnreadMessages={hasUnreadMessages}
        openRequests={openRequests}
        activePage={activePage}
      />
      {/* Asosiy kontent - URL'ga qarab o'zgaradi */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
      <ChatWidget isAuthenticated={!!user} />{" "}
      {/* user bor bo'lsa true, yo'q bo'lsa false */}
    </div>
  );
}

export default App;
