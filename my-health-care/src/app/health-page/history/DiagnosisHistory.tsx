"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VitalSignsCards from "@/app/health-page/vitals/VitalSignsCards";
import { Patient } from "@/lib/patients";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const bloodPressureTicks = [60, 80, 100, 120, 140, 160, 180];

const DiagnosisHistory = ({ patient }: { patient: Patient }) => {
  const bloodPressureData = patient.diagnosis_history.map((entry) => ({
    month: `${entry.month.slice(0, 3)} ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));
  const latest = patient.diagnosis_history[patient.diagnosis_history.length - 1];

  if (!latest) {
    return null;
  }

  return (
    <div className="flex-1 bg-background h-[673px] p-2 sm:p-4 md:p-6">
      <Card className="rounded-2xl border-[#e6e6e6] bg-white shadow-none">
        <CardHeader className="px-5 py-5 sm:px-6">
          <CardTitle className="card-title">Diagnosis History</CardTitle>
        </CardHeader>
        <CardContent className="m-4 rounded-xl bg-[#f6f1ff] p-4 sm:p-5 md:my-2 md:p-4">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_160px] lg:gap-2">
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="title-inner">Blood Pressure</h3>
                <Select defaultValue="last6months">
                  <SelectTrigger className="h-auto w-[125px] border-0 bg-transparent p-0 text-right shadow-none focus:ring-0 manrope-regular-md">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-[#e6e6e6] bg-white">
                    <SelectItem value="last6months">Last 6 months</SelectItem>
                    <SelectItem value="last12months">Last 12 months</SelectItem>
                    <SelectItem value="lastyear">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-[210px] w-full sm:h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={bloodPressureData}
                    margin={{ top: 8, right: 4, left: -18, bottom: 0 }}
                  >
                    <CartesianGrid
                      vertical={false}
                      stroke="#d3cfdb"
                      syncWithTicks={false}
                      horizontalValues={bloodPressureTicks}
                    />

                    <ReferenceLine y={160} stroke="#d3cfdb" strokeWidth={1} />

                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      stroke="#193448"
                      fontSize={11}
                      dy={8}
                      interval={0}
                      minTickGap={18}
                      tickFormatter={(value) => value}
                    />
                    <YAxis
                      domain={[60, 180]}
                      ticks={bloodPressureTicks}
                      axisLine={{
                       stroke: "#d3cfdb",
                       strokeWidth: 1,
                      }}
                      tickLine={false}
                      stroke="#193448"
                      fontSize={12}
                    />
                    <Line
                      type="monotone"
                      dataKey="systolic"
                      stroke="#E66FD2"
                      strokeWidth={2}
                      activeDot={false}
                      dot={{
                        fill: "#E66FD2",
                        stroke: "#E66FD2",
                        strokeWidth: 1,
                        r: 5,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="diastolic"
                      stroke="#8C6FE6"
                      strokeWidth={2}
                      activeDot={false}
                      dot={{
                        fill: "#8C6FE6",
                        stroke: "#8C6FE6",
                        strokeWidth: 1,
                        r: 5,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:pl-8 pb-14 ">
              <div className="border-b border-[#d8d3df] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#e66fd2]" />
                  <span className="body-bold">Systolic</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#072635]">
                  {latest.blood_pressure.systolic.value}
                </p>
                <div className="mt-2 flex items-center gap-2 body-secondary">
                  <span className="text-[#072635]">▲</span>
                  <span>{latest.blood_pressure.systolic.levels}</span>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#8c6fe6]" />
                  <span className="body-bold">Diastolic</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#072635]">
                  {latest.blood_pressure.diastolic.value}
                </p>
                <div className="mt-2 flex items-center gap-2 body-secondary">
                  <span className="text-[#072635]">▼</span>
                  <span>{latest.blood_pressure.diastolic.levels}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="flex flex-col">
          <VitalSignsCards history={latest} />
        </div>
      </Card>
    </div>
  );
};

export default DiagnosisHistory;
