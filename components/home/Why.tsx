import React from "react";
import Card from "./Card";

interface CardData {
  icon: string;
  title: string;
  description: string;
}

const Why = () => {
  const cardData: CardData[] = [
    {
      icon: "/assets/why/one.svg",
      title: "Tailored Treks, Your Way",
      description:
        "We create customized itineraries that fit your pace, interests, and budget always.",
    },
    {
      icon: "/assets/why/two.svg",
      title: "Led by Locals Who Live the Mountains",
      description:
        "Our guides are from the very communities you explore, offering unmatched insight and care.",
    },
    {
      icon: "/assets/why/three.svg",
      title: "Fair Pricing, Honest Experience",
      description:
        "Transparent rates with no hidden costs. What you see is what you get.",
    },
    {
      icon: "/assets/why/four.svg",
      title: "Safety Comes First",
      description:
        "We're deeply committed to your comfort and safety in every step of the journey.",
    },
    {
      icon: "/assets/why/five.svg",
      title: "Rooted in Sustainability",
      description:
        "We tread lightly preserving nature, supporting locals, and respecting culture.",
    },
    {
      icon: "/assets/why/six.svg",
      title: "Loved by Adventurers Worldwide",
      description:
        "Many of our guests return and bring friends. That says a lot.",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-4 bg-[#1E2F22]">
      <div className="w-full flex flex-col items-center justify-center md:container py-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center flex items-center justify-center gap-2">
          Why choose <span className="text-[#71B344]">Rara Trek</span>
        </h2>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {cardData.map((card: CardData, index: number) => (
            <div
              key={index}
              className={`${index === 1 || index === 4 ? "lg:mt-8" : ""}`}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>

        <div className="block md:hidden flex flex-col gap-8 w-full">
          {cardData.map((card: CardData, index: number) => (
            <div
              key={index}
              className={`w-[70%] ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
