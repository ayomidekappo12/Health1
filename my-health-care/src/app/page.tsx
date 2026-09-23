"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PatientSidebar from "@/app/health-page/patient/PatientSidebar";
import DiagnosisHistory from "@/app/health-page/history/DiagnosisHistory";
import LabReport from "@/app/health-page/lab_report/LabReport";
import PatientDetails from "@/app/health-page/details/PatientDetails";
import { Users } from "lucide-react";

const Index = () => {
  const [selectedPatientId, setSelectedPatientId] = useState("12");

  return (
    <div className="w-auto h-auto bg-background py-2">
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
                className="flex items-center gap-2 bg-gray-100 rounded-xl"
              >
                <Users className="w-4 h-4" />
                Patients
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 m-4 rounded-xl">
              <PatientSidebar
                selectedPatientId={selectedPatientId}
                onPatientSelect={setSelectedPatientId}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 md:flex-3 flex flex-col md:-m-4">
          <DiagnosisHistory />
          <div className="mb-4">
            <LabReport />
          </div>
        </div>

        {/* Desktop Patient Details */}
        <div className="flex flex-col gap-5">
          <div className="hidden lg:block">
            <PatientDetails />
          </div>
          <div className="hidden lg:block">
            <LabReport />
          </div>
        </div>

        {/* Mobile Patient Details Sheet */}
        <div className="lg:hidden fixed top-20 right-4 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" className="bg-gray-100 rounded-xl">
                Patient Info
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="p-0 w-80 border-none m-4 rounded-xl overflow-y-auto scrollbar-custom scroll-smooth"
            >
              <PatientDetails />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Index;