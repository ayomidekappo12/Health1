"use client";
import Image from "next/image";

export default function ProfilePage() {
  const labResults = ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays"];

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col container w-full lg:w-[22.938rem] mt-3 mb-2 py-4 px-3 bg-white opacity-100 rounded-2xl space-y-4">
        <p className="card-title-24pt mx-2 mt-1 pb-2 lg:pb-0 font-extrabold text-left font-Manrope">
          Lab Results
        </p>
        <div className="grid grid-cols-4 gap-4 lg:flex flex-col body-emphasized-14pt">
          {labResults.map((result, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between bg-white border body-emphasized-14pt border-[#E5E7EB] rounded-md px-4 py-2 lg:py-1.5 shadow-sm hover:bg-[#F6F7F8] lg:border-none lg:rounded-none lg:shadow-none"
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
