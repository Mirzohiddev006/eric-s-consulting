// src/pages/Services.tsx

import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";

// Servis va a'zolar uchun interfeyslar
interface Member {
  name: string;
  role: string;
  image: string | null;
}

interface Service {
  id: number;
  name: string;
  description: string;
  members: Member[];
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Backend'dan ma'lumotlarni olish (api_views.py dan)
    const fetchServices = async () => {
      try {
        // Django serveringiz manzilini kiriting
        const response = await fetch(
          "http://localhost:8000/api/services-data/"
        );
        const data = await response.json();
        setServices(data.services || []);
      } catch (error) {
        console.error("Servislarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Yuklanmoqda...</div>;
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-4">
            Bizning Xizmatlarimiz
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biz sizning ehtiyojlaringizga moslashtirilgan keng qamrovli yuridik
            va konsalting xizmatlarini taklif etamiz.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                {service.name}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-xl font-semibold text-brand-dark-blue mb-4">
                Shu soha bo'yicha mutaxassislar:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.members.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <FiUser size={24} className="text-gray-500" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-brand-blue">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
