import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer" role="contentinfo">
            <p>
                &copy; {new Date().getFullYear()} Sourav Kumar Jena. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
