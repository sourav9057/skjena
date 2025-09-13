import React from "react";
import "./Projects.css";

import projectImage1 from "../../assets/project_images/sha.jpg";
import projectImage2 from "../../assets/project_images/railgraph.png";
import projectImage3 from "../../assets/project_images/ids.png";

interface Project {
    image: string;
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    techStack?: string[];
}

const projects: Project[] = [
    {
        image: projectImage1,
        title: "Smart Home Automation (IoT)",
        subtitle: "Prof. Sudip Misra, IIT Kharagpur",
        duration: "Aug 2024 – Nov 2024",
        description:
            "Built a smart home prototype with Arduino for RFID-based door access, sensor-driven automation of lighting, fan, and fire alerts, integrated via I2C communication.",
        techStack: ["Arduino", "RFID", "Sensors", "I2C"],
    },
    {
        image: projectImage2,
        title: "Rail Graph: Visualizing Indian Railways Network and Train Flows",
        subtitle: "Prof. Saptarshi Ghosh, IIT Kharagpur",
        duration: "Jan 2024 – May 2024",
        description:
            "Designed a network graph of Indian Railways using scraped station data with Python and NetworkX, highlighting traffic density and flow patterns across routes.",
        techStack: ["Python", "NetworkX", "Data Visualization"],
    },
    {
        image: projectImage3,
        title: "Intrusion Detection Using Machine Learning",
        subtitle: "Prof. Pabitra Mitra, IIT Kharagpur",
        duration: "Mar 2022 – May 2022",
        description:
            "Developed a machine learning system to detect DDoS attacks through network packet analysis using Python, Wireshark, Hadoop MapReduce, and classification models.",
        techStack: ["Python", "ML", "Wireshark", "Hadoop"],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-title-wrapper">
                <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-container">
                {projects.map((project, idx) => (
                    <div className="project-card" key={idx} data-aos="fade-up">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <p className="project-duration">{project.duration}</p>
                        <p className="project-desc">{project.description}</p>
                        {project.techStack && (
                            <div className="project-tech">
                                {project.techStack.map((tech, tIdx) => (
                                    <span className="tech-badge" key={tIdx}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
