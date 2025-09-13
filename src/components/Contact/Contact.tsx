import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "service_5olsbmf";
const TEMPLATE_ID = "template_xnde2f9";
const PUBLIC_KEY = "0zJKUqv4gqoHt7ygD";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("Sending...");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("Message sent! Thank you for reaching out.");
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus("Failed to send. Please try again later.");
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Feel free to reach out for collaborations or just a friendly hello 👋
                </p>

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="reply_to"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                    ></textarea>
                    <button type="submit" className="contact-btn">
                        Send Message
                    </button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
