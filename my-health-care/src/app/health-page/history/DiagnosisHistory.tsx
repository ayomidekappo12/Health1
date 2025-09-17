"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const bloodPressureData = [
  { month: "Oct 2023", systolic: 110, diastolic: 78 },
  { month: "Nov 2023", systolic: 115, diastolic: 75 },
  { month: "Dec 2023", systolic: 160, diastolic: 78 },
  { month: "Jan 2024", systolic: 110, diastolic: 68 },
  { month: "Feb 2024", systolic: 155, diastolic: 78 },
  { month: "Mar 2024", systolic: 140, diastolic: 75 },
];

const DiagnosisHistory = () => {
  return (
    <div className="flex-1 p-4 md:p-6 space-y-6 bg-card">
      <Card className="bg-white rounded-xl">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle className="card-title">Diagnosis History</CardTitle>
          <Select defaultValue="last6months">
            <SelectTrigger className="w-full sm:w-40 manrope-regular-md bg-cards border-border rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="last6months">Last 6 months</SelectItem>
              <SelectItem value="last12months">Last 12 months</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <h3 className="title-inner">Blood Pressure</h3>
              <div className="flex items-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div>
                  <span className="body-secondary">Systolic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
                  <span className="body-secondary">Diastolic</span>
                </div>
              </div>
            </div>

            <div className="h-48 md:h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bloodPressureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="month" stroke="#abb4c0" fontSize={12} />
                  <YAxis stroke="#abb4c0" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#E66FD2"
                    strokeWidth={2}
                    dot={{
                      fill: "#E66FD2",
                      strokeWidth: 2,
                      r: 4,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#8C6FE6"
                    strokeWidth={2}
                    dot={{
                      fill: "#8C6FE6",
                      strokeWidth: 2,
                      r: 4,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-12">
                  <span className="body-secondary">Systolic</span>
                  <span className="text-lg font-bold body-secondary">120</span>
                </div>
                <div className="flex items-center gap-2 body-secondary">
                  <span>↑ Higher than Average</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-12">
                  <span className="body-secondary">Diastolic</span>
                  <span className="text-lg font-bold body-secondary">80</span>
                </div>
                <div className="flex items-center gap-2 body-secondary">
                  <span>↓ Lower than Average</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="body-secondary">
                    The result for your BP is:
                  </span>
                </div>
                <div className="flex items-center gap-2 body-secondary pt-1">
                  <span>✔ Normal</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiagnosisHistory;
