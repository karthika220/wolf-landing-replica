import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in a full car detailing service in Tirupur?",
    answer: "A full car detailing service includes exterior wash, paint decontamination, polishing, interior vacuuming, dashboard and upholstery cleaning, tyre dressing, and final inspection. At Detailing Wolves, services are customised based on your car's condition and usage in Tirupur.",
  },
  {
    question: "Is paint protection film (PPF) worth it for new cars?",
    answer: "Yes, PPF is highly recommended for new cars as it provides invisible protection against scratches, stone chips, and environmental damage while maintaining the factory finish.",
  },
  {
    question: "How long does ceramic coating last?",
    answer: "Professional ceramic coating can last 2-5 years depending on the grade of coating applied, maintenance routine, and environmental conditions.",
  },
  {
    question: "What is the difference between ceramic coating and graphene coating?",
    answer: "Graphene coating offers superior heat dissipation, is more flexible, and provides better water sheeting compared to traditional ceramic coatings. It also has anti-static properties that reduce dust accumulation.",
  },
  {
    question: "Do you offer interior-only car cleaning services?",
    answer: "Yes, we offer standalone interior cleaning services including deep vacuuming, dashboard cleaning, upholstery shampooing, and odour removal.",
  },
  {
    question: "Is PPF visible on the car after installation?",
    answer: "High-quality PPF is virtually invisible once installed. Our premium films are optically clear and self-healing, maintaining your car's original appearance.",
  },
  {
    question: "How much does car detailing cost in Tirupur?",
    answer: "Car detailing costs vary based on the services selected and vehicle size. Basic car wash starts from ₹349, while comprehensive detailing packages are customized based on your needs.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <h2 className="heading-section text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-heading font-semibold text-lg py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
