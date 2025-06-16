
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Bell, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('ebooknia-popup-seen');
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter your WhatsApp number",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Store contact in localStorage (in real app, this would be sent to backend)
      const contacts = JSON.parse(localStorage.getItem('ebooknia-contacts') || '[]');
      const newContact = {
        id: Date.now(),
        phoneNumber: phoneNumber.trim(),
        timestamp: new Date().toISOString(),
        source: 'popup'
      };
      contacts.push(newContact);
      localStorage.setItem('ebooknia-contacts', JSON.stringify(contacts));
      
      // Mark popup as seen
      localStorage.setItem('ebooknia-popup-seen', 'true');
      
      toast({
        title: "Success!",
        description: "You've been added to our EBOOKNiA community!",
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem('ebooknia-popup-seen', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join EBOOKNiA Community! 🎉
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Get exclusive access to updates, freebies & discounts on new launches!
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Bell className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Updates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Freebies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Discounts</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex space-x-3">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Community"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                className="flex-1"
              >
                Maybe Later
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 text-center">
            By joining, you agree to receive updates via WhatsApp. You can opt out anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
