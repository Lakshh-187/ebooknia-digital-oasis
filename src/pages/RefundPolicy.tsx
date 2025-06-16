
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Phone, Mail } from "lucide-react";

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
              Important information about our refund terms
            </p>
          </div>

          <div className="space-y-8">
            {/* No Refund Policy */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-0 shadow-xl border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-red-700">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <span>No Refund Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Please note that EBOOKNiA operates under a strict NO REFUND policy. 
                  All sales are final and no refunds will be provided for any kind of payment 
                  once the purchase is completed.
                </p>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-medium">
                    By making a purchase, you acknowledge and agree to this no-refund policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why No Refunds */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <span>Why We Have This Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our digital products are instantly accessible upon purchase. Due to the nature of 
                    digital content and to protect our intellectual property, we maintain a strict 
                    no-refund policy.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>Digital products are delivered immediately</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>Content cannot be "returned" once accessed</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      <span>Protects against unauthorized distribution</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Before You Purchase */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Before You Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We encourage you to carefully review all product descriptions, previews, 
                    and sample content before making your purchase decision.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">What You Should Do:</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Read the complete product description</li>
                      <li>• Check the table of contents</li>
                      <li>• Review sample pages if available</li>
                      <li>• Contact us if you have questions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Information */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Before Purchasing?</h3>
                <p className="text-xl mb-6">
                  Our team is here to answer any questions about our products before you buy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span><strong>Email:</strong> ebooknia7@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span><strong>WhatsApp:</strong> +919176994066</span>
                  </div>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  Response Time: Within 24 hours
                </p>
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
