// src/App.tsx

import React, { useState } from "react";
import { User } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  // --- SIMULATED DJANGO CONTEXT ---
  const [user, setUser] = useState<User>({
    isAuthenticated: true,
    isSuperuser: true,
    isStaff: true,
    firstName: "Admin",
    lastName: "User",
  });
  const [hasUnreadMessages, setHasUnreadMessages] = useState(true);
  const [openRequests, setOpenRequests] = useState(true);
  const [activePage, setActivePage] = useState("home");
  // ------------------------------------

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        user={user}
        hasUnreadMessages={hasUnreadMessages}
        openRequests={openRequests}
        activePage={activePage}
      />

      {/* Hero komponenti o'zining to'q ko'k foniga ega */}
      <Hero />

      {/* Qolgan barcha kontent oq fonda */}
      <main className="bg-white">
        <Features />
        <About />
        <Team />
      </main>

      <Footer />

      <ChatWidget isAuthenticated={user.isAuthenticated} />
    </div>
  );
}

export default App;
