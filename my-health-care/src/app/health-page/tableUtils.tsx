import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import IconButton from "@/components/IconButton";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip
);

const BloodPressureChart = () => {
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "",
        data: [122, 115, 160, 110, 147, 157],
        fill: false,
        borderColor: "#D48AC1",
        backgroundColor: "#D48AC1",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "",
        data: [108, 65, 107, 92, 70, 78],
        fill: false,
        borderColor: "#918BE0",
        backgroundColor: "#918BE0",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"line">) =>
            `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="flex justify-between gap-0 pt-2">
      <div className="flex w-[32.25rem] h-[15.625rem] justify-between gap-4">
        <div className="flex-grow">
          <div className="flex justify-between w-full mb-0">
            <p className="text-[#072635] inner-card-title-18pt font-bold font-Manrope pt-3">
              Blood Pressure
            </p>
            <div className="flex flex-row gap-2 mr-3">
              <p className="body-regular-14 font-medium font-Manrope pt-4">
                Last 6 months
              </p>
              <IconButton
                imageSrc="/images/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                className="bg-transparent px-1"
                width={11}
                height={6}
              />
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="flex flex-col mt-4 space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#E66FD2]"></div>
            <p className="font-Manrope font-bold text-[#072635] text-lg">
              Systolic
            </p>
          </div>
          <p className="font-Manrope font-bold text-[#072635] text-xl">160</p>
          <div className="flex items-center justify-between w-full mt-1 gap-2">
            <Image
              src="/images/ArrowUp.svg"
              alt="Arrow Up"
              className="bg-transparent"
              width={11}
              height={6}
            />
            <p className="text-right body-regular-14">Higher than Average</p>
          </div>
        </div>
        <hr className="border border-gray-300 w-full" />

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#8C6FE6]"></div>
            <p className="font-Manrope font-bold text-[#072635] text-lg">
              Diastolic
            </p>
          </div>
          <p className="font-Manrope font-bold text-[#072635] text-xl">78</p>
          <div className="flex items-center justify-between w-full mt-1 gap-2">
            <Image
              src="/images/ArrowDown.svg"
              alt="Arrow Down"
              className="bg-transparent"
              width={11}
              height={6}
            />
            <p className="text-right body-regular-14">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
