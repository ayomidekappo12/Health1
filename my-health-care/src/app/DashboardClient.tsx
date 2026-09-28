"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import PatientSidebar from "@/app/health-page/patient/PatientSidebar";
import DiagnosisHistory from "@/app/health-page/history/DiagnosisHistory";
import DiagnosticList from "@/app/health-page/diagnostic List/DiagnosticList";
import LabReport from "@/app/health-page/lab_report/LabReport";
import PatientDetails from "@/app/health-page/details/PatientDetails";
import { Patient } from "@/lib/patients";

export default function DashboardClient({ patients }: { patients: Patient[] }) {
  const defaultPatient =
    patients.find((patient) => patient.name === "Jessica Taylor") ?? patients[0];
  const [selectedPatientName, setSelectedPatientName] = useState(
    defaultPatient?.name ?? ""
  );
  const selectedPatient =
    patients.find((patient) => patient.name === selectedPatientName) ??
    defaultPatient;

  if (!selectedPatient) {
    return (
      <div className="p-8 text-center text-red-700" role="alert">
        No patient data is available.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background py-2">
      <div className="flex w-full items-start">
        <div className="hidden lg:block shrink-0">
          <PatientSidebar
            patients={patients}
            selectedPatientName={selectedPatient.name}
            onPatientSelect={setSelectedPatientName}
          />
        </div>

        <div className="lg:hidden fixed top-20 left-4 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" className="flex items-center gap-2 bg-gray-100 rounded-xl">
                <Users className="w-4 h-4" />
                Patients
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 m-4 rounded-xl">
              <PatientSidebar
                patients={patients}
                selectedPatientName={selectedPatient.name}
                onPatientSelect={setSelectedPatientName}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 min-w-0 w-full flex flex-col lg:-mt-6 lg:-mx-4">
          <DiagnosisHistory patient={selectedPatient} />
          <DiagnosticList diagnoses={selectedPatient.diagnostic_list} />
          <div className="block mt-4 lg:hidden">
            <LabReport labResults={selectedPatient.lab_results} />
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-5 shrink-0">
          <PatientDetails patient={selectedPatient} />
          <LabReport labResults={selectedPatient.lab_results} />
        </div>

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
              <PatientDetails patient={selectedPatient} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
