"use client";

import { useState } from "react";
import Image from "next/image";
import PatientCard from "@/components/PatientCard";
import PrimaryButton from "@/components/PrimaryButton";
import Lab from "@/app/health-page/lab/page";

export default function ProfilePage() {
  const [loading] = useState(false);

  return (
    <div className="flex flex-col justify-between space-y-4 lg:space-y-2">
      <div className="grid grid-cols-3 w-full h-fit lg:flex flex-col container lg:w-[22.938rem] lg:h-[47.25rem] py-4 px-2 bg-white rounded-2xl">
        <div className="flex flex-col items-center space-y-2">
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

        <div className="flex flex-col items-start space-y-6 lg:space-y-2 px-4 lg:my-0 lg:px-1">
          <PatientCard
            imageSrc="/images/BirthIcon.svg"
            value="Date Of Birth"
            text="August 23, 1996"
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
        </div>

        <div className="flex flex-col items-start space-y-7 lg:space-y-2 lg:my-0 lg:px-1">
          <PatientCard
            imageSrc="/images/PhoneIcon.svg"
            text="Emergency Contacts"
            value="(415) 555-5678"
          />
          <PatientCard
            imageSrc="/images/InsuranceIcon.svg"
            text="Insurance Provider"
            value="Sunrise Health Assurance"
          />
          <PrimaryButton
            id="Show All Information"
            type="button"
            aria-label="Show All Information"
            text="Show All Information"
            disabled={loading}
            className="w-full h-[4rem] lg:w-[13.75rem] lg:h-[2.563rem] justify-center text-center text-2xl font-extrabold lg:body-emphasized-14pt bg-[#01F0D0] text-[#072635] rounded-3xl px-10 mx-10 lg:my-3"
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-col">
        <Lab />
      </div>
    </div>
  );
}
