import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setisDarkMode] = useState(true);

  useEffect(() => {
     const storedTheme = localStorage.getItem('theme');
          if (storedTheme === 'dark') {
              setisDarkMode(true);
              document.documentElement.classList.add('dark');
          } else {
             localStorage.setItem('theme', 'light');
             setisDarkMode(false);
          }
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            // //       // Update active section based on scroll position
        const sections = navItems.map(item => item.href.slice(1));
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(section);
                break;
            }
            }
        }
        };  
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

      const toggleTheme = () => {
          if (isDarkMode) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
              setisDarkMode(false);
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
              setisDarkMode(true);
          }
      }

       const scrollToSection = (href: any) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group relative" >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-60 bg-clip-text text-transparent">
                Portfolio
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-600 '
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
  {/* Theme Toggle */}
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full transition-colors duration-300 z-50 focus:outline-none"
    aria-label="Toggle theme"
  >
    {isDarkMode ? (
      <Sun className="w-5 h-5 text-yellow-500" />
    ) : (
      <Moon className="w-5 h-5 text-blue-900" />
    )}
  </button>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsMenuOpen((prev) => !prev)}
    className="md:hidden p-2 text-foreground z-50 focus:outline-none"
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md z-40 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pointer-events-auto' 
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}>
          <div className="flex flex-col text-xl space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;