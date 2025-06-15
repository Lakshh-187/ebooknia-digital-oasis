
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ebooknia
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact us</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+919176994066</span>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
