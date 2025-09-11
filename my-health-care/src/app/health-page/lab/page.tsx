"use client";
import Image from "next/image";

export default function ProfilePage() {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "MRI Scans",
    "Ultrasound",
    "ECG",
    "Endoscopy",
    "Colonoscopy",
    "Biopsy",
    "Pap Smear",
    "Mammogram",
    "Bone Density Test",
    "Allergy Tests",
    "HIV Test",
    "Pregnancy Test",
    "Urine Tests",
    "Stool Tests",
    "Sputum Tests",
    "Biometric Screening",
    "Genetic Testing",
    "Drug Tests",
    "Alcohol Tests",
    "Thyroid Tests",
    "Liver Function Tests",
    "Kidney Function Tests",
    "Pancreatic Function Tests",
    "Cardiac Enzyme Tests",
    "Blood Clotting Tests",
    "Tumor Marker Tests",
    "Cancer Screening Tests",
    "Diabetes Tests",
    "Cholesterol Tests",
    "Blood Pressure Tests",
    "Vitamin Tests",
    "Mineral Tests",
    "Hormone Tests",
    "Infectious Disease Tests",
  ];

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col container h-auto my-3 lg:mt-2 lg:mb-1 p-3 bg-white opacity-100 rounded-2xl">
        <p className="card-title-lg mx-2 my-5 lg:my-2 text-left">
          Lab Results
        </p>
        <div className="flex flex-col h-auto body-bold overflow-y-auto scrollbar-custom pr-2 my-2">
          {labResults.map((result, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between bg-white body-bold mx-12 lg:mx-0 px-4 my-2 py-8  lg:py-2.5 hover:bg-[#F6F7F8] cursor-pointer"
            >
              <p className="text-left body-bold">
                {result}
              </p>
              <Image
                src="/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt="Arrow Down"
                className="bg-transparent"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
