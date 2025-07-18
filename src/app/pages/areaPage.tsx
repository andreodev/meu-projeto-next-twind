import { useState } from 'react';

const areas = [
	{ label: 'A double chin', img: '/areas/double-chin.jpg' },
	{ label: 'Sagging arms', img: '/areas/sagging-arms.jpg' },
	{ label: 'Droopy breasts', img: '/areas/droopy-breasts.jpg' },
	{ label: 'Belly fat', img: '/areas/belly-fat.jpg' },
	{ label: 'Fat on knees', img: '/areas/fat-on-knees.jpg' },
	{ label: 'Saddlebags', img: '/areas/saddlebags.jpg' },
	{ label: 'Flabby buttocks', img: '/areas/flabby-buttocks.jpg' },
	{ label: 'Other areas', img: null },
	{ label: 'None of them', img: null },
];

export default function TargetZones({
	onContinue,
}: {
	onContinue: () => void;
}) {
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
				<div className="absolute top-0 left-0 h-full w-[33%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold text-center mb-1 max-w-md">
				Which areas concern you the most?
			</h2>
			<p className="text-center text-gray-500 mb-6 max-w-md">
				Please select all that apply
			</p>

			{/* Improve whole body toggle */}
			<label className="w-full max-w-md flex items-center gap-3 mb-6 cursor-pointer select-none">
				<input
					type="checkbox"
					checked={improveWholeBody}
					onChange={() => setImproveWholeBody(!improveWholeBody)}
					className="w-5 h-5"
				/>
				<span className="font-semibold text-gray-900">Improve whole body</span>
			</label>

			{/* Areas list */}
			<ul className="w-full max-w-md space-y-3">
				{areas.map(({ label, img }) => (
					<li key={label}>
						<button
							type="button"
							onClick={() => toggleArea(label)}
							className={`w-full flex items-center justify-between px-5 py-4 border rounded-xl transition
                ${
									selectedAreas.includes(label)
										? 'bg-pink-50 border-pink-400'
										: 'bg-white border-gray-200 hover:bg-gray-50'
								}
              `}
						>
							<div className="flex items-center gap-4 text-gray-900 font-semibold">
								{img && (
									<img
										src={img}
										alt={label}
										className="w-14 h-14 rounded-lg object-cover"
										loading="lazy"
									/>
								)}
								<span>{label}</span>
							</div>
							<input
								type="checkbox"
								readOnly
								checked={selectedAreas.includes(label)}
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
