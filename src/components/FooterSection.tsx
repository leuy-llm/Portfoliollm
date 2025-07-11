import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Heart,
  Instagram,
  Send,
  ExternalLink
} from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: any) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'Consulting', href: '#' },
    { name: 'Maintenance', href: '#' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'Email', icon: Mail, href: 'mailto:leuyllm7@gmail.com', color: 'hover:text-red-500' }
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
  <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-300">
    
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <p className="text-sm leading-relaxed break-words">
            Crafting digital experiences through innovative web development and design. Let’s build something amazing together.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <a
                  href={service.href}
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
          <p className="text-sm break-words">
            Subscribe to get notified about new projects and blog posts.
          </p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-300"
              >
                <Send size={16} />
              </button>
            </div>

            <div className="space-y-2 text-sm text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                <span>leuyllm7@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone size={16} className="text-green-600 dark:text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin size={16} className="text-red-600 dark:text-red-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 dark:border-gray-700"></div>

    {/* Bottom Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 text-sm text-center">
          <span>© 2024 Portfolio. Made with</span>
          <Heart size={16} className="text-red-500 animate-pulse" />
          <span>by Lom Leuy</span>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 text-sm">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Sitemap</a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-1 mt-2 md:mt-0 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </div>

    {/* Back to Top Button */}
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-40"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  </footer>
</div>

  );
};

export default FooterSection;