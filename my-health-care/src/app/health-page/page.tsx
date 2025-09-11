"use client";
import Chart from "@/app/health-page/tableUtils";
import Lab from "@/app/health-page/lab/page";
import Image from "next/image";
import Table from "@/components/Table";

const sampleData = [
  {
    name: "Hypertension",
    Description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    name: "Type 2 Diabetes",
    Description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    name: "Asthma",
    Description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    Description: "Degenerative joint disease",
    status: "Untreated",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex flex-col container h-auto rounded-2xl opacity-100 bg-white overflow-hidden p-3">
        <p className="card-title-lg my-2 lg:m-2 pb-2 text-left">
          Diagnosis History
        </p>
        <div className="hidden lg:flex container bg-[#F4F0FE] rounded-xl h-fit opacity-100 pl-2.5">
          <Chart />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-4 mt-6 mb-4">
          <div className="flex flex-col bg-[#E0F3FA] rounded-xl h-full lg:h-fit mx-9 md:mx-0 p-4">
            <Image
              src="/images/respiratory rate.svg"
              alt="Respiratory-rate"
              width={96}
              height={96}
              className="mt-5 lg:mt-0 self-center transition-transform transform hover:scale-110"
            />
            <p className="body-bold text-left my-4">
              Respiratory Rate
            </p>
            <div className="flex justify-between lg:flex-col">
              <p className="card-title-lg text-left mt-2 lg:mt-0">
                20 bpm
              </p>
              <p className="body-regular text-left mt-3">
                Normal
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#FFE6E9] rounded-xl h-auto mx-9 md:mx-0 p-4">
            <Image
              src="/images/temperature.svg"
              alt="Temperature"
              width={96}
              height={96}
              className="mt-5 lg:mt-0 self-center transition-transform transform hover:scale-110"
            />
            <p className="body-bold text-left my-4">
              Temperature
            </p>
            <div className="flex justify-between lg:flex-col">
              <p className="card-title-lg text-left mt-2 lg:mt-0">
                98.6°F
              </p>
              <p className="body-regular text-left mt-3">
                Normal
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#FFE6F1] rounded-xl h-auto mx-9 md:mx-0 p-4">
            <Image
              src="/images/HeartBPM.svg"
              alt="Heart Rate"
              width={96}
              height={96}
              className="mt-5 lg:mt-0 self-center transition-transform transform hover:scale-110"
            />
            <p className="body-bold text-left my-4">
              Heart Rate
            </p>
            <div className="flex justify-between lg:flex-col">
              <p className="card-title-lg text-left mt-2 lg:mt-0">
                78 bpm
              </p>
              <div className="flex items-center mt-3">
                <Image
                  src="/images/ArrowDown.svg"
                  alt="Arrow Down"
                  width={11}
                  height={6}
                />
                <p className="body-regular text-left px-2">
                  Lower than Average
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col container h-fit rounded-2xl opacity-100 bg-white overflow-hidden p-3">
        <p className="card-title-lg mx-2 mt-5 mb-3 lg:mt-2 lg:mb-1 text-left">
          Diagnostic List
        </p>
        <div className="flex flex-col">
          <Table data={sampleData} />
        </div>
      </div>
      <div className="flex flex-col container lg:hidden">
        <Lab />
      </div>
    </>
  );
}
