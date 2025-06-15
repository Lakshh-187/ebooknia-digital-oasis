
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, BookOpen, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EBOOKNiA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about empowering entrepreneurs and students with practical, 
              high-quality digital content that drives real results and personal growth.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  To democratize access to premium educational content by creating affordable, 
                  practical eBooks that help entrepreneurs build successful businesses and 
                  students excel in their academic and professional journeys.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality First</h3>
                  <p className="text-gray-600">
                    Every eBook is carefully crafted, researched, and designed to deliver maximum value and practical insights.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Focus</h3>
                  <p className="text-gray-600">
                    We build a supportive community where learners can grow together and share their success stories.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instant Impact</h3>
                  <p className="text-gray-600">
                    Our content is designed for immediate implementation, helping you see results from day one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                    <p className="text-gray-600">eBooks Published</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                    <p className="text-gray-600">Customer Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose EBOOKNiA?</h2>
              <p className="text-xl text-gray-600">What makes us different from the rest</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Expert Authors</h3>
                  <p className="text-gray-600">
                    Our eBooks are written by industry experts and successful entrepreneurs 
                    who have real-world experience in their fields.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
                  <p className="text-gray-600">
                    High-quality education shouldn't break the bank. We offer premium 
                    content at prices that students and entrepreneurs can afford.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to being your trusted partner in learning and growth. 
              Every eBook we create is a step towards building a more knowledgeable, 
              empowered community of learners and achievers.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
