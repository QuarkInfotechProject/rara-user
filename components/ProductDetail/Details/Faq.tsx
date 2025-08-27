import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqProps } from "../type";

const Faq = ({ data: faqData }: FaqProps) => {
  if (!faqData) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">FAQs</h1>
        </div>
        <p className="text-gray-500">No FAQ data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold">FAQs</h1>
      <div
        className={`grid gap-6 w-full items-start ${
          faqData.images && faqData.images.length > 0
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {faqData.images && faqData.images.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {faqData.images[0] && (
              <Image
                src={faqData.images[0].src}
                alt={faqData.images[0].alt}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            )}
            {faqData.images[1] && (
              <Image
                src={faqData.images[1].src}
                alt={faqData.images[1].alt}
                width={100}
                height={100}
                className="w-full h-auto mt-8"
              />
            )}
            {faqData.images[2] && (
              <Image
                src={faqData.images[2].src}
                alt={faqData.images[2].alt}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            )}
            {faqData.images[3] && (
              <Image
                src={faqData.images[3].src}
                alt={faqData.images[3].alt}
                width={100}
                height={100}
                className="w-full h-auto mt-12"
              />
            )}
          </div>
        )}

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqData.questions &&
              faqData.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/question.svg"
                        alt="question"
                        width={18}
                        height={18}
                      />
                      <span className="text-black font-semibold">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
