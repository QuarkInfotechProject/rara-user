import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqProps } from "../type";

const Faq = ({ data, images }: FaqProps) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">FAQs</h1>
        </div>
        <p className="text-gray-500">No FAQ data available.</p>
      </div>
    );
  }

  // Sort FAQs by order if available
  const sortedFaqs = data.sort((a, b) => (a.order || 0) - (b.order || 0));

  // Handle images - convert to array if it's a single object or already an array
  const imageArray = Array.isArray(images) ? images : images ? [images] : [];

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold">FAQs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          {imageArray.length > 0 && (
            <div className=" w-full flex flex-col gap-4 h-auto">
              <div className="flex gap-2 w-full">
                {imageArray[0] && (
                  <Image
                    src={imageArray[0].src}
                    alt={imageArray[0].alt || "FAQ Image 1"}
                    width={180}
                    height={140}
                    className=" w-full h-full object-cover"
                  />
                )}

                {imageArray[1] && (
                  <Image
                    src={imageArray[1].src}
                    alt={imageArray[1].alt || "FAQ Image 2"}
                    width={160}
                    height={120}
                    className=" w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="flex gap-4 w-full pl-4">
                {imageArray[2] && (
                  <Image
                    src={imageArray[2].src}
                    alt={imageArray[2].alt || "FAQ Image 3"}
                    width={160}
                    height={120}
                    className=" w-full h-full object-cover"
                  />
                )}

                {imageArray[3] && (
                  <Image
                    src={imageArray[3].src}
                    alt={imageArray[3].alt || "FAQ Image 4"}
                    width={140}
                    height={100}
                    className="w-full h-full object-cover mt-4"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {sortedFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.id || `faq-${index}`}
                value={`item-${faq.id || index}`}
              >
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
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    className="prose prose-sm max-w-none"
                  />
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
