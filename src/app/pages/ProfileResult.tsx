'use client';

interface ProfileResultProps {
	bmi: number;
	lifestyle: string;
	bodyType: string;
	fitnessLevel: string;
	trainingType: string;
	onContinue: () => void;
}

export default function ProfileResult({
	bmi,
	lifestyle,
	bodyType,
	fitnessLevel,
	trainingType,
	onContinue,
}: ProfileResultProps) {
	const bmiNormalized = Math.min(Math.max(bmi, 10), 40);
	const bmiPercent = ((bmiNormalized - 10) / (40 - 10)) * 100;

	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-900 px-4 py-8 items-center">
			{/* Header */}
			<header className="w-full max-w-4xl mx-auto flex justify-between items-center p-4">
				<div className="flex items-center gap-2 font-bold text-xl">
					PILATES
					<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			<h2 className="text-2xl font-semibold mt-6 mb-8">
				Your profile is ready
			</h2>

			{/* BMI Section */}
			<div className="w-full max-w-xl bg-white shadow-sm border rounded-xl p-6 mb-6">
				<h4 className="text-sm font-medium mb-2">Body Mass Index (BMI)</h4>
				<div className="relative w-full h-4 bg-gradient-to-r from-blue-500 via-green-300 to-red-400 rounded-full mb-2">
					<div
						className="absolute top-[-12px] text-xs text-center left-0 transform -translate-x-1/2 whitespace-nowrap"
						style={{ left: `${bmiPercent}%` }}
					>
						You - {bmi.toFixed(2)}
					</div>
					<div
						className="absolute w-4 h-4 bg-white border-2 border-green-400 rounded-full top-0 left-0 transform -translate-x-1/2"
						style={{ left: `${bmiPercent}%` }}
					/>
				</div>
				<div className="flex justify-between text-sm text-gray-600">
					<span>Underweight</span>
					<span>Normal</span>
					<span>Obese</span>
				</div>
			</div>

			{/* Profile Summary */}
			<div className="w-full max-w-xl bg-white border rounded-xl flex justify-between items-center p-6 mb-4">
				<div className="space-y-3 text-left text-sm">
					<p>
						<span className="font-semibold inline-flex items-center gap-1">
							🪑 Lifestyle
						</span>
						<br />
						{lifestyle}
					</p>
					<p>
						<span className="font-semibold inline-flex items-center gap-1">
							❤️ Body type
						</span>
						<br />
						{bodyType}
					</p>
					<p>
						<span className="font-semibold inline-flex items-center gap-1">
							🏋️ Fitness Level
						</span>
						<br />
						{fitnessLevel}
					</p>
				</div>
				{/* Placeholder avatar - substitua por imagem real se quiser */}
				<img
					src="/images/female-avatar.png"
					alt="Profile avatar"
					className="w-36 h-auto object-contain"
				/>
			</div>

			{/* Training type */}
			<div className="w-full max-w-xl bg-white border rounded-xl p-4 text-sm mb-6">
				<span className="font-semibold">Your TRAINING TYPE is </span>
				<span className="text-pink-600 font-semibold">{trainingType}</span>
			</div>

			{/* Continue Button */}
			<button
				onClick={onContinue}
				className="bg-pink-700 text-white font-semibold py-3 px-10 rounded-full hover:bg-pink-800 transition"
			>
				Continue
			</button>
		</div>
	);
}
