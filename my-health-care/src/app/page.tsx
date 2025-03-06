"use client";
import SideBar from "./health-page/sidebar/page";
import Profile from "./health-page/profile/page";
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

export default function HomePage() {
  return (
    <main className="w-full justify-between mt-6 mb-4 flex flex-col lg:flex-row space-y-14 lg:space-y-0 overflow-hidden">
      <div className="lg:order-last order-first flex flex-col container lg:px-0">
        <Profile />
      </div>
      <div className="order-none flex flex-col container lg:px-0">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 container space-y-6 order-none shrink-0 lg:px-0">
        <div className="flex flex-col container w-full h-auto lg:w-[48rem] lg:h-fit rounded-2xl opacity-100 bg-white overflow-hidden px-3 py-5 mb-8 lg:mb-0">
          <p className="card-title-24pt my-2 lg:m-2 pb-2 font-extrabold text-left font-Manrope">
            Diagnosis History
          </p>
          <div className="hidden lg:flex container bg-[#F4F0FE] rounded-xl w-[45.375rem] h-[20.625rem] opacity-100 pl-2.5">
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
              <p className="font-Manrope font-medium text-[#072635] body-emphasized-14pt text-left my-4">
                Respiratory Rate
              </p>
              <div className="flex justify-between mb-0 lg:flex-col">
                <p className="font-Manrope font-extrabold text-[#072635] card-title-24pt text-left mt-2 lg:mt-0">
                  20 bpm
                </p>
                <p className="font-Manrope body-regular-14 text-left mt-3">
                  Normal
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#FFE6E9] rounded-xl h-full lg:h-fit mx-9 md:mx-0 p-4">
              <Image
                src="/images/temperature.svg"
                alt="Temperature"
                width={96}
                height={96}
                className="mt-5 lg:mt-0 self-center transition-transform transform hover:scale-110"
              />
              <p className="font-Manrope font-medium text-[#072635] body-emphasized-14pt text-left my-4">
                Temperature
              </p>
              <div className="flex justify-between lg:flex-col">
                <p className="font-Manrope font-extrabold text-[#072635] card-title-24pt text-left mt-2 lg:mt-0">
                  98.6°F
                </p>
                <p className="font-Manrope body-regular-14 text-left mt-3">
                  Normal
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-[#FFE6F1] rounded-xl h-full lg:h-fit mx-9 md:mx-0 p-4">
              <Image
                src="/images/HeartBPM.svg"
                alt="Heart Rate"
                width={96}
                height={96}
                className="mt-5 lg:mt-0 self-center transition-transform transform hover:scale-110"
              />
              <p className="font-Manrope font-medium text-[#072635] body-emphasized-14pt text-left my-4">
                Heart Rate
              </p>
              <div className="flex justify-between lg:flex-col">
                <p className="font-Manrope font-extrabold text-[#072635] card-title-24pt text-left mt-2 lg:mt-0">
                  78 bpm
                </p>
                <div className="flex items-center mt-3">
                  <Image
                    src="/images/ArrowDown.svg"
                    alt="Arrow Down"
                    width={11}
                    height={6}
                  />
                  <p className="body-regular-14 font-Manrope text-left px-2">
                    Lower than Average
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col container w-full h-fit lg:w-[48rem] lg:h-fit rounded-2xl opacity-100 bg-white overflow-hidden p-3">
          <p className="card-title-24pt mx-2 mt-5 mb-3 lg:mt-2 lg:mb-1 font-extrabold text-left font-Manrope">
            Diagnostic List
          </p>
          <div className="flex flex-col">
            <Table data={sampleData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col container lg:hidden">
        <Lab />
      </div>
    </main>
  );
}
