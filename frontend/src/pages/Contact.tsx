// src/pages/Contact.tsx

import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bu yerga backend'ga yuborish logikasini qo'shasiz
    console.log(formData);
    alert("Xabaringiz yuborildi!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-4">
            Biz bilan bog'laning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Savollaringiz bormi? Bizga xabar yuboring, biz siz bilan tez orada
            bog'lanamiz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Bog'lanish formasi */}
          <div className="lg:w-2/3 bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ismingiz"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email manzilingiz"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Mavzu"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringiz"
                rows={6}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Xabarni yuborish
              </button>
            </form>
          </div>

          {/* Kontakt ma'lumotlari */}
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-2xl font-semibold text-brand-dark-blue">
              Bizning ma'lumotlarimiz
            </h3>
            <div className="flex items-start space-x-4">
              <FiMapPin size={24} className="text-brand-blue mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Manzil</h4>
                <p className="text-gray-600">
                  7577 Central Parke Blvd Mason, OH 45040
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMail size={24} className="text-brand-blue mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <a
                  href="mailto:erkinbay@erixconsulting.com"
                  className="text-gray-600 hover:text-brand-blue"
                >
                  erkinbay@erixconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiPhone size={24} className="text-brand-blue mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">Telefon</h4>
                <a
                  href="tel:+14698330078"
                  className="text-gray-600 hover:text-brand-blue"
                >
                  +1 469 833 0078
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
