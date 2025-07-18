'use client';

import { useState } from 'react';

interface PilatesPriorityProps {
	onContinue: () => void;
}

export default function PilatesPriority({ onContinue }: PilatesPriorityProps) {
	const options = [
		'Gentle, adapted exercises',
		'Professional support',
		'Personalized approach',
		'Explanation of health benefits',
	];

	const [selected, setSelected] = useState<string | null>(null);

	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-900 px-4">
			{/* Header */}
			<header className="w-full max-w-4xl mx-auto flex justify-between items-center p-4">
				<div className="flex items-center gap-2 font-bold text-xl">
					PILATES
					<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			{/* Progress bar */}
			<div className="h-1 w-full max-w-4xl mx-auto bg-gray-200 rounded-full mt-2 mb-6">
				<div className="bg-pink-600 h-full w-[60%] rounded-full" />
			</div>

			{/* Main Content */}
			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-2xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-6">
					What is most important&nbsp; to you in a<br /> Pilates program?
				</h2>

				<div className="flex flex-col gap-4 w-full">
					{options.map((option) => (
						<button
							key={option}
							onClick={() => setSelected(option)}
							className={`px-6 py-4 rounded-2xl border text-left text-base font-medium transition ${
								selected === option
									? 'bg-pink-100 border-pink-500 text-pink-700'
									: 'bg-white border-gray-300 hover:border-pink-400'
							}`}
						>
							{option}
						</button>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="p-4 w-full max-w-md mx-auto mt-10">
				<button
					onClick={onContinue}
					disabled={!selected}
					className={`w-full py-3 rounded-full font-semibold transition ${
						selected
							? 'bg-pink-700 text-white hover:bg-pink-800'
							: 'bg-pink-100 text-white cursor-not-allowed'
					}`}
				>
					Next step
				</button>
			</footer>
		</div>
	);
}
