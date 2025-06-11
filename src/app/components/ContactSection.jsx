'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll simulate a submission
    try {
      // Replace this with your actual API call
      console.log('Form submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mahadsuhaibkhan@gmail.com',
      link: 'mailto:mahadsuhaibkhan@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maryland, USA',
      link: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-black relative overflow-hidden flex items-center pt-8">

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              Contact
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
              </div>
              <p className="text-gray-400 text-xl tracking-wider uppercase">Let's Connect</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                  Start a Conversation
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you're interested in collaboration, have a project in mind, or just want to say hello, I'd love to hear from you. Let's create something amazing together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="relative flex items-center space-x-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all duration-300">
                        <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{info.label}</p>
                          <p className="text-gray-400 font-mono text-sm">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block hover:transform hover:translate-x-2 transition-all duration-300">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Decorative quote */}
              <div className="relative mt-8">
                <div className="text-blue-500/20 text-6xl font-bold leading-none select-none">"</div>
                <p className="text-gray-400 text-lg italic ml-8 -mt-8">
                  Great things never come from comfort zones.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 transition-all duration-300"
                          placeholder="John Doe"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 transition-all duration-300"
                          placeholder="john@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 transition-all duration-300"
                        placeholder="Project Inquiry"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        Failed to send message. Please try again or email directly.
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-lg bg-white py-4 transition-all duration-300 hover:transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2 text-black font-semibold">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-0 h-0 bg-blue-100 rounded-full group-hover:w-[500px] group-hover:h-[500px] transition-all duration-500 ease-out"></div>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;