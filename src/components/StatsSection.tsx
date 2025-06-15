
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, MapPin, User } from "lucide-react";

const stats = [
  {
    icon: Download,
    number: "12,663",
    label: "Downloads",
    color: "text-blue-600"
  },
  {
    icon: BookOpen,
    number: "672",
    label: "Resource Collections",
    color: "text-purple-600"
  },
  {
    icon: MapPin,
    number: "62",
    label: "Countries",
    color: "text-green-600"
  },
  {
    icon: User,
    number: "4,573",
    label: "Community Members",
    color: "text-orange-600"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Our Impact in Numbers</h3>
          <p className="text-xl text-gray-600">Join thousands of satisfied learners worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-dashed border-red-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-900">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
