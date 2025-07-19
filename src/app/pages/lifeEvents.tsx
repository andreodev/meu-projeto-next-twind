import { useState } from 'react';
import {
  FaHeart,
  FaBaby,
  FaBriefcase,
  FaPills,
} from 'react-icons/fa';
import { MdSentimentDissatisfied } from 'react-icons/md';
import { IoCloseCircleOutline } from 'react-icons/io5';

const lifeEvents = [
  {
    label: 'Marriage or a relationship',
    icon: <FaHeart className="text-pink-600 w-5 h-5" />,
  },
  {
    label: 'Pregnancy',
    icon: <FaBaby className="text-pink-600 w-5 h-5" />,
  },
  {
    label: 'Busy work or family life',
    icon: <FaBriefcase className="text-pink-600 w-5 h-5" />,
  },
  {
    label: 'Stress or mental health',
    icon: <MdSentimentDissatisfied className="text-pink-600 w-5 h-5" />,
  },
  {
    label: 'Medicine or hormonal disorder',
    icon: <FaPills className="text-pink-600 w-5 h-5" />,
  },
  {
    label: 'None of the above',
    icon: <IoCloseCircleOutline className="text-pink-600 w-5 h-5" />,
  },
];

type Props = {
  onContinue: (selected: string[]) => void;
};

export default function LifeEvents({ onContinue }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    if (label === 'None of the above') {
      setSelectedItems(['None of the above']);
    } else {
      setSelectedItems((prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label)
          : [...prev.filter((item) => item !== 'None of the above'), label]
      );
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col items-center text-gray-900">
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          PILATES
          <span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
            by HARNA
          </span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full max-w-md h-1 bg-gray-200 rounded-full relative mb-6">
        <div className="absolute top-0 left-0 h-full w-[72.7273%] bg-pink-600 rounded-full"></div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-6 text-center max-w-md">
        Choose any life events that have led to weight gain
      </h2>

      {/* Options */}
      <ul className="w-full max-w-md space-y-3">
        {lifeEvents.map(({ label, icon }) => (
          <li key={label}>
            <button
              type="button"
              onClick={() => toggleItem(label)}
              className={`w-full flex items-center justify-between gap-4 rounded-xl border px-5 py-4 transition text-left
                ${
                  selectedItems.includes(label)
                    ? 'bg-pink-50 border-pink-400'
                    : 'border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center gap-4">
                {icon}
                <span className="font-medium text-sm">{label}</span>
              </div>
              <input
                type="checkbox"
                readOnly
                checked={selectedItems.includes(label)}
                className="pointer-events-none w-5 h-5"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Next step button */}
      <button
        type="button"
        disabled={selectedItems.length === 0}
        onClick={() => onContinue(selectedItems)}
        className={`mt-10 w-full max-w-md py-4 rounded-full font-semibold text-white transition
          ${
            selectedItems.length === 0
              ? 'bg-pink-200 cursor-not-allowed'
              : 'bg-pink-600 hover:bg-pink-700'
          }
        `}
      >
        Next step
      </button>
    </div>
  );
}
