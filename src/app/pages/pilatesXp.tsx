import { useState } from 'react';

const options = [
	'Yes, regularly',
	'Yes, but rarely',
	'No, I have no experience',
];

type Props = {
	onSelect: (selection: string) => void;
};

export default function PilatesExperience({ onSelect }: Props) {
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
				<div className="absolute top-0 left-0 h-full w-[60%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold mb-6 text-center max-w-md">
				Have you had any previous experience with Pilates?
			</h2>

			{/* Options list */}
			<ul className="w-full max-w-md space-y-4">
				{options.map((option) => (
					<li key={option}>
						<button
							type="button"
							onClick={() => handleSelect(option)}
							className={`w-full text-left rounded-xl border px-5 py-4 transition
                ${
									selected === option
										? 'bg-pink-50 border-pink-600'
										: 'border-gray-300 hover:bg-gray-50'
								}
              `}
						>
							<span className="font-semibold text-gray-900">{option}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
