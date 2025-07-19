import { useState } from 'react';

const options = [
	"It's hard for me to gain muscle or weight",
	'I can easily lose and gain weight',
	'I gain weight faster than I can lose it',
];

export default function WeightChange({
	onContinue,
}: {
	onContinue: () => void;
}) {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
				<div className="absolute top-0 left-0 h-full w-[20%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold text-center mb-8 max-w-md">
				How does your weight usually change?
			</h2>

			{/* Options and Image */}
			<div className="flex flex-col sm:flex-row items-center gap-6 max-w-md w-full">
				{/* Options List */}
				<ul className="flex flex-col w-full gap-4">
					{options.map((option) => (
						<li key={option}>
							<button
								type="button"
								onClick={() => setSelectedOption(option)}
								className={`w-full text-left px-6 py-4 border rounded-xl text-gray-900 font-semibold transition
                  ${
										selectedOption === option
											? 'bg-pink-50 border-pink-400'
											: 'bg-white border-gray-200 hover:bg-gray-50'
									}
                `}
							>
								{option}
							</button>
						</li>
					))}
				</ul>

				{/* Image on right */}
				<div className="hidden sm:block w-[160px] flex-shrink-0">
					<img
						src="https://s3.harna-app.com/quizes_images/59da77e5-7bef-4678-989e-511bc970cf9f.png"
						alt="Fit woman in red outfit"
						className="w-full h-auto rounded-lg object-contain"
						loading="lazy"
					/>
				</div>
			</div>

			{/* Continue Button */}
			<button
				type="button"
				disabled={!selectedOption}
				onClick={onContinue}
				className={`mt-12 w-full max-w-md py-4 rounded-full font-semibold text-white transition
          ${
						!selectedOption
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
