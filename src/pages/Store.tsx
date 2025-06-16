import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Plus, Minus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

interface CartItem extends Product {
  quantity: number;
}

const Store = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "live" | "upcoming">("all");
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('ebooknia-products') || '[]');
    
    // If no products in localStorage, use default products
    if (storedProducts.length === 0) {
      const defaultProducts: Product[] = [
        {
          id: "1",
          title: "Beat the Stress",
          description: "Your quick, practical guide to stay calm, focused, and in control. Perfect for students and entrepreneurs.",
          price: 99,
          originalPrice: 149,
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
          category: "live",
          rating: 4.9,
          reviews: 152,
          badge: "BESTSELLER"
        },
        {
          id: "2",
          title: "AI in Digital Marketing",
          description: "Reveals how smart tools can automate, optimize, and scale your business with real AI strategies.",
          price: 149,
          originalPrice: 199,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
          category: "live",
          rating: 4.8,
          reviews: 98,
          badge: "TRENDING"
        },
        {
          id: "3",
          title: "Time Management for Entrepreneurs",
          description: "Take back control of your schedule with smart techniques to boost focus and productivity.",
          price: 129,
          originalPrice: 179,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
          category: "live",
          rating: 4.7,
          reviews: 203,
          badge: "HOT"
        },
        {
          id: "4",
          title: "AI for Productivity",
          description: "Use powerful AI tools to automate tasks, streamline work, and boost your daily output.",
          price: 159,
          originalPrice: 199,
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=400&fit=crop",
          category: "live",
          rating: 4.9,
          reviews: 87,
          badge: "NEW"
        },
        {
          id: "5",
          title: "Leadership in Digital Age",
          description: "Master modern leadership skills for the digital transformation era.",
          price: 179,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
          category: "upcoming",
          rating: 0,
          reviews: 0
        },
        {
          id: "6",
          title: "Crypto Investment Guide",
          description: "Complete beginner's guide to cryptocurrency investment and blockchain technology.",
          price: 199,
          image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=400&fit=crop",
          category: "upcoming",
          rating: 0,
          reviews: 0
        }
      ];
      setProducts(defaultProducts);
    } else {
      setProducts(storedProducts);
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const buyNow = (product: Product) => {
    toast({
      title: "Redirecting to checkout",
      description: `Processing purchase for ${product.title}...`,
    });
    // Here you would integrate with your payment system
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const filteredProducts = products.filter(product => 
    activeCategory === "all" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.title}</h3>
                          <p className="text-green-600 font-bold">₹{item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="w-6 h-6"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="w-6 h-6"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total: ₹{getTotalPrice()}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600">
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">eBook Store</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">Discover premium eBooks for entrepreneurs and students</p>
            
            <div className="flex justify-center mb-8">
              <Button 
                onClick={() => setIsCartOpen(true)}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart ({getTotalItems()})
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {["all", "live", "upcoming"].map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={`rounded-full px-6 ${
                    activeCategory === category 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category as any)}
                >
                  {category === "all" ? "All Books" : category === "live" ? "Live eBooks" : "Upcoming eBooks"}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.category === "live" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {product.category === "live" ? "Live" : "Coming Soon"}
                      </span>
                    </div>
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full text-white ${
                          product.badge === 'BESTSELLER' ? 'bg-orange-500' :
                          product.badge === 'TRENDING' ? 'bg-red-500' :
                          product.badge === 'HOT' ? 'bg-pink-500' : 'bg-green-500'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {product.category === "live" && (
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {product.category === "live" ? (
                      <>
                        <Button 
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                          onClick={() => buyNow(product)}
                        >
                          Buy Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </>
                    ) : (
                      <Button disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Store;
