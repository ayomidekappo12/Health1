"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const vitalSigns = [
  {
    id: "respiratory",
    title: "Respiratory Rate",
    value: "20 bpm",
    icon: "images/respiratory rate.svg",
    bgColor: "bg-blue-50",
  },
  {
    id: "temperature",
    title: "Temperature",
    value: "98.6°F",
    icon: "images/temperature.svg",
    bgColor: "bg-red-50",
  },
  {
    id: "heartrate",
    title: "Heart Rate",
    value: "78 bpm",
    icon: "images/HeartBPM.svg",
    bgColor: "bg-pink-50",
  },
];

const VitalSignsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 pt-0">
      {vitalSigns.map((vital) => {
        return (
          <Card
            key={vital.id}
            className="hover:shadow-md transition-shadow bg-white rounded-xl"
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div
                    className={`w-12 h-12 ${vital.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <Image
                      src={vital.icon}
                      alt="logo"
                      width={100}
                      height={100}
                      className="self-center transition-transform transform hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="body-secondary">{vital.title}</p>
                    <p className="inner-card-title-md">{vital.value}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default VitalSignsCards;