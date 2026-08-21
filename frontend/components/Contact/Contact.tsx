"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    message.trim() !== "";

  const handleSubmit = () => {
    if (!isFormValid) return;

    const whatsappNumber = "919148219125";

    const text = `
🐾 New Grooming Enquiry

👤 Name: ${name}

📧 Email: ${email || "Not provided"}

📱 Phone: ${phone}

🐶 Pet Details:
${message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-[#F7F5F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0A1733]">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions or want to book a grooming session?
            We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A1733]">
              Get In Touch
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="font-semibold text-[#0A1733]">
                  Phone / WhatsApp
                </p>

                <p className="text-gray-600">
                  +91 9148219125
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0A1733]">
                  Email
                </p>

                <p className="text-gray-600">
                  contact@sarapetmeow.com
                </p>
              </div>

              <a
                href="https://wa.me/919148219125?text=Hi%20Sara%20Pet.Meow,%20I%20would%20like%20to%20book%20a%20grooming%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>

              <div>
                <p className="font-semibold text-[#0A1733]">
                  Address
                </p>

                <p className="text-gray-600">
                  Hongasandra, Begur Main Road,
                  <br />
                  Bangalore - 560068
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0A1733]">
                  Working Hours
                </p>

                <p className="text-gray-600">
                  Mon - Sun : 9:00 AM - 8:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            className="rounded-2xl bg-white p-8 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your pet..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
              />

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full rounded-xl py-3 font-semibold text-white transition ${
                  isFormValid
                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Send via WhatsApp
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
