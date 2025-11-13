import React, { useState, useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Address",
      content: "7577 Central Parke Blvd Mason, OH 45040",
      href: "https://www.google.com/maps/search/?api=1&query=7577+Central+Parke+Blvd,+Mason,+OH+45040",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiMail,
      title: "Email",
      content: "erkinbay@erixconsulting.com",
      href: "mailto:erkinbay@erixconsulting.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+1 469 833 0078",
      href: "tel:+14698330078",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      content: "Mon - Fri : 09 AM - 09 PM",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4 md:mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Do you have any questions? Send us a message, and we will get back to you shortly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`lg:w-2/3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                     Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Send your message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <FiSend className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:w-1/3 space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-6">
              Our Contact Info
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="group block bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 text-sm break-words">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
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
    </div>
  );
};

export default Contact;
