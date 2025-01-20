import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Globe, 
  Laptop, 
  Github, 
  ExternalLink,
  Gamepad2,
  Library,
  Languages,
  Heart,
  Plane
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const GITHUB_USERNAME = 'shaanstackz';
const REPOS = ['StockFlow', 'Web-Portfolio', 'until-dawn-like-game', 'War-Card', 'MyTranslate', 'A-Healthy-Lifestyle', 'Flight-Reservation-System'];

// More distinctive colors for better visibility
const LANGUAGE_COLORS = {
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  TypeScript: '#3178C6',
  CSS: '#563D7C',
  HTML: '#E34C26',
  PHP: '#777BB4',
  Java: '#007396',
  Ruby: '#CC342D',
  Default: '#6B7280'
};

// Helper function to format project name
const formatProjectName = (name) => {
  // Check if 'name' is a valid string
  if (typeof name !== 'string' || name.trim() === '') {
    return '';
  }

  return name
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .split(' ') // Split by spaces
    .map(word => {
      // Ensure that word is a non-empty string
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter
      }
      return ''; // Handle any empty words, though it shouldn't happen with the .split(' ') approach
    })
    .join(' '); // Join the words back into a single string
};


const getProjectIcon = (projectName) => {
  if (!projectName) {
    return <Laptop className="w-5 h-5" />; // Default icon for undefined names
  }

  const name = projectName.toLowerCase();
  switch (name) {
    case 'stockflow':
      return <BarChart3 className="w-5 h-5" />;
    case 'web-portfolio':
      return <Globe className="w-5 h-5" />;
    case 'until-dawn-like-game':
      return <Gamepad2 className="w-5 h-5" />;
    case 'war-card':
      return <Library className="w-5 h-5" />;
    case 'mytranslate':
      return <Languages className="w-5 h-5" />;
    case 'a-healthy-lifestyle':
      return <Heart className="w-5 h-5" />;
    case 'flight-reservation-system':
      return <Plane className="w-5 h-5" />;
    default:
      return <Laptop className="w-5 h-5" />;
  }
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const projectData = await Promise.all(
          REPOS.map(async (repo) => {
            const repoResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`
            );
            const repoData = await repoResponse.json();

            const languageResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/languages`
            );
            const languageData = await languageResponse.json();

            const totalBytes = Object.values(languageData).reduce((a, b) => a + b, 0);

            const languages = Object.entries(languageData).map(([name, bytes]) => ({
              name,
              value: Number(((bytes / totalBytes) * 100).toFixed(1)),
              color: LANGUAGE_COLORS[name] || LANGUAGE_COLORS.Default
            }));

            return {
              ...repoData,
              languages,
            };
          })
        );

        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div> {/* Timeline line */}
          <div className="space-y-8 pl-10">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-green-500">
                    {getProjectIcon(project.name)}
                  </div>
                  <h3 className="text-xl font-bold">{formatProjectName(project.name)}</h3>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <div className="w-full h-64 flex items-center justify-center">
                      <PieChart width={300} height={250}>
                        <Pie
                          data={project.languages}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, value }) => `${value}%`}
                        >
                          {project.languages.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} stroke="#fff" strokeWidth={2} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                      </PieChart>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {project.languages.map((lang) => (
                        <div key={lang.name} className="flex items-center gap-2 p-2 rounded">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: lang.color }} />
                          <span className="text-sm">{lang.name} ({lang.value}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
