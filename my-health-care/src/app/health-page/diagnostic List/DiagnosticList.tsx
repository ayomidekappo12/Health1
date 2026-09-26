import { Card, CardContent } from "@/components/ui/card";

const diagnoses = [
  {
    name: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    name: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degeneration of joint cartilage",
    status: "Untreated",
  },
  {
    name: "Allergic Rhinitis",
    description: "Seasonal nasal inflammation caused by allergens",
    status: "Active",
  },
];

const DiagnosticList = () => {
  return (
    <Card className="mx-2 rounded-2xl border-0 bg-white sm:mx-6 overflow-hidden">
      <CardContent className="p-4">
        <h2 className="mb-6 card-title pt-2">
          Diagnostic List
        </h2>

        <div className="grid grid-cols-[1.1fr_1.7fr_0.55fr] items-center gap-3 rounded-full bg-[#f6f7f8] px-4 py-4 manrope-bold-md sm:gap-5 sm:px-4">
          <span>Problem/Diagnosis</span>
          <span>Description</span>
          <span>Status</span>
        </div>

        <div
          aria-label="Diagnoses"
          className="overflow-y-auto scrollbar-custom scroll-smooth mt-3 max-h-[349px] pr-1 sm:max-h-[180px]"
        >
          {diagnoses.map((diagnosis) => (
            <div
              key={diagnosis.name}
              className="grid min-h-[47px] grid-cols-[1.1fr_1.7fr_0.55fr] items-center gap-3 border-b border-[#f1f3f4] px-4 py-3 body-regular last:border-b-0 sm:gap-5"
            >
              <span>{diagnosis.name}</span>
              <span>{diagnosis.description}</span>
              <span>{diagnosis.status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticList;
