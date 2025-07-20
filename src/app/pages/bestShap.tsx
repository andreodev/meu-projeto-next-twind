import { useState } from "react";

const options = [
  "Less than a year ago",
  "1 to 2 years ago",
  "More than 3 years ago",
  "Never",
];

type Props = {
  onSelect: (selection: string) => void;
};

export default function BestShape({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
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
        <div className="absolute top-0 left-0 h-full w-[40%] bg-pink-600 rounded-full"></div>
      </div>

      {/* Question and content */}
      <h2 className="text-2xl font-semibold mb-6">
        How long ago were you in the best shape of your life?
      </h2>
      <div className="relative flex justify-center w-full">
        <div className="hidden sm:flex absolute inset-1 justify-center ml-[500px] pointer-events-none">
          <img
            src="https://s3.harna-app.com/quizes_images/cfbdfd19-5b91-476a-aba5-f76165dd0519.png"
            alt="Woman in pink fitness outfit"
            className=" h-auto rounded-md  select-none"
            draggable={false}
          />
        </div>
        <div className="relative flex flex-col sm:flex-row items-center gap-6 max-w-md w-full z-10">
            <ul className="flex flex-col w-full gap-4 bg-white/80 p-4 rounded-xl">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left rounded-xl border px-4 py-4 transition
                    ${
                      selected === option
                        ? "bg-pink-50 border-pink-600"
                        : "border-gray-300 hover:bg-gray-50"
                    }
										`}
                >
                  <span className="font-semibold text-gray-900">{option}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
