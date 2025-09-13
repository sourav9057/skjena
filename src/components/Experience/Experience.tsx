import React from "react";
import "./Experience.css";
import { Briefcase, Building2, Calendar } from "lucide-react";
import BMT from "../../assets/certificates/BMT_InternCertificate.pdf";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="about-title-wrapper">
                <h2 className="about-title">Experience</h2>
            </div>

            <div className="exp-container">
                {/* Experience 1 */}
                <div className="exp-card" data-aos="fade-up">
                    <div className="exp-header">
                        <h3 className="exp-role">
                            <Briefcase size={20} className="exp-icon" />
                            Web & Mobile Application Developer
                        </h3>
                        <p className="exp-duration">
                            <Calendar size={16} className="exp-icon" /> Aug 2022 – Dec 2024
                        </p>
                    </div>
                    <p className="exp-company">
                        <Building2 size={16} className="exp-icon" /> Freelancer – Remote
                    </p>
                    <ul className="exp-list">
                        <li>
                            Built web and mobile apps using modern tech stacks for clients in
                            education and e-commerce sectors.
                        </li>
                        <li>
                            Specialized in full-stack development using React.js,
                            Node.js, MongoDB, Firebase, and Android.
                        </li>
                        <li>
                            Designed scalable APIs, responsive UI/UX, and integrated services
                            like payment gateways and cloud hosting.
                        </li>
                        <li>
                            Managed deployment using Vercel, Render, and Firebase Hosting,
                            ensuring performance and uptime.
                        </li>
                        <li>
                            Collaborated with clients to gather requirements, iterate on
                            feedback, and provide maintenance and upgrades.
                        </li>
                    </ul>
                </div>

                {/* Experience 2 */}
                <div className="exp-card" data-aos="fade-up">
                    <div className="exp-header">
                        <h3 className="exp-role">
                            <Briefcase size={20} className="exp-icon" />
                            Web Developer Intern
                        </h3>
                        <p className="exp-duration">
                            <Calendar size={16} className="exp-icon" /> May 2022 – Jun 2022
                        </p>
                    </div>
                    <p className="exp-company">
                        <Building2 size={16} className="exp-icon" /> Brainy Monkeys
                        Technologies Pvt. Ltd. – Remote (Pune, Maharashtra)
                    </p>
                    <ul className="exp-list">
                        <li>
                            Developed responsive UI/UX using HTML, CSS, JavaScript, and jQuery
                            for real-world client projects.
                        </li>
                        <li>
                            Worked with backend teams to integrate APIs and improve
                            performance across browsers and devices.
                        </li>
                        <li>
                            Attended weekly technical meetings and contributed ideas for
                            upcoming features and improvements.
                        </li>
                    </ul>
                    <a
                        href={BMT}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-btn"
                    >
                        View Certificate
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
