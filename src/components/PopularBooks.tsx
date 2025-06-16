import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star, Heart, Eye, Zap } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "live" | "upcoming";
  rating: number;
  reviews: number;
  badge?: string;
  subtitle?: string;
}

export const PopularBooks = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('ebooknia-products') || '[]');
    
    // If no products in localStorage, use default products
    if (storedProducts.length === 0) {
      const defaultProducts: Product[] = [
        {
          id: "01",
          title: "Beat the Stress",
          subtitle: "Struggling with stress from exams or work?",
          description: "Beat the Stress is your quick, practical guide to stay calm, focused, and in control. Perfect for students and entrepreneurs, it's packed with easy tools to manage pressure and boost productivity.",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
          price: 99,
          originalPrice: 199,
          category: "live",
          rating: 4.8,
          reviews: 125,
          badge: "BESTSELLER"
        },
        {
          id: "02",
          title: "AI in Digital Marketing",
          subtitle: "Want to grow faster with less effort?",
          description: "AI in Digital Marketing reveals how smart tools can automate, optimize, and scale your business. Perfect for marketers and entrepreneurs, this guide shows real AI strategies that boost sales and save time.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
          price: 149,
          originalPrice: 299,
          category: "live",
          rating: 4.9,
          reviews: 82,
          badge: "TRENDING"
        },
        {
          id: "03",
          title: "Time Management for Entrepreneurs",
          subtitle: "Always busy but getting less done?",
          description: "Time Management for Entrepreneurs is your go-to guide to take back control of your schedule. Learn smart techniques to boost focus, cut distractions, and get more done in less time.",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
          price: 129,
          originalPrice: 249,
          category: "live",
          rating: 4.7,
          reviews: 153,
          badge: "HOT"
        },
        {
          id: "04",
          title: "AI for Productivity",
          subtitle: "Want to get more done in less time?",
          description: "AI for Productivity shows how to use powerful AI tools to automate tasks, streamline work, and boost your daily output. Perfect for students, creators, and entrepreneurs.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop",
          price: 159,
          originalPrice: 299,
          category: "live",
          rating: 4.6,
          reviews: 98,
          badge: "NEW"
        }
      ];
      setProducts(defaultProducts.slice(0, 4)); // Show only first 4 products
    } else {
      setProducts(storedProducts.filter(p => p.category === "live").slice(0, 4)); // Show only live products, max 4
    }
  }, []);

  return (
    <section id="shop" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Our Most Popular eBooks
          </h3>
          <p className="text-xl text-gray-600">Transform your life with our bestselling digital guides</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((book) => (
            <Card key={book.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg relative overflow-hidden">
              {book.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full text-white ${
                    book.badge === 'BESTSELLER' ? 'bg-orange-500' :
                    book.badge === 'TRENDING' ? 'bg-red-500' :
                    book.badge === 'HOT' ? 'bg-pink-500' : 'bg-green-500'
                  }`}>
                    {book.badge}
                  </span>
                </div>
              )}
              
              <div className="absolute top-3 right-3 z-10">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </Button>
              </div>

              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  {book.originalPrice && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                      {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h4>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">({book.rating})</span>
                    <span className="text-sm text-gray-500 ml-2 flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {(book.reviews / 10).toFixed(1)}K
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">₹{book.price}</span>
                      {book.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₹{book.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Quick view</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-sm">
                      <Zap className="w-4 h-4 mr-1" />
                      Buy Now
                    </Button>
                    <Button variant="outline" className="flex-1 text-sm border-blue-200 hover:bg-blue-50">
                      <Download className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
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
