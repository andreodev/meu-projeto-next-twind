import { useState } from 'react';
import {
	FaFire,
	FaRegClock,
	FaRegFrown,
	FaRegMeh,
	FaBone,
	FaChartLine,
} from 'react-icons/fa';

const symptoms = [
	{ label: 'Hot flashes', icon: <FaFire className="text-pink-600" /> },
	{ label: 'Sleep problems', icon: <FaRegClock className="text-pink-600" /> },
	{ label: 'Fatigue', icon: <FaRegFrown className="text-pink-600" /> },
	{ label: 'Mood changes', icon: <FaRegMeh className="text-pink-600" /> },
	{ label: 'Joint pain', icon: <FaBone className="text-pink-600" /> },
	{ label: 'Weight gain', icon: <FaChartLine className="text-pink-600" /> },
	{ label: 'Other', icon: null },
];

export default function Sintomas({ onContinue }: { onContinue: () => void }) {
	const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

	const toggleSymptom = (label: string) => {
		if (selectedSymptoms.includes(label)) {
			setSelectedSymptoms(selectedSymptoms.filter((sym) => sym !== label));
		} else {
			setSelectedSymptoms([...selectedSymptoms, label]);
		}
	};

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
				<div className="absolute top-0 left-0 h-full w-[25%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold text-center mb-1">
				Which of these symptoms do you have?
			</h2>
			<p className="text-center text-gray-500 mb-6">
				You may choose several options
			</p>

			{/* Symptoms list */}
			<ul className="w-full max-w-md space-y-3">
				{symptoms.map(({ label, icon }) => (
					<li key={label}>
						<button
							onClick={() => toggleSymptom(label)}
							className={`w-full flex items-center justify-between px-5 py-4 border rounded-xl transition
                ${
									selectedSymptoms.includes(label)
										? 'bg-pink-50 border-pink-400'
										: 'bg-white border-gray-200 hover:bg-gray-50'
								}
              `}
							type="button"
						>
							<div className="flex items-center gap-3 text-gray-900 font-semibold">
								{icon && <span className="text-lg">{icon}</span>}
								<span>{label}</span>
							</div>
							<input
								type="checkbox"
								readOnly
								checked={selectedSymptoms.includes(label)}
								className="pointer-events-none"
							/>
						</button>
					</li>
				))}
			</ul>

			{/* Continue button */}
			<button
				onClick={onContinue}
				type="button"
				disabled={selectedSymptoms.length === 0}
				className={`mt-12 w-full max-w-md py-4 rounded-full font-semibold text-white transition 
          ${
						selectedSymptoms.length === 0
							? 'bg-pink-200 cursor-not-allowed'
							: 'bg-pink-600 hover:bg-pink-700'
					}
        `}
			>
				Continue
			</button>
		</div>
	);
}
