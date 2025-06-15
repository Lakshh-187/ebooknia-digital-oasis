
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ebooknia
            </h4>
            <p className="text-gray-300 mb-4">
              Your digital gateway to smarter reading. We create high-quality eBooks for entrepreneurs and students.
            </p>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-4">Contact Info</h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Chennai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+919176994066</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">ebooknia7@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EBOOKNiA. All rights reserved. Built with ❤️ for entrepreneurs and students.
          </p>
        </div>
      </div>
    </footer>
  );
};
