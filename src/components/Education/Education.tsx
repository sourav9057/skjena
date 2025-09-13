import "./Education.css";
import kgpLogo from "../../assets/logos/iitkgp.png";
import jnvLogo from "../../assets/logos/jnv.png";
import OperSource from "../../assets/certificates/Coursera AAZJ7QGZ3FYP.pdf";

const Education = () => {
    return (
        <section id="education" className="education-section">
            {/* Education Title */}
            <div className="about-title-wrapper">
                <h2 className="about-title">Education</h2>
            </div>

            {/* Timeline */}
            <div className="timeline-wrapper">
                <div className="timeline-line" />

                {/* IIT Kharagpur */}
                <div className="timeline-block left" data-aos="fade-up">
                    <div className="timeline-dot" />
                    <div className="edu-card">
                        <img src={kgpLogo} alt="IIT Kharagpur" className="edu-logo" />
                        <div className="edu-info">
                            <h3>Bachelor of Technology</h3>
                            <h4>Computer Science and Engineering</h4>
                            <h5>2017 – 2025 | CGPA: 6.08</h5>
                            <h2>
                                <span>Indian Institute of Technology</span>, Kharagpur
                            </h2>
                        </div>
                    </div>
                </div>

                {/* JNV Bundi */}
                <div className="timeline-block right" data-aos="fade-up">
                    <div className="timeline-dot" />
                    <div className="edu-card">
                        <img src={jnvLogo} alt="JNV Bundi" className="edu-logo" />
                        <div className="edu-info">
                            <h3>Senior Secondary Education</h3>
                            <h4>CBSE</h4>
                            <h5>2015 – 2017 | Percentage: 76.8%</h5>
                            <h2>
                                <span>Jawahar Navodaya Vidyalaya</span>, Bundi, Rajasthan
                            </h2>
                        </div>
                    </div>
                </div>

                {/* JNV Bhadrak */}
                <div className="timeline-block left" data-aos="fade-up">
                    <div className="timeline-dot" />
                    <div className="edu-card">
                        <img src={jnvLogo} alt="JNV Bhadrak" className="edu-logo" />
                        <div className="edu-info">
                            <h3>Secondary Education</h3>
                            <h4>CBSE</h4>
                            <h5>2010 – 2015 | CGPA: 9.8</h5>
                            <h2>
                                <span>Jawahar Navodaya Vidyalaya</span>, Bhadrak, Odisha
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="about-title-wrapper">
                <h2 className="about-title">Achievements</h2>
            </div>
            <div className="achievements-container">
                <div className="ach-card" data-aos="fade-up">
                    <h4>Daan Scholarship</h4>
                    <p>100% scholarship for IIT-JEE preparation.</p>
                    <h5>2015 – 2017</h5>
                </div>
            </div>

            {/* Certifications */}
            <div className="about-title-wrapper">
                <h2 className="about-title">Certifications</h2>
            </div>
            <div className="certifications-container">
                <div className="cert-card" data-aos="fade-up">
                    <h4>
                        Open Source Software Development, Linux and Git Specialization
                    </h4>
                    <p>Coursera</p>
                    <h5>2023</h5>
                    <a
                        href={OperSource}
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

export default Education;
