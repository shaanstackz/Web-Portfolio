import React from 'react';
import '../styles/App.css'; // Ensure this path is correct

const programmingLanguages = [
    { name: 'Java', image: require('../images/java.png') },
    { name: 'Python', image: require('../images/python.png') },
    { name: 'C/C++/C#', image: require('../images/csharp.png') },
    { name: 'SQL', image: require('../images/sql.png') },
    { name: 'JavaScript', image: require('../images/javascript.png') },
    { name: 'HTML/CSS', image: require('../images/html_css.png') },
    { name: 'VBA', image: require('../images/vba.png') },
    { name: 'Bash', image: require('../images/bash.png') },
    { name: 'Elixir', image: require('../images/elixir.png') },
    { name: 'Rust', image: require('../images/rust.png') },
];

const frameworksAndTools = [
    { name: '.NET', image: require('../images/dotnet.png') },
    { name: 'React', image: require('../images/react.png') },
    { name: 'Node.js', image: require('../images/nodejs.png') },
    { name: 'MongoDB', image: require('../images/mongodb.png') },
    { name: 'AngularJS', image: require('../images/angularjs.png') },
];

const TechStack = () => {
    return (
        <div className="tech-stack">
            <h2>Programming Languages</h2>
            <div className="tech-category">
                {programmingLanguages.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.image} alt={tech.name} className="tech-image" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
            <h2>Frameworks and Tools</h2>
            <div className="tech-category">
                {frameworksAndTools.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.image} alt={tech.name} className="tech-image" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;