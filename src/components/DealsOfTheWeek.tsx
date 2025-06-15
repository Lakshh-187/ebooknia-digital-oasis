
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const DealsOfTheWeek = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-purple-700">
      <div className="container mx-auto">
        <div className="text-center text-white mb-12">
          <h3 className="text-5xl font-bold mb-4">
            Deals Of The Week
          </h3>
          <h4 className="text-3xl font-semibold mb-6">
            Buy Now! Hurry
          </h4>
          <p className="text-xl opacity-90">
            Get Up to 60% Off on all new Resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="group hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center text-white">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                Sale!
              </div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop" 
                alt="AI for Productivity"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">AI for Productivity</h4>
              <div className="text-2xl font-bold">
                <span className="line-through text-gray-400 text-lg">₹199</span>
                <span className="text-green-400 ml-2">₹99</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center text-white">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                Sale!
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
                alt="AI Profit Masterclass"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">AI Profit Masterclass</h4>
              <div className="text-2xl font-bold">
                <span className="line-through text-gray-400 text-lg">₹299</span>
                <span className="text-green-400 ml-2">₹149</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center text-white">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                Sale!
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" 
                alt="Blockchain Explained"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Blockchain Explained</h4>
              <div className="text-2xl font-bold">
                <span className="line-through text-gray-400 text-lg">₹199</span>
                <span className="text-green-400 ml-2">₹99</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/store">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-8 py-4">
              Get the offer Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
