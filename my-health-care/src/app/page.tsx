"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PatientSidebar from "@/app/health-page/patient/PatientSidebar";
import DiagnosisHistory from "@/app/health-page/history/DiagnosisHistory";
import VitalSignsCards from "@/app/health-page/vitals/VitalSignsCards";
import PatientDetails from "@/app/health-page/details/PatientDetails";
import { Users } from "lucide-react";

const Index = () => {
  const [selectedPatientId, setSelectedPatientId] = useState("12");

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <PatientSidebar
            selectedPatientId={selectedPatientId}
            onPatientSelect={setSelectedPatientId}
          />
        </div>

        {/* Mobile Sidebar Sheet */}
        <div className="lg:hidden fixed top-20 left-4 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="sm"
                className="flex items-center gap-2 bg-gray-bg-light rounded-xl"
              >
                <Users className="w-4 h-4" />
                Patients
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <PatientSidebar
                selectedPatientId={selectedPatientId}
                onPatientSelect={setSelectedPatientId}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex flex-col ">
          <DiagnosisHistory />
          <VitalSignsCards />
        </div>

        {/* Desktop Patient Details */}
        <div className="hidden lg:block">
          <PatientDetails />
        </div>

        {/* Mobile Patient Details Sheet */}
        <div className="lg:hidden fixed top-20 right-4 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" className="bg-gray-bg-light rounded-xl">
                Patient Info
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-80">
              <PatientDetails />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Index;