'use client';

import { useState } from 'react';

interface ActivityOption {
	label: string;
	subtitle: string;
	image: string;
}

interface DailyActivityProps {
	onContinue: () => void;
}

const options: ActivityOption[] = [
	{
		label: 'Sedentary',
		subtitle: 'I spend most of the day sitting',
		image: 'https://s3.harna-app.com/quizes_images/27b48633-2120-445a-8281-84e2f6f1db16.png', // você deve fornecer o caminho real da imagem
	},
	{
		label: 'Moderate activity',
		subtitle: 'I take active breaks',
		image: 'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/typicalDay/moderate_activity.jpg',
	},
	{
		label: 'I’m unstoppable',
		subtitle: "I'm on my feet all day long",
		image: 'https://s3.harna-app.com/quizes_images/ffbf7abd-3b11-4a58-bba2-2c43b9c14d62.png',
	},
];

export default function DailyActivity({ onContinue }: DailyActivityProps) {
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
				<div className="bg-pink-600 h-full w-[65%] rounded-full" />
			</div>

			{/* Question */}
			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-2xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-8">
					How would you describe your typical day?
				</h2>

				<div className="flex flex-col gap-4 w-full">
					{options.map((option) => (
						<button
							key={option.label}
							onClick={() => setSelected(option.label)}
							className={`flex items-center gap-4 text-left border rounded-2xl p-4 transition ${
								selected === option.label
									? 'bg-pink-50 border-pink-500'
									: 'bg-white border-gray-300 hover:border-pink-400'
							}`}
						>
							<img
								src={option.image}
								alt={option.label}
								className="w-14 h-14 rounded-full object-cover"
							/>
							<div>
								<p className="font-semibold">{option.label}</p>
								<p className="text-sm text-gray-600">{option.subtitle}</p>
							</div>
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
