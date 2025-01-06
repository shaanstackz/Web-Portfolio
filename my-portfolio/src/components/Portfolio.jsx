import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const GITHUB_USERNAME = "shaanstackz";
const REPOS = ["StockFlow", "Web-Portfolio", "until-dawn-like-game", "War-Card", "MyTranslate", "A-Healthy-Lifestyle", "Flight-Reservation-System"];

const LANGUAGE_COLORS = {
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  TypeScript: "#3178C6",
  CSS: "#563D7C",
  HTML: "#E34C26",
  PHP: "#777BB4",
  Java: "#007396",
  Ruby: "#CC342D",
  Default: "#6B7280",
};

const formatProjectName = (name) => {
  return name
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getProjectIcon = (projectName) => {
  const name = projectName?.toLowerCase();
  switch (name) {
    case "stockflow":
      return <BarChart3 className="w-5 h-5" />;
    case "web-portfolio":
      return <Globe className="w-5 h-5" />;
    case "until-dawn-like-game":
      return <Gamepad2 className="w-5 h-5" />;
    case "war-card":
      return <Library className="w-5 h-5" />;
    case "mytranslate":
      return <Languages className="w-5 h-5" />;
    case "a-healthy-lifestyle":
      return <Heart className="w-5 h-5" />;
    case "flight-reservation-system":
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
              color: LANGUAGE_COLORS[name] || LANGUAGE_COLORS.Default,
            }));

            return {
              ...repoData,
              languages,
            };
          })
        );

        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row gap-6 hover:shadow-xl transition-shadow"
            >
              {/* Pie Chart Section */}
              <div className="flex-1 flex items-center justify-center">
                <PieChart width={200} height={200}>
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
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                </PieChart>
              </div>

              {/* Description Section */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {getProjectIcon(project.name)}
                  {formatProjectName(project.name)}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description || "No description available for this project."}
                </p>
                <div className="flex gap-4">
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
    </section>
  );
};

export default Portfolio;
