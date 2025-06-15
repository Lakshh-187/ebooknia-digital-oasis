
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const features = [
  {
    feature: "eBook Quality",
    ebooknia: "Curated, well-designed & reader-friendly",
    others: "Often plain formats, less engaging",
    eBookniaGood: true
  },
  {
    feature: "Content Relevance",
    ebooknia: "Targeted for entrepreneurs & students",
    others: "Generic topics without clear focus",
    eBookniaGood: true
  },
  {
    feature: "Pricing",
    ebooknia: "Affordable & high value (₹99–₹199 range)",
    others: "Overpriced for similar or lower value",
    eBookniaGood: true
  },
  {
    feature: "Instant Delivery",
    ebooknia: "Fast, automated & reliable",
    others: "May have delays or manual delivery",
    eBookniaGood: true
  },
  {
    feature: "Customer Support",
    ebooknia: "24/7 personal support via WhatsApp/DM",
    others: "Slow or no customer service",
    eBookniaGood: true
  },
  {
    feature: "Bonuses & Offers",
    ebooknia: "Free guides, checklists, and updates",
    others: "No additional bonuses offered",
    eBookniaGood: true
  },
  {
    feature: "Language & Simplicity",
    ebooknia: "Simple, powerful, and easy to understand",
    others: "Complicated and academic",
    eBookniaGood: true
  }
];

export const ComparisonTable = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Why Choose EBOOKNiA?</h3>
          <p className="text-xl text-gray-600">See how we compare to other eBook platforms</p>
        </div>
        
        <Card className="max-w-6xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-center">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-left">FEATURES</div>
                <div className="text-center">EBOOKNIA 📘</div>
                <div className="text-center">OTHERS 📚</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                <div className="font-semibold text-gray-800">{item.feature}</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{item.ebooknia}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item.others}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
