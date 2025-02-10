import React from 'react';
import { Laptop, Plane, Apple, Globe, Diamond, ShoppingCart, Music, Skull, Folder, Pen } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import { FaGithub } from 'react-icons/fa';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const pieData = {
  MyTranslate: { labels: ['Python'], datasets: [{ data: [100], backgroundColor: ['#36A2EB'] }] },
  AHealthyLifestyle: { labels: ['Python'], datasets: [{ data: [100], backgroundColor: ['#36A2EB'] }] },
  StockFlow: { labels: ['JavaScript', 'Python', 'TypeScript', 'Other'], datasets: [{ data: [43.9, 37.5, 10.2, 8.4], backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#9966FF'] }] },
  UntilDawn: { labels: ['Python'], datasets: [{ data: [100], backgroundColor: ['#36A2EB'] }] },
  War: { labels: ['Rust'], datasets: [{ data: [100], backgroundColor: ['#D67D3E'] }] },
  Flight: { labels: ['Java'], datasets: [{ data: [100], backgroundColor: ['#007396'] }] },
  Room: { labels: ['Python', 'HTML', 'Other'], datasets: [{ data: [53.4, 42.3, 4.3], backgroundColor: ['#36A2EB', '#E34F26', '#9966FF'] }] },
  Micro: { labels: ['HTML', 'jQuery', 'MySQL', 'Angular', 'Other'], datasets: [{ data: [30.1, 18.7, 15.6, 25.3, 10.3], backgroundColor: ['#E34F26', '#0769AD', '#4479A1', '#DD0031', '#9966FF'] }] },
  Site: { labels: ['HTML', 'CSS', 'Other'], datasets: [{ data: [50.1, 47.0, 2.9], backgroundColor: ['#E34F26', '#264DE4', '#9966FF'] }] }
};

const projects = [
  { name: 'StockFlow', icon: <Laptop className="w-5 h-5" />, description: 'Full-stack inventory management application.', githubLink: 'https://github.com/shaanstackz/StockFlow', chartData: pieData.StockFlow },
  { name: 'TorontoMicro', icon: <ShoppingCart className="w-5 h-5" />, description: 'Customer service web application.', chartData: pieData.Micro },
  { name: 'RoomMate', icon: <Pen className='w-5 h-5' />, description: 'Meeting room booking system using AI.', githubLink: 'https://github.com/shaanstackz/FGF-Hackathon', chartData: pieData.Room },
  { name: 'Site Portfolio', icon: <Folder className="w-5 h-5" />, description: 'This specific website itself.', githubLink: 'https://github.com/shaanstackz/Web-Portfolio', chartData: pieData.Site },
  { name: 'Flight Reservation System', icon: <Plane className="w-5 h-5" />, description: 'Flight Reservation System developed using Java.', githubLink: 'https://github.com/shaanstackz/Flight-Reservation-System', chartData: pieData.Flight },
  { name: 'A Healthy Lifestyle', icon: <Apple className="w-5 h-5" />, description: 'An app promoting a healthy lifestyle.', githubLink: 'https://github.com/shaanstackz/A-Healthy-Lifestyle', chartData: pieData.AHealthyLifestyle },
  { name: 'MyTranslate', icon: <Globe className="w-5 h-5" />, description: 'English-Dutch translation app.', githubLink: 'https://github.com/shaanstackz/MyTranslate', chartData: pieData.MyTranslate },
  { name: 'Until Dawn Horror Game', icon: <Skull className="w-5 h-5" />, description: 'Dark horror game inspired by "Until Dawn."', githubLink: 'https://github.com/shaanstackz/until-dawn-like-game', chartData: pieData.UntilDawn },
  { name: 'War Card Game', icon: <Diamond className="w-5 h-5" />, description: 'Classic card game created in Rust.', githubLink: 'https://github.com/shaanstackz/War-Card', chartData: pieData.War }
];

const Portfolio = () => {
  const sortedProjects = [...projects].sort((a, b) => (b.chartData.labels?.length || 0) - (a.chartData.labels?.length || 0));

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          My Projects
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 min-h-[48px]">
                  {project.description}
                </p>

                {project.githubLink ? (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-6"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <p className="text-gray-500 italic mb-6">Private Repository</p>
                )}

                {project.chartData && (
                  <div className="mt-4 mx-auto" style={{ height: '200px' }}>
                    <Pie 
                      data={project.chartData} 
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              padding: 20,
                              usePointStyle: true,
                              font: {
                                size: 11
                              }
                            }
                          },
                          tooltip: {
                            callbacks: {
                              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
                            },
                            padding: 12
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;