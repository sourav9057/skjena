import { useState, useEffect } from "react";
import "./Header.css";
import HeaderImage from "../../assets/header_image/header_img.jpeg";

// Resumes
// import softwareCV from "../../assets/resumes/softwareProfile.pdf";
// import dataCV from "../../assets/resumes/dataProfile.pdf";
// import cyberCV from "../../assets/resumes/cyberProfile.pdf";

// Animated roles
const roles = [
    "Computer Science Engineering Graduate",
    "Web Developer",
    "App Developer",
    "Data Analyst",
    "Cyber Security Analyst",
];

const Header = () => {
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [showRole, setShowRole] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setShowRole(false);
            setTimeout(() => {
                index = (index + 1) % roles.length;
                setCurrentRole(roles[index]);
                setShowRole(true);
            }, 800);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="header">
            <div className="header-content">
                {/* Profile Image */}
                <div className="header-left">
                    <div className="image-wrapper">
                        <img src={HeaderImage} alt="Profile" className="header-img" />
                        <div className="glow"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="header-right">
                    <h3 className="intro-text">Hello, my name is</h3>
                    <h1 className="name">Sourav Kumar Jena</h1>
                    <h4 className="graduation">Graduate from IIT Kharagpur</h4>
                    <h3 className="role-text">
                        I am a{" "}
                        <span className={`dynamic-role ${showRole ? "show" : "hide"}`}>
                            {currentRole}
                        </span>
                    </h3>

                    {/* Buttons */}
                    <div className="header-actions">
                        <a href="#contact" className="btn contact-btn">
                            Contact Me
                        </a>
                        {/* <div className="cv-buttons">
                            <a href={softwareCV} target="_blank" className="btn gradient-btn">
                                Software Profile CV
                            </a>
                            <a href={dataCV} target="_blank" className="btn gradient-btn">
                                Data Profile CV
                            </a>
                            <a href={cyberCV} target="_blank" className="btn gradient-btn">
                                Cyber Profile CV
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
