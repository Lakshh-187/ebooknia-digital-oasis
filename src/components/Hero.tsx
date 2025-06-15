
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EBOOKNiA
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Your digital gateway to smarter reading!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/store">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse eBooks
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl opacity-30 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop" 
              alt="Digital Reading Experience" 
              className="relative z-10 rounded-2xl shadow-2xl mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
