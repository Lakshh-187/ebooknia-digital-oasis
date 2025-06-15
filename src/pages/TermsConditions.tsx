
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Terms & Conditions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <span>1. Acceptance of Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using EBOOKNiA's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Shield className="w-8 h-8 text-green-600" />
                  <span>2. Use License</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Permission is granted to temporarily download one copy of our eBooks for personal, non-commercial transitory viewing only.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">This is the grant of a license, not a transfer of title, and under this license you may not:</h3>
                    <ul className="space-y-2 text-gray-600 ml-4">
                      <li>• Modify or copy the materials</li>
                      <li>• Use the materials for any commercial purpose or for any public display</li>
                      <li>• Attempt to reverse engineer any software contained in our eBooks</li>
                      <li>• Remove any copyright or other proprietary notations from the materials</li>
                      <li>• Share, distribute, or resell our eBooks without permission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="w-8 h-8 text-purple-600" />
                  <span>3. User Accounts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Account Security:</h3>
                    <ul className="space-y-2 text-gray-600 ml-4">
                      <li>• You are responsible for safeguarding your account password</li>
                      <li>• You must not disclose your password to any third party</li>
                      <li>• You must notify us immediately of any unauthorized use of your account</li>
                      <li>• We reserve the right to refuse service or terminate accounts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Terms */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">4. Purchase Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Payment:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All purchases are final upon completion of payment. Prices are subject to change without notice.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Digital Delivery:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      eBooks are delivered digitally via email or download link immediately after purchase confirmation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Refunds:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Refunds are governed by our separate Refund Policy. Please refer to that document for detailed information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <span>5. Prohibited Uses</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You may not use our service:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-4">
                    <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>• To submit false or misleading information</li>
                    <li>• To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">6. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of EBOOKNiA and its licensors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall EBOOKNiA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">8. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                <p className="text-xl mb-4">
                  If you have any questions about these Terms and Conditions, please contact us.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> ebooknia7@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +919176994066</p>
                  <p><strong>Address:</strong> Chennai, India</p>
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

export default TermsConditions;
