
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BurgerComparison = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold mb-4">How much?</h3>
          <div className="bg-white text-black px-8 py-4 rounded-full text-2xl font-bold inline-block mb-8">
            Less than a Burger
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🍔</div>
            <div className="text-xl font-semibold">Fast Food</div>
            <div className="text-gray-400">₹150-300</div>
          </div>
          
          <div className="text-4xl font-bold text-yellow-400">VS</div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <div className="text-xl font-semibold">Our eBooks</div>
            <div className="text-green-400 text-xl font-bold">₹99-199</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border border-red-500 rounded-lg p-4 text-center">
            <div className="text-red-400 font-semibold">Fast Food</div>
            <div className="text-white">VS</div>
            <div className="text-green-400 font-semibold">Income</div>
          </div>
          <div className="border border-red-500 rounded-lg p-4 text-center">
            <div className="text-red-400 font-semibold">Wasting Money</div>
            <div className="text-white">VS</div>
            <div className="text-green-400 font-semibold">Making Money</div>
          </div>
          <div className="border border-red-500 rounded-lg p-4 text-center">
            <div className="text-red-400 font-semibold">Temporary Pleasure</div>
            <div className="text-white">VS</div>
            <div className="text-green-400 font-semibold">Success</div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg inline-block">
            Price Increasing Soon ⚡
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-3xl font-bold mb-4">
            There's <span className="text-green-400">No Price Tag</span> on Your <span className="text-green-400">Dream Life</span>
          </h4>
          <p className="text-xl mb-6 text-gray-300">
            But right now, you can grab the entire collection for less than the cost of a burger. 🍔
          </p>
          <p className="text-lg mb-8 text-gray-400">
            A <span className="text-red-400 font-bold">one-time limited offer</span> for those ready to take real action. 🔥
          </p>
          
          <Link to="/store">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-xl px-8 py-4">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
