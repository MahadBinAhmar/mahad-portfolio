import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import mailIconImg from "../../assets/Global/emaill.webp";
import locationIconImg from "../../assets/Global/location.webp";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    // Validation check
    const newErrors = {
      user_name: !form.user_name.value.trim(),
      user_email: !form.user_email.value.trim(),
      message: !form.message.value.trim(),
    };
    setErrors(newErrors);

    // Agar koi field invalid hai to return
    if (Object.values(newErrors).some(Boolean)) return;

    // Send email
    setLoading(true);

    const SERVICE_ID = "service_1llo9jo";
    const TEMPLATE_ID = "template_pc5gjtb";
    const PUBLIC_KEY = "CXmcA7kB4ZEgHlY1J";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        alert("Message sent successfully!");
        form.reset();
        setErrors({ user_name: false, user_email: false, message: false });
      },
      () => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-20 lg:px-32"
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
            Get In Touch
          </h2>

          <p className="text-lg font-semibold text-gray-900 mb-4">
            Have a project in mind or just want to say hi?
          </p>

          <p className="text-gray-700 text-base mb-6">
            I'm open to freelance opportunities & collaborations.  
            Drop me an email and I’ll get back ASAP.
          </p>

          <div className="space-y-4 text-base font-medium text-gray-900">
            <div className="flex items-center gap-3">
              <img
                src={mailIconImg}
                alt="Email"
                className="w-7 h-7 object-contain"
              />
              <a
                href="mailto:mahadjut007@gmail.com"
                className="hover:none"
              >
                mahadjut007@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={locationIconImg}
                alt="Location"
                className="w-7 h-7 object-contain"
              />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-bold uppercase text-gray-900 mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className={`w-full p-3 md:p-4 bg-white rounded-lg border ${
                  errors.user_name ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:border-black`}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className={`w-full p-3 md:p-4 bg-white rounded-lg border ${
                  errors.user_email ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:border-black`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase text-gray-900 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className={`w-full p-3 md:p-4 bg-white rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:border-black resize-none`}
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
