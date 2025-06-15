
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, TrendingUp, Brain, Code, Heart } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "Personal Development",
    count: "25+ eBooks",
    color: "bg-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Briefcase,
    title: "Business & Marketing",
    count: "18+ eBooks",
    color: "bg-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Code,
    title: "Technology & AI",
    count: "22+ eBooks",
    color: "bg-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    count: "15+ eBooks",
    color: "bg-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    count: "12+ eBooks",
    color: "bg-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: BookOpen,
    title: "Education",
    count: "20+ eBooks",
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

export const FeaturedCategories = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Browse by Categories</h3>
          <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${category.bgColor} border-0`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{category.title}</h4>
                <p className="text-sm text-gray-600">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
