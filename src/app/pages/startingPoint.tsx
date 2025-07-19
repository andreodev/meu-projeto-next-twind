import { useState } from 'react';

const options = [
	{
		label: 'Skinny',
		description: 'Looking to gain muscle mass',
		image: 'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/bodytype-border/slim.jpg', // substitua pelo caminho correto da imagem
	},
	{
		label: 'Skinny fat',
		description: 'Skinny, but need to tone up and lose some weight',
		image: 'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/bodytype-border/mid_sized.jpg',
	},
	{
		label: 'Muscular with some fat',
		description: 'Want to reduce fat, keep muscle',
		image: 'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/bodytype-border/heavier_side.jpg',
	},
	{
		label: 'Overweight',
		description: 'Looking for a quick and healthy way to lose weight',
		image: 'https://s3.harna-app.com/static_assets/images/quizes/steps/basic/bodytype-border/overweight.jpg',
	},
];

type Props = {
	onSelect: (label: string) => void;
};

export default function StartingPoint({ onSelect }: Props) {
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
				<div className="absolute top-0 left-0 h-full w-[25%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold mb-6 text-center">
				What is your starting point?
			</h2>

			{/* Options */}
			<ul className="w-full max-w-md space-y-4">
				{options.map(({ label, description, image }) => (
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
							<div>
								<p className="font-semibold text-gray-900">{label}</p>
								<p className="text-gray-600 text-sm">{description}</p>
							</div>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
