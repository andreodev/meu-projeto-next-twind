import { useState } from 'react';

const options = [
  { label: 'I only have coffee or tea' },
  { label: 'About 2 glasses (0,5 L)' },
  { label: '2 to 6 glasses (0,5–1,5 L)' },
  { label: 'More than 6 glasses' },
];

type Props = {
  onSelect: (label: string) => void;
};

export default function DrinkDaily({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    onSelect(label);
  };

  return (
    <div className="relative min-h-screen bg-white px-4 py-6 flex justify-center items-start">
      {/* Content and image side by side */}
      <div className="relative flex w-full max-w-2xl">
        {/* Formulario */}
        <div className="relative z-10 w-full max-w-md text-gray-900">
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
            <div className="absolute top-0 left-0 h-full w-[69.697%] bg-pink-600 rounded-full"></div>
          </div>

          {/* Pergunta */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How much water do you drink daily?
          </h2>

          {/* Opções */}
          <ul className="space-y-4">
            {options.map(({ label }) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => handleSelect(label)}
                  className={`flex items-center gap-4 w-full rounded-xl border px-4 py-3 text-left transition ${
                    selected === label
                      ? 'border-pink-600 bg-pink-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-gray-900">{label}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem */}
        <div className="absolute -right-36 top-20 hidden md:block">
          <img
            src="https://s3.harna-app.com/quizes_images/aa1d0947-398c-4749-896b-87bae6012624.png"
            alt="Water illustration"
            className="w-[340px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
