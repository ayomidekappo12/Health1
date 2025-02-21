"use client";
import IconButton from "@/components/IconButton";
import PatientCard from "@/components/PatientCard";

export default function SideBar() {
  const patients = [
    {
      imageSrc: "/images/Layer8/Layer 8.png",
      name: "Emily Williams",
      gender: "Female",
      age: 18,
    },
    {
      imageSrc: "/images/Layer1/Layer 1.png",
      name: "Ryan Johnson",
      gender: "Male",
      age: 45,
    },
    {
      imageSrc: "/images/Layer3/Layer 3.png",
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
    },
    {
      imageSrc: "/images/Layer2/Layer 2.png",
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
    },
    {
      imageSrc: "/images/Layer6/Layer 6.png",
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
    },
    {
      imageSrc: "/images/Layer12/Layer 12.png",
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
    },
    {
      imageSrc: "/images/Layer10/Layer 10.png",
      name: "Olivia Brown",
      gender: "Female",
      age: 32,
    },
    {
      imageSrc: "/images/Layer9/Layer 9.png",
      name: "Tyler Davis",
      gender: "Male",
      age: 19,
    },
    {
      imageSrc: "/images/Layer4/Layer 4.png",
      name: "Kevin Anderson",
      gender: "Male",
      age: 30,
    },
    {
      imageSrc: "/images/Layer5/Layer 5.png",
      name: "Dylan Thompson",
      gender: "Male",
      age: 36,
    },
    {
      imageSrc: "/images/Layer7/Layer 7.png",
      name: "Nathan Evans",
      gender: "Male",
      age: 58,
    },
    {
      imageSrc: "/images/pexels-photo/pexels-photo-1.png",
      name: "Mike Nolan",
      gender: "Male",
      age: 31,
    },
  ];
  return (
    <div className="flex flex-col justify-between space-y-4">
      <div className="flex flex-col w-full h-fit container lg:w-[22.938rem] py-4 px-3 bg-white opacity-100 rounded-2xl">
        <div className="flex flex-row justify-between items-center pb-4">
          <h3 className=" my-2 lg:my-0 card-title-24pt font-extrabold text-left pl-4 opacity-100">
            Patients
          </h3>
          <IconButton
            imageSrc="/images/search_FILL0_wght300_GRAD0_opsz24.svg"
            className="bg-transparent px-0"
            width={16}
            height={16}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 w-full h-fit lg:h-[67rem] mb-2 lg:mb-0 lg:gap-4 lg:flex flex-col overflow-y-auto scrollbar-custom pr-2">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-around lg:justify-between mt-3 lg:mt-0"
            >
              <PatientCard
                imageSrc={patient.imageSrc}
                value={patient.name}
                text={patient.gender}
                age={patient.age}
              />
              <IconButton
                imageSrc="/images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                className="lg:-me-1"
                width={18}
                height={4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
