import React from "react";
import { GraduationCap } from "lucide-react";
import school from "../images/tmu.jpg";

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-start py-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-6xl font-bold text-white/90 font-['Josefin_Sans'] text-shadow-glow">
            Education Journey
          </h2>

          {/* University Logo */}
          <div className="mt-4 w-16 h-16 mx-auto bg-black/50 rounded-lg border border-[#00ff00]/20 overflow-hidden">
            <img
              src={school}
              alt="Toronto Metropolitan University Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Education Card */}
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border border-[#00ff00]/20 hover:border-[#00ff00]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,255,15,0.2)]">
            <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
              {/* Education Info */}
              <div className="flex-1">
                <GraduationCap className="w-8 h-8 text-[#00ff00] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Science
                </h3>
                <p className="text-xl text-white mb-6">Computer Science</p>

                {/* University & Graduation Info */}
                <div className="space-y-4">
                  <div className="bg-[#00ff00]/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-[#00ff00]/20">
                    <span className="text-white">Toronto Metropolitan University</span>
                  </div>
                  <div className="bg-[#00ff00]/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-[#00ff00]/20">
                    <span className="text-white">Expected Graduation: 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations & Skills */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Specializations & Skills
              </h4>
              <div className="space-y-3">
                {[
                  "Web Development (Angular, React)",
                  "Machine Learning & AI",
                  "Data Science & Analytics",
                  "Data Structures & Algorithms",
                  "HTML, CSS, JavaScript",
                  "Statistical Analysis",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#00ff00]/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#00ff00]/20 hover:border-[#00ff00]/40 transition-all duration-300"
                  >
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework Description */}
            <div className="mt-8 bg-black/30 rounded-xl p-6 border border-[#00ff00]/10">
              <p className="text-white leading-relaxed text-shadow-subtle">
                Currently pursuing my Computer Science degree with a focus on
                programming and machine learning. My coursework includes
                building dynamic web applications, exploring AI algorithms, and
                analyzing complex datasets. I've developed strong problem-solving
                skills through algorithmic challenges and practical projects,
                preparing me for real-world technology applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
