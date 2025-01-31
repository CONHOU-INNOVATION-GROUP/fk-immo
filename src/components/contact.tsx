/* eslint-disable @next/next/no-img-element */
"use client";

import { contact } from "@/lib/data";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {contact.title}
        </h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contact.info.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8  text-center border border-gray-400"
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              {Array.isArray(item.details) ? (
                item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))
              ) : (
                <p className="text-gray-600 text-sm">{item.details}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{contact.form.title}</h3>
            <ContactForm />
          </div>

          {/* Map */}
          <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4399569356247!2d-3.9674068!3d5.3617299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb8dd53f4487%3A0x3b2f8f8f8f8f8f8f!2sAngr%C3%A9%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1620000000000!5m2!1sfr!2sci"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
