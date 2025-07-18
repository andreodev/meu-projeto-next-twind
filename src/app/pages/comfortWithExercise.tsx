import { useState } from 'react';
import { FiSmile, FiMeh, FiFrown } from 'react-icons/fi';

const options = [
	{ label: 'Pain/Discomfort', Icon: FiFrown },
	{ label: 'Some difficulty', Icon: FiMeh },
	{ label: 'Comfortable', Icon: FiSmile },
];

type Props = {
	onContinue: (selected: string) => void;
};

export default function ComfortWithExercise({ onContinue }: Props) {
	const [selected, setSelected] = useState<string>('');

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
				How comfortable are you with exercising?
			</h2>

			{/* Options */}
			<ul className="w-full max-w-md space-y-4">
				{options.map(({ label, Icon }) => (
					<li key={label}>
						<button
							type="button"
							onClick={() => setSelected(label)}
							className={`w-full flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition
                ${
									selected === label
										? 'bg-pink-50 border-pink-400'
										: 'border-gray-300 hover:bg-gray-50'
								}
              `}
						>
							<Icon
								size={24}
								className={
									selected === label ? 'text-pink-600' : 'text-gray-400'
								}
							/>
							<span className="font-semibold text-gray-900">{label}</span>
						</button>
					</li>
				))}
			</ul>

			{/* Continue Button */}
			<button
				type="button"
				disabled={!selected}
				onClick={() => onContinue(selected)}
				className={`mt-10 w-full max-w-md py-4 rounded-full font-semibold text-white transition
          ${
						!selected
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
