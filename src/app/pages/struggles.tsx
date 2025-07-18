import { useState } from 'react';

const struggles = [
	{
		label: 'Sensitive back',
		imgSrc:
			'https://cdn.pixabay.com/photo/2017/08/07/18/03/woman-2609717_640.jpg', // substitua pela URL correta da imagem
	},
	{
		label: 'Sensitive knees',
		imgSrc:
			'https://cdn.pixabay.com/photo/2017/08/07/18/04/woman-2609718_640.jpg', // substitua pela URL correta da imagem
	},
	{
		label: 'Hip surgery',
		imgSrc:
			'https://cdn.pixabay.com/photo/2017/08/07/18/05/woman-2609719_640.jpg', // substitua pela URL correta da imagem
	},
	{ label: 'Other', imgSrc: null },
	{ label: 'None of the above', imgSrc: null },
];

type Props = {
	onContinue: (selected: string[]) => void;
};

export default function Struggles({ onContinue }: Props) {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const toggleItem = (label: string) => {
		if (selectedItems.includes(label)) {
			setSelectedItems(selectedItems.filter((item) => item !== label));
		} else {
			setSelectedItems([...selectedItems, label]);
		}
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
				<div className="absolute top-0 left-0 h-full w-[70%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Question */}
			<h2 className="text-2xl font-semibold mb-1 text-center max-w-md">
				Do you struggle with any of the following?
			</h2>
			<p className="text-center text-gray-500 mb-6 max-w-md">
				Please select all that apply
			</p>

			{/* Options */}
			<ul className="w-full max-w-md space-y-3">
				{struggles.map(({ label, imgSrc }) => (
					<li key={label}>
						<button
							type="button"
							onClick={() => toggleItem(label)}
							className={`w-full flex items-center gap-4 rounded-xl border px-5 py-4 transition
                ${
									selectedItems.includes(label)
										? 'bg-pink-50 border-pink-400'
										: 'border-gray-300 hover:bg-gray-50'
								}
              `}
						>
							{imgSrc && (
								<img
									src={imgSrc}
									alt={label}
									className="w-14 h-14 rounded-lg object-cover"
									loading="lazy"
								/>
							)}
							<span className="flex-1 font-semibold text-gray-900">
								{label}
							</span>
							<input
								type="checkbox"
								readOnly
								checked={selectedItems.includes(label)}
								className="pointer-events-none"
							/>
						</button>
					</li>
				))}
			</ul>

			{/* Next step button */}
			<button
				type="button"
				disabled={selectedItems.length === 0}
				onClick={() => onContinue(selectedItems)}
				className={`mt-10 w-full max-w-md py-4 rounded-full font-semibold text-white transition
          ${
						selectedItems.length === 0
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
