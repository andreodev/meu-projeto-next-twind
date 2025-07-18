import { useState } from 'react';

const bodyTypes = [
	{ label: 'Curvy', image: '/curvy.jpg' },
	{ label: 'Thin', image: '/thin.jpg' },
	{ label: 'Normal', image: '/normal.jpg' },
	{ label: 'In shape', image: '/in-shape.jpg' },
	{ label: "I'm OK with my body", image: '/ok-body.jpg' },
];

type Props = {
	onSelect: (label: string) => void;
};

export default function DreamBody({ onSelect }: Props) {
	const [selected, setSelected] = useState<string | null>(null);

	const handleSelect = (label: string) => {
		setSelected(label);
		onSelect(label);
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
				<div className="absolute top-0 left-0 h-full w-[33%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold mb-6 text-center">
				What is your dream body?
			</h2>

			{/* Options */}
			<ul className="w-full max-w-md space-y-4">
				{bodyTypes.map(({ label, image }) => (
					<li key={label}>
						<button
							type="button"
							onClick={() => handleSelect(label)}
							className={`flex items-center gap-4 w-full rounded-xl border px-4 py-3 text-left transition
                ${
									selected === label
										? 'border-pink-600 bg-pink-50'
										: 'border-gray-300 hover:bg-gray-50'
								}
              `}
						>
							<img
								src={image}
								alt={label}
								className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
							/>
							<span className="font-semibold text-gray-900">{label}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
