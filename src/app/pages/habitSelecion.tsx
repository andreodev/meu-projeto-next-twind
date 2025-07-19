import { useState } from 'react';
import {
  FiClock,
  FiCoffee,
  FiFacebook,
  FiMeh,
} from 'react-icons/fi';
import {
  MdFastfood,
  MdOutlineTv,
  MdSelfImprovement,
  MdSmokeFree,
} from 'react-icons/md';
import { FaUserClock, FaGlassCheers } from 'react-icons/fa';
import { BsHandIndex } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';

const habits = [
  { label: 'Procrastination', icon: <FiClock className="text-pink-600 w-5 h-5" /> },
  { label: 'Unhealthy eating', icon: <MdFastfood className="text-pink-600 w-5 h-5" /> },
  { label: 'Social media', icon: <FiFacebook className="text-pink-600 w-5 h-5" /> },
  { label: 'Drinking too much caffeine', icon: <FiCoffee className="text-pink-600 w-5 h-5" /> },
  { label: 'Binge-watching', icon: <MdOutlineTv className="text-pink-600 w-5 h-5" /> },
  { label: 'Self-doubt', icon: <MdSelfImprovement className="text-pink-600 w-5 h-5" /> },
  { label: 'Nail-biting', icon: <BsHandIndex className="text-pink-600 w-5 h-5" /> },
  { label: 'Being late', icon: <FaUserClock className="text-pink-600 w-5 h-5" /> },
  { label: 'Smoking', icon: <MdSmokeFree className="text-pink-600 w-5 h-5" /> },
  { label: 'Drinking alcohol', icon: <FaGlassCheers className="text-pink-600 w-5 h-5" /> },
  { label: 'None of them', icon: <IoCloseCircleOutline className="text-pink-600 w-5 h-5" /> },
];

type Props = {
  onContinue: (selected: string[]) => void;
};

export default function HabitSelection({ onContinue }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    if (label === 'None of them') {
      setSelectedItems(['None of them']);
    } else {
      setSelectedItems((prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label)
          : [...prev.filter((item) => item !== 'None of them'), label]
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
      <h2 className="text-2xl font-semibold mb-1 text-center max-w-md">
        Which of these habits do you have?
      </h2>

      {/* Options */}
      <ul className="w-full max-w-md space-y-3 mt-6">
        {habits.map(({ label, icon }) => (
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

      {/* Next button */}
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
