export interface VitalReading {
  value: number;
  levels: string;
}

export interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: VitalReading;
    diastolic: VitalReading;
  };
  heart_rate: VitalReading;
  respiratory_rate: VitalReading;
  temperature: VitalReading;
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}

const PATIENTS_ENDPOINT =
  process.env.PATIENTS_API_URL ??
  "https://fedskillstest.coalitiontechnologies.workers.dev";

export async function getPatients(): Promise<Patient[]> {
  const username = process.env.PATIENTS_API_USERNAME ?? "coalition";
  const password = process.env.PATIENTS_API_PASSWORD ?? "skills-test";
  const authorization = Buffer.from(`${username}:${password}`).toString("base64");

  const response = await fetch(PATIENTS_ENDPOINT, {
    headers: { Authorization: `Basic ${authorization}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Patient API request failed with status ${response.status}.`);
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Patient API returned an invalid response.");
  }

  return data as Patient[];
}
