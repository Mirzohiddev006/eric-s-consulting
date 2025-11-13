import React, { useState, useEffect, useRef } from "react";
import {
  FaCalendarCheck,
  FaComments,
  FaHandshake,
  FaTags,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const featureList = [
  {
    icon: FaCalendarCheck,
    title: "Easy Process",
    description:
      "At our consulting company, we make success simple. Our process is clear, fast, and focused — from understanding your goals to delivering practical, measurable results.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaComments,
    title: "Fast Solution",
    description:
      "We deliver fast, effective solutions tailored to your business needs. Our team analyzes challenges quickly and provides clear, actionable strategies that bring results without delay.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaHandshake,
    title: "Transparency",
    description:
      "Transparency is at the heart of everything we do. We keep you informed at every stage from planning to execution with honest communication and clear reporting.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaTags,
    title: "Affordable Service",
    description:
      "We provide high-quality consulting services at prices that fit your budget. Our goal is to deliver maximum value without unnecessary costs.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "Your data and trust are our priority. We maintain the highest standards of security and reliability in all our consulting services, ensuring your business information stays protected.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaChartLine,
    title: "Growth Focused",
    description:
      "We don't just solve problems — we help you grow. Our strategies are designed to drive sustainable business growth and long-term success for your organization.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const Features: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(featureList.length).fill(false)
  );
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4 md:mb-6">
            Main Reasons Why People Choose Us!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Choosing the right consulting company is critical to peace of mind
            and financial security. We stand out from the crowd with our
            unwavering commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2
                  ${
                    visibleCards[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="text-white text-2xl md:text-3xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark-blue mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 animate-[fadeInUp_1s_ease-out]">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
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

export default Features;
