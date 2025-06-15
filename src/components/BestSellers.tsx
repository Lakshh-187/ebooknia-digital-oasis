
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Crown, Download } from "lucide-react";

const bestSellers = [
  {
    rank: 1,
    title: "Beat the Stress",
    price: "₹99",
    originalPrice: "₹199",
    rating: 4.8,
    downloads: "25K+",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=250&fit=crop"
  },
  {
    rank: 2,
    title: "AI for Productivity",
    price: "₹159",
    originalPrice: "₹299",
    rating: 4.9,
    downloads: "18K+",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=250&fit=crop"
  },
  {
    rank: 3,
    title: "Time Management",
    price: "₹129",
    originalPrice: "₹249",
    rating: 4.7,
    downloads: "22K+",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=250&fit=crop"
  },
  {
    rank: 4,
    title: "Digital Marketing AI",
    price: "₹149",
    originalPrice: "₹299",
    rating: 4.6,
    downloads: "15K+",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=250&fit=crop"
  }
];

export const BestSellers = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Crown className="w-8 h-8 text-yellow-500 mr-3" />
          <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Best Sellers
          </h3>
          <TrendingUp className="w-8 h-8 text-green-500 ml-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((book) => (
            <Card key={book.rank} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-100">
              <CardContent className="p-4 relative">
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                  #{book.rank}
                </div>
                
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                
                <h4 className="font-bold text-lg mb-2 line-clamp-1">{book.title}</h4>
                
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({book.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-green-600">{book.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{book.originalPrice}</span>
                  </div>
                  <span className="text-sm text-blue-600 font-semibold">{book.downloads}</span>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  <Download className="w-4 h-4 mr-2" />
                  Get Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
