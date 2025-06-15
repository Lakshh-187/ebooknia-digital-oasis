
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

const books = [
  {
    id: "01",
    title: "Beat the Stress",
    subtitle: "Struggling with stress from exams or work?",
    description: "Beat the Stress is your quick, practical guide to stay calm, focused, and in control. Perfect for students and entrepreneurs, it's packed with easy tools to manage pressure and boost productivity.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    price: "₹99"
  },
  {
    id: "02",
    title: "AI in Digital Marketing",
    subtitle: "Want to grow faster with less effort?",
    description: "AI in Digital Marketing reveals how smart tools can automate, optimize, and scale your business. Perfect for marketers and entrepreneurs, this guide shows real AI strategies that boost sales and save time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
    price: "₹149"
  },
  {
    id: "03",
    title: "Time Management for Entrepreneurs",
    subtitle: "Always busy but getting less done?",
    description: "Time Management for Entrepreneurs is your go-to guide to take back control of your schedule. Learn smart techniques to boost focus, cut distractions, and get more done in less time.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    price: "₹129"
  },
  {
    id: "04",
    title: "AI for Productivity",
    subtitle: "Want to get more done in less time?",
    description: "AI for Productivity shows how to use powerful AI tools to automate tasks, streamline work, and boost your daily output. Perfect for students, creators, and entrepreneurs.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop",
    price: "₹159"
  }
];

export const PopularBooks = () => {
  return (
    <section id="shop" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Discover Our Most Popular eBooks</h3>
          <p className="text-xl text-gray-600">Celebrate with Our Best-Selling eBooks, perfect for every occasion.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <Card key={book.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg z-10">
                        {book.id}
                      </div>
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-32 h-40 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{book.title}</h4>
                    <p className="text-lg font-semibold text-blue-600 mb-3">{book.subtitle}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">(4.9)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600 mb-2">{book.price}</div>
                        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
