'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';


const data = [
  { name: 'Today', withHarna: 0, noChange: 0 },
  { name: '', withHarna: 20, noChange: -10 },
  { name: '', withHarna: 45, noChange: -20 },
  { name: 'Jul 18', withHarna: 70, noChange: -30 },
];

export default function LifeTransformationChart() {
  return (
    <div className="flex flex-col items-center mb-70 px-4 text-center bg-white">
      <h1 className="text-2xl p-6 font-bold">This is how your life transformation looks</h1>
      <p className="text-sm mt-1  text-gray-500">
        We predict you’ll be more healthy and toned
      </p>

      {/* Labels with Icons */}
      <div className="flex gap-6 mb-4">
        <div className="flex items-center gap-2 text-green-600 font-medium">
          <FaCheckCircle className="w-5 h-5" />
          With HARNA
        </div>
        <div className="flex items-center gap-2 text-rose-500 font-medium">
          <FaExclamationTriangle className="w-5 h-5" />
          No changes
        </div>
      </div>

      {/* Chart */}
      <div className="w-full max-w-md h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis hide domain={[-40, 80]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="withHarna"
              stroke="#28C76F"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="With HARNA"
            />
            <Line
              type="monotone"
              dataKey="noChange"
              stroke="#EA5455"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="No changes"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
