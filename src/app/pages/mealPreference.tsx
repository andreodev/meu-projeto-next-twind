import { useState } from 'react';

const struggles = [
  {
    label: 'I am vegetarian',
    subtitle: 'Greens, grains, but no animal meat',
    imgSrc:
      'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/diet/vegetarian.png',
  },
  {
    label: 'I am vegan',
    subtitle: 'Purely plant-based, no animal products',
    imgSrc:
      'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/diet/vegan.png',
  },
  {
    label: 'Gluten-free',
    subtitle: 'Exclude grain products that contain gluten',
    imgSrc:
      'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/restrictions/gluten.png',
  },
  {
    label: 'Lactose-free',
    subtitle: 'Exclude dairy products',
    imgSrc:
      'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/restrictions/lactose.png',
  },
  {
    label: 'No restrictions',
    subtitle: 'Open to all foods',
    imgSrc:
      'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/restrictions/none.png',
  },
];

type Props = {
  onContinue: (selected: string[]) => void;
};

export default function MealPreference({ onContinue }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((item) => item !== label));
    } else {
      setSelectedItems([...selectedItems, label]);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-white flex items-center justify-center text-gray-900">
      <div className="flex flex-col items-center w-full max-w-md px-4 py-6">
        {/* Header */}
        <header className="w-full flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            PILATES
            <span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
              by HARNA
            </span>
          </div>
        </header>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full relative mb-6">
          <div className="absolute top-0 left-0 h-full w-[72.7273%] bg-pink-600 rounded-full"></div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-semibold mb-1 text-center">
          Do you struggle with any of the following?
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please select all that apply
        </p>

        {/* Options */}
        <ul className="w-full space-y-3">
          {struggles.map((option) => (
            <li key={option.label}>
              <button
                type="button"
                onClick={() => toggleItem(option.label)}
                className={`w-full flex items-center gap-4 rounded-xl border px-5 py-4 transition ${
                  selectedItems.includes(option.label)
                    ? 'bg-pink-50 border-pink-400'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <img
                  src={option.imgSrc}
                  alt={option.label}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{option.label}</p>
                  <p className="text-sm text-gray-600">{option.subtitle}</p>
                </div>
                <input
                  type="checkbox"
                  readOnly
                  checked={selectedItems.includes(option.label)}
                  className="pointer-events-none ml-auto"
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
          className={`mt-10 w-full py-4 rounded-full font-semibold text-white transition ${
            selectedItems.length === 0
              ? 'bg-pink-200 cursor-not-allowed'
              : 'bg-pink-600 hover:bg-pink-700'
          }`}
        >
          Next step
        </button>
      </div>
    </div>
  );
}
