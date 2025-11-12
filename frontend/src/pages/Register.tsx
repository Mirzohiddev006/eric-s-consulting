// src/pages/Register.tsx

import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/'; // Muvaffaqiyatli ro'yxatdan o'tgach, bosh sahifaga o'tish
      } else {
        setError(data.error || 'Ro\'yxatdan o\'tishda xatolik');
      }
    } catch (err) {
      setError('Server bilan bog\'lanishda xatolik yuz berdi.');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-brand-dark-blue">Ro'yxatdan o'tish</h2>
        
        {error && (
          <div className="p-3 text-center text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="first_name" onChange={handleChange} placeholder="Ism"
                   className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" required />
            <input type="text" name="last_name" onChange={handleChange} placeholder="Familiya"
                   className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          </div>
          <input type="email" name="email" onChange={handleChange} placeholder="Email manzil"
                 className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" required />
          <input type="tel" name="phone_number" onChange={handleChange} placeholder="Telefon raqam"
                 className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          <input type="password" name="password" onChange={handleChange} placeholder="Parol"
                 className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" required />
          
          <button
            type="submit"
            className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ro'yxatdan o'tish
          </button>
          
          <p className="text-center text-gray-600">
            Hisobingiz bormi?{' '}
            <a href="/login" className="font-medium text-brand-blue hover:underline">
              Kirish
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;