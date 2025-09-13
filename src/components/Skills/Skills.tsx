import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const skillSections = [
        {
            title: "Programming Languages",
            skills: ["C", "C++", "Python", "Java", "Kotlin", "Dart", "JavaScript", "HTML", "CSS", "SQL"],
        },
        {
            title: "Frameworks & Libraries",
            skills: ["Node.js", "React", "Flutter", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "NetworkX"],
        },
        {
            title: "Database & Cloud",
            skills: ["MySQL", "MongoDB", "Firebase", "AWS", "MS Azure", "GCP"],
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "Docker", "VirtualBox", "Jupyter Notebook"],
        },
        {
            title: "IDEs & Environments",
            skills: ["VS Code", "Windsurf", "PyCharm", "Android Studio", "Netbeans"],
        },
        {
            title: "Networking & Security Tools",
            skills: ["Wireshark", "Nmap", "Nslookup", "Arp", "Burpsuite", "Metasploit", "Netstat"],
        },
        {
            title: "Operating Systems",
            skills: ["Windows", "Ubuntu", "Kali Linux", "Android"],
        },
        {
            title: "Soft Skills",
            skills: ["Critical Thinking", "Attention to Details", "Problem Solving", "Communication", "Collaboration"],
        },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="skills-title-wrapper" data-aos="fade-up">
                    <h2 className="skills-title">Skills</h2>
                    <p className="skills-subtitle">Technologies & strengths I have worked with</p>
                </div>

                {skillSections.map((section, index) => (
                    <div className="skill-section" key={index} data-aos="fade-up">
                        <h3 className="skill-category">{section.title}</h3>
                        <div className="skill-grid">
                            {section.skills.map((skill, idx) => (
                                <div
                                    className="skill-card"
                                    key={idx}
                                    data-aos="zoom-in"
                                    data-aos-delay={(idx % 6) * 100}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
