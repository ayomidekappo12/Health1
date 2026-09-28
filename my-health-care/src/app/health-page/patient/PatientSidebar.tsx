"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Patient } from "@/lib/patients";

interface PatientSidebarProps {
  patients: Patient[];
  selectedPatientName: string;
  onPatientSelect?: (patientName: string) => void;
}

const PatientSidebar = ({
  patients,
  selectedPatientName,
  onPatientSelect,
}: PatientSidebarProps) => {
  return (
    <div className="w-80 h-[1054px] bg-white border-r border-[#E6E6E6] flex flex-col mx-4 rounded-xl">
      {/* Header */}
      <div className="p-6 border-b border-[#E6E6E6]">
        <h2 className="card-title mb-4">Patients</h2>
        <div className="relative ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 card-title" />
          <Input
            placeholder="Search patients..."
            className="bg-cards border-[#E6E6E6] rounded-xl pl-10 h-12 placeholder:body-secondary"
          />
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto scrollbar-custom scroll-smooth">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={cn(
              "flex items-center gap-3 p-4 border-b border-[#E6E6E6] cursor-pointer transition-colors",
              selectedPatientName === patient.name
                ? "border-l-4 border-l-active-bg-1 bg-[#d8fcf7]"
                : "hover:bg-muted/50"
            )}
            onClick={() => onPatientSelect?.(patient.name)}
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={patient.profile_picture} alt={patient.name} />
              <AvatarFallback>
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-Manrope body-bold truncate">{patient.name}</p>
              <p className="text-sm body-primary">
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