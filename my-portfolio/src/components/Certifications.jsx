import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import powerPlatformLogo from '../images/microsoft.png'; // Make sure to add the logo image path

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Power Platform Fundamentals",
      issuer: "Microsoft",
      logo: powerPlatformLogo,
      date: "January 2025",
      description: "Certified in Microsoft Power Platform, demonstrating expertise in Power Apps, Power Automate, Power BI, and Dataverse for building end-to-end business solutions.",
      details: [
        "Developed custom Power Apps to automate workflows and enhance business processes.",
        "Implemented Power Automate to streamline tasks, improving operational efficiency.",
        "Utilized Power BI for data analysis and visualization to aid decision-making."
      ]
    }
    // You can add more certifications here as needed
  ];

  const handleImageError = (e) => {
    e.target.src = '/api/placeholder/48/48';
  };

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white">Certifications</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-400/20">
            <div className="timeline-line"></div>
          </div>

          <div className="space-y-16">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                className="relative pl-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 1 }}
              >
                <div className="timeline-node absolute left-6 top-0 -translate-x-1/2"></div>
                
                <div className="timeline-connector"></div>

                <div className="timeline-content">
                  <div className="timeline-date">
                    {certification.date}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo - now smaller and properly positioned */}
                    {certification.logo && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-blue-400/30 bg-black p-2">
                        <img 
                          src={certification.logo}
                          alt={`${certification.issuer} logo`}
                          className="w-full h-full object-contain"
                          onError={handleImageError}
                        />
                      </div>
                    )}

                    {/* Issuer info - now better aligned with logo */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white">
                        {certification.title}
                      </h3>
                      <div className="text-xl text-white/90">
                        {certification.issuer}
                      </div>
                    </div>
                  </div>

                  <motion.p
                    className="text-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.3, duration: 1 }}
                  >
                    {certification.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.6, duration: 1 }}
                  >
                    {certification.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-white leading-relaxed pl-4 border-l border-blue-400/30 hover:border-blue-400/60 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
