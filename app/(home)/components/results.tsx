"use client";

/* eslint-disable @next/next/no-img-element */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useEffect, useState } from "react";

const triggerData = [
  {
    id: "1",
    value: "muhandislik",
    title: "Muhandislik",
  },
  {
    id: "2",
    value: "dizayn",
    title: "Dizayn",
  },
  {
    id: "3",
    value: "mahsulotlar",
    title: "Mahsulotlar",
  },
  {
    id: "4",
    value: "marketing",
    title: "Marketing",
  },
  {
    id: "5",
    value: "operatsiyalar",
    title: "Operatsiyalar",
  },
  {
    id: "6",
    value: "hr",
    title: "HR",
  },
];

const tabsContent = [
  {
    id: "1",
    value: "muhandislik",
    image: "/results/result/1.png",
  },
  {
    id: "2",
    value: "dizayn",
    image: "/results/result/2.png",
  },
  {
    id: "3",
    value: "mahsulotlar",
    image: "/results/result/3.png",
  },
  {
    id: "4",
    value: "marketing",
    image: "/results/result/4.png",
  },
  {
    id: "5",
    value: "operatsiyalar",
    image: "/results/result/5.png",
  },
  {
    id: "6",
    value: "hr",
    image: "/results/result/6.png",
  },
];

export const Results = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="max-w-7xl mx-auto container my-7">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Har bir jamoa qadamba qadam erishgan natijalari
      </h1>

      <Tabs defaultValue="muhandislik" className="mx-auto my-6">
        <TabsList className="flex items-center justify-center gap-5 mx-auto max-w-max">
          {triggerData.map(({ id, title, value }) => (
            <TabsTrigger value={value} key={id}>
              <p className="text-lg text-center">{title}</p>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="my-6">
          {tabsContent.map(({ id, image, value }) => (
            <TabsContent value={value} key={id}>
              <img
                src={image}
                alt={value}
                className="w-full max-w-[1024px] h-[640px] mx-auto my-5"
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <div className="mt-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"></div>
      </div>
    </div>
  );
};
