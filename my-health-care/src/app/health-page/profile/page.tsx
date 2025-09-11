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
      <div className="h-auto flex flex-col container py-4 px-2 rounded-2xl bg-white">
        <div className="flex flex-col items-center mt-8 gap-6 lg:gap-0 lg:mt-0 space-y-2">
          <Image
            src="/images/Layer2/Layer 2.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />
          <h1 className="card-title text-center">Jessica Taylor</h1>
        </div>

        <div className="container mx-24 mt-4">
          <div className="flex flex-col items-center gap-8">
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

          <div className="flex items-center">
            <PrimaryButton
              id="Show All Information"
              type="button"
              aria-label="Show All Information"
              text="Show All Information"
              disabled={loading}
              className="flex justify-center body-bold bg-[#01F0D0] rounded-3xl hover:text-white"
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
