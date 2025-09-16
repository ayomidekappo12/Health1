"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";


interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  image: string;
  isActive?: boolean;
}

const patients: Patient[] = [
  {
    id: "1",
    image: "/images/Layer8/Layer 8.png",
    name: "Emily Williams",
    gender: "Female",
    age: 18,
  },
  {
    id: "2",
    image: "/images/Layer1/Layer 1.png",
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
  },
  {
    id: "3",
    image: "/images/Layer3/Layer 3.png",
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
  },
  {
    id: "4",
    image: "/images/Layer2/Layer 2.png",
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
  },
  {
    id: "5",
    image: "/images/Layer6/Layer 6.png",
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
  },
  {
    id: "6",
    image: "/images/Layer12/Layer 12.png",
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
  },
  {
    id: "7",
    image: "/images/Layer10/Layer 10.png",
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
  },
  {
    id: "8",
    image: "/images/Layer9/Layer 9.png",
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
  },
  {
    id: "9",
    image: "/images/Layer4/Layer 4.png",
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
  },
  {
    id: "10",
    image: "/images/Layer5/Layer 5.png",
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
  },
  {
    id: "11",
    image: "/images/Layer7/Layer 7.png",
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
  },
  {
    id: "12",
    image: "/images/pexels-photo/pexels-photo-1.png",
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
  },
];

interface PatientSidebarProps {
  selectedPatientId?: string;
  onPatientSelect?: (patientId: string) => void;
}

const PatientSidebar = ({
  selectedPatientId = "4",
  onPatientSelect,
}: PatientSidebarProps) => {
  return (
    <div className="w-80 h-[750px] bg-white border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="card-title mb-4">Patients</h2>
        <div className="relative ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 card-title" />
          <Input
            placeholder="Search patients..."
            className="bg-cards border-border rounded-xl pl-10 h-12 placeholder:body-secondary"
          />
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto scrollbar-custom scroll-smooth">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={cn(
              "flex items-center gap-3 p-4 border-b border-border cursor-pointer transition-colors",
              selectedPatientId === patient.id
                ? "bg-secondary border-l-4 border-l-active-bg-1"
                : "hover:bg-muted/50"
            )}
            onClick={() => onPatientSelect?.(patient.id)}
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={patient.image} alt={patient.name} />
              <AvatarFallback>
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="manrope-medium-lg truncate">{patient.name}</p>
              <p className="text-sm body-secondary">
                {patient.gender}, {patient.age}
              </p>
            </div>
            <Button size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSidebar;