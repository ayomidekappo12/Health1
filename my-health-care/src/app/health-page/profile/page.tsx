"use client";

import { useState } from "react";
import Image from "next/image";
import PatientCard from "@/components/PatientCard";
import PrimaryButton from "@/components/PrimaryButton";
import Lab from "@/app/health-page/lab/page";

export default function ProfilePage() {
  const [loading] = useState(false);

  return (
    <div className="flex flex-col justify-between space-y-4 lg:space-y-2 h-fit">
      <div className="w-full h-full flex flex-col container lg:w-[22.938rem] py-4 px-2 rounded-2xl bg-white">
        <div className="flex flex-col items-center mt-8 gap-6 lg:gap-0 lg:mt-0 space-y-2">
          <Image
            src="/images/Layer2/Layer 2.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />
          <h1 className="card-title-24pt font-extrabold text-center">
            Jessica Taylor
          </h1>
        </div>

        <div className="sm:container md:max-w-none shadow-2xl md:shadow-none rounded-2xl md:rounded-none mx-24 mt-4 md:m-0 transform md:transform-none transition-transform duration-300 md:transition-none">
          <div className="flex flex-col items-center gap-8 py-10 lg:justify-center lg:grid lg:grid-cols-1 lg:gap-3.5 lg:items-start lg:px-1 lg:py-1 lg:mx-0">
            <PatientCard
              imageSrc="/images/FemaleIcon.svg"
              value="Gender"
              text="Female"
            />

            <PatientCard
              imageSrc="/images/BirthIcon.svg"
              value="Date Of Birth"
              text="August 23, 1996"
            />

            <PatientCard
              imageSrc="/images/PhoneIcon.svg"
              value="Contact Info."
              text="(415) 555-1234"
            />

            <PatientCard
              imageSrc="/images/PhoneIcon.svg"
              value="Emergency Contacts"
              text="(415) 555-5678"
            />

            <PatientCard
              imageSrc="/images/InsuranceIcon.svg"
              value="Sunrise Health Assurance"
              text="Insurance Provider"
            />
          </div>

          <div className="flex justify-center">
            <PrimaryButton
              id="Show All Information"
              type="button"
              aria-label="Show All Information"
              text="Show All Information"
              disabled={loading}
              className="flex items-center justify-center text-center text-4xl font-extrabold lg:body-emphasized-14pt bg-[#01F0D0] text-[#072635] rounded-3xl my-14 p-12 h-20 lg:w-[13.75rem] lg:h-[2.563rem] lg:py-2 lg:px-10 lg:mb-0 lg:mt-6 hover:text-white max-w-md w-full"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col">
        <Lab />
      </div>
    </div>
  );
}
