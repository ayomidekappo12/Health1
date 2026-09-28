import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LabResultsProps {
  labResults: string[];
  selectedResultsId?: string;
  onResultsSelect?: (resultId: string) => void;
}

const LabResults = ({
  labResults,
  selectedResultsId,
  onResultsSelect,
}: LabResultsProps) => {
  return (
    <Card className="h-[296px] w-auto bg-white mx-2 sm:mx-6 lg:mx-4 p-3 rounded-xl overflow-hidden">
      <CardContent className="flex h-full flex-col p-0">
        <h2 className="card-title pt-2">
          Lab Results
        </h2>

        <div className="flex-1 overflow-y-auto scrollbar-custom scroll-smooth mt-4">
          <div className="space-y-0 px-2">
            {labResults.map((title) => {
              const isSelected = selectedResultsId === title;

              return (
                <button
                  key={title}
                  type="button"
                  aria-pressed={isSelected}
                  className={`flex h-[40px] w-full items-center justify-between gap-6 px-2 text-left transition-colors ${
                    isSelected ? "bg-[#F6F7F8]" : "bg-white"
                  }`}
                  onClick={() => onResultsSelect?.(title)}
                >
                  <span className="manrope-regular-sm">
                    {title}
                  </span>
                  <Download
                    aria-label={`Download ${title}`}
                    className="h-[20px] w-[20px] shrink-0 text-black"
                    strokeWidth={2}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LabResults;
