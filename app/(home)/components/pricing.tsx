import Image from "next/image";
import React from "react";
import { PricingCard } from "./pricing-card";

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
        Sizning butun kompaniyangiz uchun bitta vosita. Jamoalar sinab
        ko`rishlari uchun bepul.
      </h1>
      <p className="uppercase opacity-70">AT JAMOALARI TOMONIDAN ISHONCH</p>

      <div className="flex gap-4 flex-row flex-wrap mt-4">
        {teams.map((team, idx) => (
          <Image width={50} height={50} key={idx} alt="teams" src={team} />
        ))}
      </div>

      <div className="mt-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {cards.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const teams = [
  "/teams/1.svg",
  "/teams/2.svg",
  "/teams/3.svg",
  "/teams/4.svg",
  "/teams/5.svg",
];

const cards = [
  {
    title: "Free",
    subtitle:
      "Ishingiz va hayotingizning har bir burchagini tashkil qilish uchun.",
    options:
      "Hamkorlikdagi ish maydoni, Slack, GitHub va boshqalar bilan integratsiyalash, Asosiy sahifa tahlili, 7 kunlik sahifalar tarixi, 10 ta mehmonni taklif qilish",
    price: "Free",
  },
  {
    title: "Plus",
    subtitle:
      "Kichik guruhlar uchun rejalashtirish va tartibga solish uchun joy.",
    options:
      "Jamoalar uchun cheksiz bloklar, cheksiz fayllarni yuklash, 30 kunlik sahifalar tarixi, 100 ta mehmonni taklif qilish",
    price: "8",
    priceId: "price_1OIa9xL7w2jHXlsS4WjLBAXz",
  },
  {
    title: "Business",
    subtitle:
      "Maqolalar-dan bir nechta jamoalar va vositalarni ulash uchun foydalanadigan kompaniyalar uchun.",
    options:
      "SAML SSO, Shaxsiy jamoalar, ommaviy PDF eksporti, Kengaytirilgan sahifa tahlili, 90 kunlik sahifa tarixi, 250 mehmonni taklif qilish",
    price: "15",
    priceId: "price_1OIa9BL7w2jHXlsS0gMw5Bob",
  },
];
