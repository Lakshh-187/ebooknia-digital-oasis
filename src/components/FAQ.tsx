
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What formats are your eBooks available in?",
    answer: "Our eBooks are available in PDF format, which is compatible with all devices including smartphones, tablets, laptops, and desktop computers. You can read them offline anytime, anywhere."
  },
  {
    question: "How do I receive my eBook after purchase?",
    answer: "After completing your purchase, you'll receive an instant download link via email. The download process is automated and usually takes less than 2 minutes to deliver to your inbox."
  },
  {
    question: "Are there any hidden fees or subscriptions?",
    answer: "No, absolutely not! Our pricing is completely transparent. You pay once and own the eBook forever. No monthly subscriptions, no hidden fees, no surprises."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes! We offer a 7-day money-back guarantee. If you're not completely satisfied with your purchase, contact us within 7 days for a full refund. No questions asked."
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide 24/7 customer support via WhatsApp, email, and direct messages. Our team is always ready to help you with any questions or concerns."
  },
  {
    question: "Are your eBooks suitable for beginners?",
    answer: "Yes! Our eBooks are written in simple, easy-to-understand language. Whether you're a complete beginner or have some experience, our content is designed to be accessible and actionable for everyone."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-xl text-gray-600">Got questions? We've got answers!</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-lg border-0 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
