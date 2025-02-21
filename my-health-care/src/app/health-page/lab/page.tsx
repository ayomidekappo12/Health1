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
      <div className="flex flex-col container w-full h-auto lg:w-[22.938rem] my-3 p-3 bg-white opacity-100 rounded-2xl">
        <p className="card-title-24pt mx-2 my-5 lg:my-2 font-extrabold text-left font-Manrope">
          Lab Results
        </p>
        <div className="grid grid-cols-2 gap-4 lg:flex flex-col body-emphasized-14pt lg:h-[18rem] overflow-y-auto lg:scrollbar-custom pr-2 my-2">
          {labResults.map((result, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between bg-white border body-emphasized-14pt border-[#E5E7EB] rounded-md px-4 my-2 py-6 lg:my-0 lg:py-1.5 shadow-sm hover:bg-[#F6F7F8] lg:border-none lg:rounded-none lg:shadow-none cursor-pointer"
            >
              <p className="text-left font-Manrope body-emphasized-14pt text-[#072635]">
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
