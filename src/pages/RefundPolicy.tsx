
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Refund Policy</span>
            </h1>
            <p className="text-xl text-gray-600">
              We stand behind our products with a customer-friendly refund policy
            </p>
          </div>

          <div className="space-y-8">
            {/* 30-Day Guarantee */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Shield className="w-8 h-8 text-green-600" />
                  <span>30-Day Money-Back Guarantee</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer a full 30-day money-back guarantee on all our eBooks. If you're not completely 
                  satisfied with your purchase, you can request a full refund within 30 days of purchase 
                  with no questions asked.
                </p>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <span>How to Request a Refund</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Step 1: Contact Us</h3>
                      <p className="text-gray-600">
                        Send an email to <span className="font-semibold text-blue-600">ebooknia7@gmail.com</span> or 
                        WhatsApp us at <span className="font-semibold text-blue-600">+919176994066</span> with your 
                        order details and reason for refund.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Step 2: Order Verification</h3>
                      <p className="text-gray-600">
                        We'll verify your purchase details and confirm your refund request within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Step 3: Refund Processing</h3>
                      <p className="text-gray-600">
                        Once approved, your refund will be processed within 3-5 business days to your original payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Conditions */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                  <span>Refund Conditions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Eligible for Refund:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Request made within 30 days of purchase</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Original purchaser requesting refund</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Valid purchase confirmation available</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Not Eligible for Refund:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span>Requests made after 30 days</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span>Fraudulent or disputed charges</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span>Violation of our terms of service</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Cases */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Special Circumstances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Technical Issues</h3>
                    <p className="text-gray-600">
                      If you experience technical difficulties accessing your eBook, we'll work with you 
                      to resolve the issue. If we cannot resolve it within 48 hours, you're eligible 
                      for a full refund regardless of the 30-day limit.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Partial Refunds</h3>
                    <p className="text-gray-600">
                      In some special cases, we may offer partial refunds at our discretion. 
                      Each case is evaluated individually based on the specific circumstances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="text-xl mb-4">
                  Our customer support team is here to help you with any refund-related questions.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> ebooknia7@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +919176994066</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;
