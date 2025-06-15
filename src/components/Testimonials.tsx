
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">What Our Readers Say</h3>
          <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-blue-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl">
                  "A small shop with a very large selection of roses. Nice prices and above all a very professional and friendly welcome."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ID
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg">Iris DOE</h4>
                    <p className="text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
