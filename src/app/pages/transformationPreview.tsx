'use client';

import TransformationChart from "@/components/Transformation";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

type Props = {
  onContinue: () => void;
};

export default function TransformationPreview({ onContinue }: Props) {
  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col justify-center items-center text-gray-900 text-center">
      {/* Header */}
      <header className="w-full max-w-md flex justify-center items-center mb-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          PILATES
          <span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
            by HARNA
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <TransformationChart />

        <div className="flex items-center gap-2 text-green-600 font-medium">
          <FaCheckCircle className="w-5 h-5" />
          <span>
            <strong>With HARNA:</strong> Transformation ✅
          </span>
        </div>

        <div className="flex items-center gap-2 text-red-600 font-medium">
          <FaExclamationTriangle className="w-5 h-5" />
          <span>
            <strong>No changes:</strong> ⚠️ No progress
          </span>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="w-full py-4 rounded-full font-semibold text-white bg-pink-700 hover:bg-pink-800 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
