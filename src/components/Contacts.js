import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbMessageCircleCheck } from "react-icons/tb";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.name && formData.email && formData.message) {
    const response = await fetch("https://formsubmit.co/hilollken@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  }
};


  return (
    <motion.div    className="form-container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >

    <form className="contact-form" onSubmit={handleSubmit}>
    <h2 className="form-title">Свяжитесь со мной</h2>

        <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
        />
        <input
        type="email"
        name="email"
        placeholder="Ваш Email"
        value={formData.email}
        onChange={handleChange}
        required
        />
        <textarea
        name="message"
        placeholder="Ваше сообщение"
        value={formData.message}
        onChange={handleChange}
        required
        />
        <motion.button
        type="submit"
        className="submit-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
        Отправить
        </motion.button>
    </form>
    {submitted && <p className="success-message">Сообщение отправлено! <TbMessageCircleCheck /> </p>}
    
    <img src="/img/form-img.jpg" alt="Example" />
    </motion.div>
    
);
}
