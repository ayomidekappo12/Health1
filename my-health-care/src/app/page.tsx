"use client";

import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import PatientSidebar from "@/app/health-page/patient/PatientSidebar";
import DiagnosisHistory from "@/app/health-page/history/DiagnosisHistory";
import DiagnosticList from "@/app/health-page/diagnostic List/DiagnosticList";
import LabReport from "@/app/health-page/lab_report/LabReport";
import PatientDetails from "@/app/health-page/details/PatientDetails";

import { Users } from "lucide-react";

const Index = () => {
  const [selectedPatientId, setSelectedPatientId] = useState("12");

  return (
    <div className="w-full min-h-screen bg-background py-2">
      <div className="flex w-full items-start">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block shrink-0">
          <PatientSidebar
            selectedPatientId={selectedPatientId}
            onPatientSelect={setSelectedPatientId}
          />
        </div>

        {/* Mobile / Tablet Sidebar Sheet */}
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

            <SheetContent
              side="left"
              className="p-0 w-80 m-4 rounded-xl"
            >
              <PatientSidebar
                selectedPatientId={selectedPatientId}
                onPatientSelect={setSelectedPatientId}
              />
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 w-full flex flex-col lg:-mt-6 lg:-mx-4">
          <DiagnosisHistory />

          <div>
            <DiagnosticList />
          </div>

          {/* Mobile / Tablet Lab Report */}
          <div className="block mt-4 lg:hidden">
            <LabReport />
          </div>
        </div>

        {/* Desktop Patient Details */}
        <div className="hidden lg:flex flex-col gap-5 shrink-0">
          <PatientDetails />
          <LabReport />
        </div>

        {/* Mobile / Tablet Patient Details Sheet */}
        <div className="lg:hidden fixed top-20 right-4 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="sm"
                className="bg-gray-100 rounded-xl"
              >
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