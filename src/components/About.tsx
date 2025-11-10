import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-dark-blue">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8">About Us</h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Eric's Consulting LLC was established on March 3, 2023, in Loveland,
            Ohio, USA. The purpose of creating this company is to provide civil
            services to the members of the Uzbek community living in America and
            to the brotherly peoples from the Central Asian region.
          </p>
          <p>
            This includes forming business entities, streamlining trucking
            company operations, and providing a wide range of services including
            placement assistance, license acquisition, loan support, tax advice,
            housing services, visa consultations, childcare, and school
            placement services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
