// src/pages/Login.tsx

import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Django CSRF token kerak bo'ladi, uni 'check-auth' dan olib saqlash kerak
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Muvaffaqiyatli kirganda, sahifani yangilaymiz
        // (yoki AppContext'ni yangilab, bosh sahifaga o'tkazamiz)
        window.location.href = "/";
      } else {
        setError(data.error || "Login yoki parol noto'g'ri");
      }
    } catch (err) {
      setError("Server bilan bog'lanishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-brand-dark-blue">
          Kirish
        </h2>

        {error && (
          <div className="p-3 text-center text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email manzil
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Parol
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kirish
          </button>
          <p className="text-center text-gray-600">
            Hisobingiz yo'qmi?{" "}
            <a
              href="/register"
              className="font-medium text-brand-blue hover:underline"
            >
              Ro'yxatdan o'tish
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
