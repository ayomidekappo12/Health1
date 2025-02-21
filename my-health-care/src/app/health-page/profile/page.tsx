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
        <div className="flex flex-col items-center mt-4 lg:mt-0 space-y-2">
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

        <div className="grid grid-cols-2 gap-4 mx-40 lg:justify-center lg:grid-cols-1 lg:gap-0 lg:items-start lg:px-1 lg:mx-0">
          <PatientCard
            imageSrc="/images/BirthIcon.svg"
            value="Date Of Birth"
            text="August 23, 1996"
            className=""
          />
          <PatientCard
            imageSrc="/images/FemaleIcon.svg"
            value="Gender"
            text="Female"
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
        <PrimaryButton
          id="Show All Information"
          type="button"
          aria-label="Show All Information"
          text="Show All Information"
          disabled={loading}
          className="lg:w-[13.75rem] lg:h-[2.563rem] justify-center text-center text-5xl font-extrabold lg:body-emphasized-14pt bg-[#01F0D0] text-[#072635] rounded-3xl ml-80 mt-8 mb-4 py-12 px-40 lg:py-0 lg:px-10 lg:mx-10 lg:mt-6 lg:mb-0"
        />
      </div>

      <div className="hidden lg:flex flex-col">
        <Lab />
      </div>
    </div>
  );
}
