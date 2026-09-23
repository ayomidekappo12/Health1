"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const vitalSigns = [
  {
    id: "respiratory",
    title: "Respiratory Rate",
    value: "20 bpm",
    icon: "images/respiratory rate.svg",
    bgColor: "bg-[#e0f3fa]",
    status: "Normal",
  },
  {
    id: "temperature",
    title: "Temperature",
    value: "98.6°F",
    icon: "images/temperature.svg",
    bgColor: "bg-[#ffe6e9]",
    status: "Normal",
  },
  {
    id: "heartrate",
    title: "Heart Rate",
    value: "78 bpm",
    icon: "images/HeartBPM.svg",
    bgColor: "bg-[#ffe6f1]",
    status: "Lower than Average",
  },
];

const VitalSignsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 pt-0 sm:grid-cols-2 md:p-4 lg:grid-cols-3">
      {vitalSigns.map((vital) => {
        return (
          <Card
            key={vital.id}
            className={`manrope-medium-md rounded-xl border-0 shadow-none transition-shadow hover:shadow-md ${vital.bgColor}`}
          >
            <CardContent className="flex min-h-[242px] flex-col items-start p-4 sm:p-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                <Image
                  src={`/${vital.icon}`}
                  alt={`${vital.title} icon`}
                  width={76}
                  height={76}
                  className="h-[76px] w-[76px] transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <p className="body-secondary">{vital.title}</p>
                <p className="title-inner text-[1.875rem] leading-[2.25rem]">
                  {vital.value}
                </p>
                <p className="body-secondary mt-4 flex items-center gap-2">
                  {vital.id === "heartrate" && (
                    <span
                      aria-hidden="true"
                      className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-[#072635]"
                    />
                  )}
                  {vital.status}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default VitalSignsCards;