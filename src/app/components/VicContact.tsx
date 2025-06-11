// components/ContactUs.tsx
"use client"; // This line is necessary for Next.js to treat this file as a client component

import emailjs from '@emailjs/browser';
import React, { useState, FormEvent,useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const VicContact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission

    if (formRef.current) {
      try {
        // Send email using Email.js
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("Email.js credentials are not set in environment variables.");
        }

        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
        });

        toast.success("Thank you for your message! We'll get back to you soon.", {
          duration: 5000,
          position: 'top-center',
        });

        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error('Form submission error:', error);
        toast.error('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Send Us a Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-y"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information & Operating Hours */}
          <div>
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Address</p>
                    <p className="text-gray-600">Mabatini Road, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-500 h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <p className="text-gray-600">info@victorsfoundation.org</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-500 h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold">Phone</p>
                    <p className="text-gray-600">+254 716 442 003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-2xl font-bold mb-6">Operating Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between items-center text-lg">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-lg">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-lg">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VicContact;