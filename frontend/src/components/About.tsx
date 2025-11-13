import React, { useState, useEffect, useRef } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#103162] via-[#0a1f45] to-[#103162] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Us
          </h2>

          {/* Content Card */}
          <div
            className={`bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 md:space-y-8">
              {/* Paragraph 1 */}
              <div
                className={`relative transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed pl-4">
                  Eric's Consulting LLC was established on March 3, 2023, in
                  Loveland, Ohio, USA. The purpose of creating this company is
                  to provide civil services to the members of the Uzbek
                  community living in America and to the brotherly peoples from
                  the Central Asian region.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div
                className={`relative transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed pl-4">
                  This includes forming business entities, streamlining trucking
                  company operations, and providing a wide range of services
                  including placement assistance, license acquisition, loan
                  support, tax advice, housing services, visa consultations,
                  childcare, and school placement services.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                { label: "Years Experience", value: "2+", icon: "🏆" },
                { label: "Happy Clients", value: "120+", icon: "😊" },
                { label: "Success Rate", value: "95%", icon: "📈" },
                { label: "Services", value: "15+", icon: "⚡" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div
              className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
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
        </div>
      </div>
    </section>
  );
};

export default About;
