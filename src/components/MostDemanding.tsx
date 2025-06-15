
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Star, Users, Download, Timer } from "lucide-react";

const demandingBooks = [
  {
    title: "AI Revolution 2024",
    subtitle: "Master AI Tools for Business Growth",
    price: "₹199",
    originalPrice: "₹399",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
    rating: 4.9,
    users: "5.2K",
    timeLeft: "2 days left",
    badge: "HOT"
  },
  {
    title: "Crypto Trading Mastery",
    subtitle: "Complete Guide to Cryptocurrency",
    price: "₹179",
    originalPrice: "₹349",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=300&h=200&fit=crop",
    rating: 4.8,
    users: "3.8K",
    timeLeft: "5 days left",
    badge: "TRENDING"
  }
];

export const MostDemanding = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Flame className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
          <h3 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Most Demanding
          </h3>
          <Flame className="w-8 h-8 text-red-500 ml-3 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demandingBooks.map((book, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-102 bg-white/90 backdrop-blur-sm border-2 border-red-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                      book.badge === 'HOT' ? 'bg-red-500 animate-pulse' : 'bg-orange-500'
                    }`}>
                      🔥 {book.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Timer className="w-3 h-3 mr-1" />
                    {book.timeLeft}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{book.subtitle}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({book.rating})</span>
                    <div className="flex items-center ml-4 text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {book.users} enrolled
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-red-600">{book.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-3">{book.originalPrice}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold ml-2">
                        SAVE 50%
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-lg py-3">
                      <Download className="w-5 h-5 mr-2" />
                      Grab Now
                    </Button>
                    <Button variant="outline" className="px-6 border-red-200 hover:bg-red-50">
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-red-600 font-semibold animate-pulse">
            ⚡ Limited Time Offers - Don't Miss Out!
          </p>
        </div>
      </div>
    </section>
  );
};
