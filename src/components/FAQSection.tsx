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
    answer: "Yes. Paint Protection Film is highly recommended for new cars to prevent scratches, stone chips, swirl marks, and paint fading. Our PPF installation in Tirupur helps maintain your car’s original paint and resale value, especially for daily city driving.",
  },
  {
    question: "How long does ceramic coating last?",
    answer: "Ceramic coating typically lasts between 1 to 3 years depending on the package, maintenance, and driving conditions. Our ceramic coating services in Tirupur offer long-lasting gloss, UV protection, and easier cleaning when maintained properly.",
  },
  {
    question: "What is the difference between ceramic coating and graphene coating?",
    answer: "Ceramic coating provides excellent gloss and basic paint protection, while graphene coating offers enhanced durability, better heat resistance, and longer protection. Graphene coating is ideal for car owners in Tirupur looking for advanced paint protection.",
  },
  {
    question: "Do you offer interior-only car cleaning services?",
    answer: "Yes. We provide interior-only car cleaning services including foam cleaning, stain removal, odour treatment, and deep upholstery cleaning. This service is ideal for maintaining hygiene and comfort, especially for family cars.",
  },
  {
    question: "Is PPF visible on the car after installation?",
    answer: "No. High-quality PPF is virtually invisible when installed correctly. Our professional PPF installation in Tirupur ensures a clean finish without affecting your car’s original look.",
  },
  {
    question: "How much does car detailing cost in Tirupur?",
    answer: "Car detailing costs depend on the service type, car size, and package selected. We offer car wash services starting from ₹349, ceramic coating from ₹14,999, and special PPF offers for a limited period.",
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
