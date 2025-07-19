import { useState } from 'react';

interface ActivityOption {
  label: string;
  subtitle: string;
  image: string;
}

interface DailyActivityProps {
  onContinue: () => void;
}

const option: ActivityOption[] = [
  {
    label: 'Yoga',
    subtitle: 'Reduce stress and bring balance to your life',
    image: 'https://s3.harna-app.com/quizes_images/979db116-2f5b-4b71-81ab-02cd422116e4.png', // você deve fornecer o caminho real da imagem
  },
  {
    label: 'Barre',
    subtitle: 'Fine-tune your muscles, even the hidden ones',
    image: 'https://s3.harna-app.com/quizes_images/57658365-f66e-4ece-91cb-d2a09f26dc4c.png',
  },
  {
    label: 'Strength',
    subtitle: "Work those muscles to get stronger",
    image: 'https://s3.harna-app.com/quizes_images/1e3ad868-c6d2-401e-8fa2-abb789a57848.png',
  },
  {
    label: 'Circuits',
    subtitle: 'Burn fat, lose weight, and gain muscle',
    image: 'https://s3.harna-app.com/quizes_images/628fee75-b502-4e25-a97b-91e7d227dbf7.png', // você deve fornecer o caminho real da imagem
  },
  {
    label: 'HIIT',
    subtitle: 'Intense workout to get your heart rate up',
    image: 'https://s3.harna-app.com/quizes_images/e0106848-0324-4a44-8774-ae8c973d1540.png',
  },
  {
    label: 'Cardio',
    subtitle: "Essential workout to burn a lot of calories",
    image: 'https://s3.harna-app.com/quizes_images/a690be8b-3d4e-40c3-839b-ba77a6660918.png',
  },
];


export default function OthersActivity({
	onContinue,
}: DailyActivityProps) {
	const [improveWholeBody, setImproveWholeBody] = useState(false);
	const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

	const toggleArea = (label: string) => {
		if (selectedAreas.includes(label)) {
			setSelectedAreas(selectedAreas.filter((a) => a !== label));
		} else {
			setSelectedAreas([...selectedAreas, label]);
		}
	};

	const isNextEnabled = improveWholeBody || selectedAreas.length > 0;

	return (
		<div className="min-h-screen bg-white text-gray-900 px-4 py-6 flex flex-col items-center">
			{/* Header */}
			<header className="w-full max-w-md flex justify-between items-center mb-4">
				<div className="flex items-center gap-2 text-xl font-bold">
					PILATES
					<span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			{/* Progress bar */}
			<div className="w-full max-w-md h-1 bg-gray-200 rounded-full relative mb-6">
				<div className="absolute top-0 left-0 h-full w-[66.6667%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold text-center mb-1 max-w-md">
				Besides Pilates, what other activities catch your eye?
			</h2>
			<p className="text-center text-gray-500 mb-6 max-w-md">
				Select at least one
			</p>

			{/* Areas list */}
			<ul className="w-full max-w-md space-y-3">
				{option.map(( option ) => (
					<li key={option.label}>
						<button
							type="button"
							onClick={() => toggleArea(option.label)}
							className={`w-full flex items-center justify-between px-5 py-4 border rounded-xl transition
                ${
									selectedAreas.includes(option.label)
										? 'bg-pink-50 border-pink-400'
										: 'bg-white border-gray-200 hover:bg-gray-50'
								}
              `}
						>
							<div className="flex items-center gap-4 text-gray-900 font-semibold">
								<img
                src={option.image}
                alt={option.label}
                className="w-14 h-14 rounded-full object-cover"
              />
								 <div>
                <p className="font-semibold">{option.label}</p>
                <p className="text-sm text-gray-600">{option.subtitle}</p>
              </div>
							</div>
							<input
								type="checkbox"
								readOnly
								checked={selectedAreas.includes(option.label)}
								className="pointer-events-none"
							/>
						</button>
					</li>
				))}
			</ul>

			{/* Continue button */}
			<button
				type="button"
				onClick={onContinue}
				disabled={!isNextEnabled}
				className={`mt-12 w-full max-w-md py-4 rounded-full font-semibold text-white transition
          ${
						!isNextEnabled
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
