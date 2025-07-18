type Props = {
	onContinue: () => void;
};

export default function SimilarIssues({ onContinue }: Props) {
	return (
		<div className="min-h-screen bg-white text-gray-900 px-4 py-8 flex flex-col items-center">
			{/* Header */}
			<header className="w-full max-w-md flex justify-center items-center mb-8">
				<div className="flex items-center gap-2 text-xl font-bold">
					PILATES
					<span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			{/* Image */}
			<img
				src="/muscular-man-pointing.jpg" // troque pelo caminho correto
				alt="Muscular man pointing up"
				className="w-full max-w-md rounded-2xl mb-8 object-cover"
			/>

			{/* Text */}
			<h2 className="text-center text-2xl font-semibold max-w-md mb-4">
				Almost{' '}
				<span className="text-pink-600 font-bold">65% of women your age</span>{' '}
				have similar issues!
			</h2>
			<p className="text-center text-gray-600 max-w-sm font-medium">
				Try changing your life with small steps. You’ll start seeing the{' '}
				<strong>first changes in yourself in just a week.</strong>
			</p>

			{/* Spacer to push button down */}
			<div className="flex-grow" />

			{/* Continue Button */}
			<button
				onClick={onContinue}
				type="button"
				className="mt-12 w-full max-w-md py-4 bg-pink-700 text-white rounded-full font-semibold hover:bg-pink-800 transition"
			>
				Continue
			</button>
		</div>
	);
}
