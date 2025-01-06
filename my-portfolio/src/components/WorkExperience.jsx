import React from 'react';
import fgfLogo from '../images/fgf.png';
import ttcLogo from '../images/ttc.png';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "FGF Brands",
      logo: fgfLogo,
      date: "May 2024 - Present",
      location: "North York, ON, Canada",
      achievements: [
        "Developed mobile-responsive APIs using .NET for a full-stack web application utilized by bakeries for customer support, asset tracking, inventory management, and order management",
        "Utilized Kendo UI to build dynamic, interactive front-end components, including data grids, dropdowns, and date pickers, enhancing the user experience and improving form usability",
        "Designed and implemented custom action controls and features to meet specific business requirements, enhancing user workflows and improving operational efficiency"
      ]
    },
    {
      title: ".NET Software Developer",
      company: "FGF Brands",
      logo: fgfLogo,
      date: "May 2023 - December 2023",
      location: "North York, ON, Canada",
      achievements: [
        "As a .NET Software Developer at FGF Brands, I excelled in a dynamic role where I played a pivotal part in enhancing production planning processes for multiple bakeries across Canada and the United States. Key achievements include implementing over 15 critical features onto a high-traffic production planning webpage using ASP.NET and SQL Server Management Studio, aligning closely with business requirements. Additionally, I spearheaded the integration of time zone functionalities into various applications, ensuring seamless operations for bakeries across different regions. Moreover, I showcased my expertise in user interface design by leading the development of a live video wall application with AngularJS, delivering innovative video wall filters. I also demonstrated my proficiency in C# by developing an application that effectively alerted users to weight discrepancies for specific items, contributing to quality assurance and operational efficiency. Furthermore, I played a vital role in database management, executing multiple modifications including schema alterations, data migrations, and performance optimizations. I prioritized software quality by conducting rigorous unit, integration, and regression testing, ensuring the reliability and functionality of implemented solutions. In addition to my technical contributions, I collaborated closely with the mobile application development team, providing valuable assistance in migrating web applications to Android smartphones. Through proactive problem-solving and collaboration, I consistently delivered impactful solutions, contributing to the success and growth of FGF Brands."
      ]
    },
    {
      title: "Software Developer",
      company: "Toronto Transit Commission (TTC)",
      logo: ttcLogo,
      date: "May 2023 - August 2023",
      location: "Toronto, ON, Canada",
      achievements: [
        "During my tenure as a Programmer at TTC, I played a vital role in enhancing operational efficiency and streamlining processes through innovative software solutions. I developed an onboarding program using Microsoft Visual Basic to facilitate the seamless integration of individuals entering and exiting the data center, ensuring a smooth transition process. Additionally, I spearheaded the implementation of over 15 new features on the operator web pages of the TTC intranet, focusing on regular maintenance checks and mainframe operations. Leveraging .NET Frameworks, C#, and HTML, I delivered robust solutions that improved operational workflows and user experience. Recognizing the importance of effective onboarding, I created a Python program tailored for new co-ops joining the TTC workforce, further enhancing the onboarding process and fostering a conducive learning environment. Furthermore, I contributed to software quality assurance by developing and executing test cases to identify and resolve bugs on various web pages of the TTC intranet, ensuring optimal performance and reliability. In addition to my programming responsibilities, I demonstrated my expertise in user interface design by designing the UI of a data center management application using AngularJS, optimizing usability and functionality. Through my proactive approach and technical expertise, I played a key role in driving efficiency and innovation within the TTC, contributing to its mission of providing exceptional public transportation services."
      ]
    }
  ];

  const handleImageError = (e) => {
    e.target.src = '/api/placeholder/48/48';
  };

  return (
    <section id="work-experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white">Work Experience</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-green-400/20">
            <div className="timeline-line"></div>
          </div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-24">
                <div className="timeline-node absolute left-6 top-0 -translate-x-1/2"></div>
                
                <div className="timeline-connector"></div>

                <div className="timeline-content">
                  <div className="timeline-date">
                    {experience.date}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo - now smaller and properly positioned */}
                    {experience.logo && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-green-400/30 bg-black p-2">
                        <img 
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                          onError={handleImageError}
                        />
                      </div>
                    )}

                    {/* Company info - now better aligned with logo */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white">
                        {experience.title}
                      </h3>
                      <div className="text-xl text-white/90">
                        {experience.company}
                      </div>
                      <div className="text-sm text-white/70">
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="text-white leading-relaxed pl-4 border-l border-green-400/30 hover:border-green-400/60 transition-colors duration-300"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;