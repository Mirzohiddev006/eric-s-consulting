import React from "react";

const teamMembers = [
  {
    name: "Dilfuza Abdullaeva",
    role: "Expert in Digital marketing, business consultant, visa support, and immigration consultant",
    image: "/team/dilfuza.jpg",
  },
  {
    name: "Ulugbek Shukurov",
    role: "Expert in Criminal law, immigration consultant, Lawyer",
    image: "/team/ulugbek.jpg",
  },
  {
    name: "Khushnazar Juraev",
    role: "Lawyer, Expert, Immigration Consultant",
    image: "/team/khushnazar.jpg",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">
            Meet Our Highly Experienced Team
          </h2>
          <p className="text-lg text-gray-600">
            Our team is not only skilled but also dedicated to providing the
            best service possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-blue font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
