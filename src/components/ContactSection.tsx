import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, CheckCircle } from "lucide-react";

type Contact = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export const ContactSection = () => {
 const [formData, setFormData] = useState<Contact>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "leuyllm7@gmail.com",
    description: "Drop me a line anytime",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Available Mon-Fri 9AM-6PM",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "San Francisco, CA",
    description: "Open to remote work",
    color: "from-blue-400 to-blue-600",
  },
];


  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "#",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
      color: "hover:bg-sky-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "Discord",
      url: "#",
      color: "hover:bg-indigo-600"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and development.
            </p>
          </div>
          
          {/* Animated underline */}
          <div className="flex justify-center">
            <div className="w-24 h-1  rounded-full animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>
            </div>
            
            {/* Contact cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 rounded-x rounded-lg shadow-xs transition-all duration-300 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex gap-4 items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} bg-opacity-20`}>
                      <span className={`bg-clip-text bg-gradient-to-r ${info.color}`}>
                        {info.icon}
                      </span>
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-mu text-lg text-primary mb-1">
                        {info.title}
                      </h4>
                      <p className="font-medium text-lg">{info.value}</p>
                      <p className=" text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6 flex justify-start items-start">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 rounded-full dark:bg-gray-800 dark:text-white  transition-all duration-300 ${social.color} hover:text-white hover:scale-110 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4  border border-green-500/20 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
            />
  
</div>

                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg  placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3  border border-gray-600 rounded-lg placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                  placeholder="Subject"
                />
                
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
                
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 focus:outline-none transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick response time indicator */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">Usually responds within 24 hours</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};