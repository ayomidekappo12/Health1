import DashboardClient from "@/app/DashboardClient";
import { getPatients } from "@/lib/patients";

export const dynamic = "force-dynamic";

export default async function Index() {
  try {
    return <DashboardClient patients={await getPatients()} />;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load patient data.";

    return (
      <div className="p-8 text-center text-red-700" role="alert">
        {message}
      </div>
    );
  }
}
