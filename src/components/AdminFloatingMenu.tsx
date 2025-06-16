
import { useState } from "react";
import { Settings, Shield, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AdminFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="mb-4 space-y-2 animate-in slide-in-from-bottom-2 duration-200">
          <Link to="/admin/products">
            <Button
              className="w-full bg-purple-500 hover:bg-purple-600 text-white shadow-lg flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Package className="w-4 h-4" />
              <span>Admin Product</span>
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </Button>
          </Link>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-180' : ''
        }`}
        aria-label="Admin Menu"
      >
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
};
