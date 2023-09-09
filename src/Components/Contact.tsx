import { Email, WhatsApp } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return; // Check if the form ref exists

    try {
      setLoading(true);
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID || "",
        import.meta.env.VITE_TEMPLATE_ID || "",
        form.current,
        import.meta.env.VITE_PUBLIC_ID || ""
      );
      if (result.status === 200) {
        setMessage("Email sent successfully!");
        form.current.reset();
      } else {
        setMessage("Email sending failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">get in touch</p>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-fit"
            >
              {loading ? "sending..." : "Send Message"}
            </button>
            {/* Display success or error message */}
            {message && (
              <p
                className={`text-center ${
                  message.includes("failed") ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
          <div className="flex flex-col gap-7">
            {/* email */}
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-2xl  flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <Email />
              </div>
              <a
                href={`mailto:suhadkt0468@gmail.com`}
                rel="noopener noreferrer"
                className="md:text-lg text-sm"
              >
                suhadkt0468@gmail.com
              </a>
            </div>
            {/* whatsapp number */}
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] text-2xl  flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <WhatsApp />
              </div>
              <a
                href={`https://wa.me/7594886260`}
                rel="noopener noreferrer"
                className="md:text-lg text-sm"
              >
                7594886260
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
