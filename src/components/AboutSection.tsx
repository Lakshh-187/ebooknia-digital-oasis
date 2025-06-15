
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Designed for companies</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate people whose goal is to improve everyone's life through disruptive products. 
            We build great products to solve your business problems. Our products are designed for small to medium 
            size companies willing to optimize their performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Targeted Content</h4>
              <p className="text-gray-600">
                Specifically crafted for entrepreneurs and students who want to grow and succeed.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Community Focused</h4>
              <p className="text-gray-600">
                Join a community of like-minded individuals working towards similar goals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Instant Impact</h4>
              <p className="text-gray-600">
                Practical guides that you can implement immediately to see real results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
