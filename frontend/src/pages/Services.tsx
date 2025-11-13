import React, { useState, useEffect, useRef } from "react";
import { FiUser } from "react-icons/fi";

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
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/services-data/"
        );
        const data = await response.json();
        const servicesData = data.services || [];
        setServices(servicesData);
        setVisibleCards(new Array(servicesData.length).fill(false));
      } catch (error) {
        console.error("Servislarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [services]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive legal and consulting services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div className="p-6 sm:p-8 md:p-10">
                {/* Service Header */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Team Members */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                      <FiUser className="text-white" />
                    </span>
                    Our Expert Team
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {service.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-white shadow-md group-hover:ring-blue-500 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center ring-4 ring-white shadow-md">
                            <FiUser size={24} className="text-white" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors truncate">
                            {member.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-brand-blue line-clamp-2">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative gradient bar */}
              <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 animate-[fadeInUp_1s_ease-out]">
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Interested in our services? Reach out to us for a consultation!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
