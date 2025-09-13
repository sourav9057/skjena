import "./About.css";
import { FaCode, FaProjectDiagram, FaTools, FaUsers } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-title-wrapper">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-subtitle">
                        A quick glance at who I am, what I do, and what I bring to the table.
                    </p>
                </div>

                <div className="about-grid">
                    {/* Card 1 */}
                    <div className="about-card">
                        <FaCode className="about-icon" />
                        <h3 className="about-card-title">Who I Am</h3>
                        <p>
                            I’m <strong>Sourav Kumar Jena</strong>, a passionate web & app
                            developer and IIT Kharagpur graduate with a solid foundation in{" "}
                            <strong>software engineering principles</strong>. I love turning
                            ideas into impactful real-world applications.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="about-card">
                        <FaProjectDiagram className="about-icon" />
                        <h3 className="about-card-title">What I Do</h3>
                        <p>
                            My expertise includes{" "}
                            <strong>React, Node.js, Express, MongoDB, and REST APIs</strong>.
                            I’ve built scalable apps, intuitive UIs, and delivered{" "}
                            <strong>end-to-end solutions</strong> for education and
                            e-commerce clients.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="about-card">
                        <FaTools className="about-icon" />
                        <h3 className="about-card-title">Tech Stack</h3>
                        <p>
                            Skilled in <strong>Python, JavaScript, C/C++, SQL, Java</strong>.
                            Experienced with tools like <strong>Git, Docker, Jupyter</strong>,
                            and deployment platforms including{" "}
                            <strong>Vercel, Render, and Firebase</strong>.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="about-card">
                        <FaUsers className="about-icon" />
                        <h3 className="about-card-title">Beyond Code</h3>
                        <p>
                            I value <strong>collaboration, communication</strong>, and a{" "}
                            <strong>growth mindset</strong>. I’ve also worked on projects in{" "}
                            <strong>IoT, Data Science, and Cybersecurity</strong>, blending
                            innovation with practical problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
