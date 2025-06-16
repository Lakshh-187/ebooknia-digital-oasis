
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Plus, Edit, Trash2, Save, X, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

const AdminProducts = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem('ebooknia-products') || '[]');
    setProducts(storedProducts);
  };

  const saveProducts = (updatedProducts: Product[]) => {
    localStorage.setItem('ebooknia-products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "ebooknia01") {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Successfully logged in to product management",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setFormData({
      category: "live",
      rating: 4.5,
      reviews: 0,
      badge: "NEW"
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const handleSaveProduct = () => {
    if (!formData.title || !formData.description || !formData.price || !formData.image) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const productData: Product = {
      id: editingProduct?.id || Date.now().toString(),
      title: formData.title!,
      description: formData.description!,
      subtitle: formData.subtitle || "",
      price: Number(formData.price!),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
      image: formData.image!,
      category: formData.category as "live" | "upcoming",
      rating: Number(formData.rating!) || 4.5,
      reviews: Number(formData.reviews!) || 0,
      badge: formData.badge
    };

    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? productData : p);
      toast({
        title: "Success",
        description: "Product updated successfully",
      });
    } else {
      updatedProducts = [...products, productData];
      toast({
        title: "Success",
        description: "Product added successfully",
      });
    }

    saveProducts(updatedProducts);
    setIsAddingProduct(false);
    setEditingProduct(null);
    setFormData({});
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    saveProducts(updatedProducts);
    toast({
      title: "Success",
      description: "Product deleted successfully",
    });
  };

  const handleCancel = () => {
    setIsAddingProduct(false);
    setEditingProduct(null);
    setFormData({});
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span>Product Management</span>
            </CardTitle>
            <p className="text-gray-300">Enter the admin key to manage products</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Management
              </h1>
              <p className="text-gray-600 mt-2">Manage your eBook products</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={handleAddProduct}
                className="bg-gradient-to-r from-green-600 to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
              <Button 
                onClick={() => setIsAuthenticated(false)}
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Add/Edit Product Form */}
        {(isAddingProduct || editingProduct) && (
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle>
                {editingProduct ? "Edit Product" : "Add New Product"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Title *</label>
                    <Input
                      value={formData.title || ""}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Product title"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Subtitle</label>
                    <Input
                      value={formData.subtitle || ""}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      placeholder="Product subtitle"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Description *</label>
                    <Textarea
                      value={formData.description || ""}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Product description"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Image URL *</label>
                    <Input
                      value={formData.image || ""}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Price (₹) *</label>
                      <Input
                        type="number"
                        value={formData.price || ""}
                        onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                        placeholder="99"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Original Price (₹)</label>
                      <Input
                        type="number"
                        value={formData.originalPrice || ""}
                        onChange={(e) => setFormData({...formData, originalPrice: Number(e.target.value)})}
                        placeholder="199"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.category || "live"}
                      onChange={(e) => setFormData({...formData, category: e.target.value as "live" | "upcoming"})}
                    >
                      <option value="live">Live</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Rating</label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={formData.rating || ""}
                        onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
                        placeholder="4.5"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Reviews</label>
                      <Input
                        type="number"
                        value={formData.reviews || ""}
                        onChange={(e) => setFormData({...formData, reviews: Number(e.target.value)})}
                        placeholder="100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Badge</label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.badge || ""}
                      onChange={(e) => setFormData({...formData, badge: e.target.value})}
                    >
                      <option value="">No Badge</option>
                      <option value="BESTSELLER">BESTSELLER</option>
                      <option value="TRENDING">TRENDING</option>
                      <option value="HOT">HOT</option>
                      <option value="NEW">NEW</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <Button onClick={handleSaveProduct} className="bg-gradient-to-r from-green-600 to-blue-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Product
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <Plus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No products yet</p>
                <p className="text-gray-400">Add your first product to get started</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-16 h-20 object-cover rounded"
                          />
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{product.title}</p>
                            {product.badge && (
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {product.badge}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <span className="font-bold text-green-600">₹{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.category === 'live' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {product.category}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <span>⭐ {product.rating}</span>
                            <span className="text-gray-500 ml-1">({product.reviews})</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditProduct(product)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;
