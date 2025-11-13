import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dilfuza Abdullaeva",
    role: "Expert in Digital marketing, business consultant",
    image: "/team/dilfuza.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ulugbek Shukurov",
    role: "Expert in Criminal law, immigration consultant, Lawyer",
    image: "/team/Ulug'bek.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Khushnazar Juraev",
    role: "Lawyer, Expert, Immigration Consultant",
    image: "/team/Khushnazar.png",
    color: "from-blue-500 to-cyan-500",
  },
];

const Team: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(teamMembers.length).fill(false)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-center mx-auto animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4 md:mb-6">
            Meet Our Highly Experienced Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Our team is not only skilled but also dedicated to providing the
            best service possible.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-700 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Social Icons Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 md:p-8 relative">
                  {/* Decorative gradient bar */}
                  <div
                    className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${member.color} group-hover:w-full transition-all duration-700`}
                  ></div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-dark-blue mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-blue font-medium leading-relaxed">
                    {member.role}
                  </p>

                  {/* Animated corner accent */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${member.color} opacity-10 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500`}
                  ></div>
                </div>

                {/* Badge */}
                <div
                  className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${member.color} text-white text-xs font-bold rounded-full shadow-lg transform translate-x-32 group-hover:translate-x-0 transition-all duration-500 delay-100`}
                >
                  Expert
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 animate-[fadeInUp_1s_ease-out]">
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Want to work with our expert team?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            Contact Our Team
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
      `}</style>
    </section>
  );
};

export default Team;
