'use client';

import { useState, useEffect } from 'react';

interface WeightInputProps {
	onContinue: () => void;
	height: number; // em cm
}

export default function WeightInput({ onContinue, height }: WeightInputProps) {
	const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
	const [weight, setWeight] = useState('');
	const [bmi, setBmi] = useState<number | null>(null);
	const [bmiMessage, setBmiMessage] = useState('');

	const handleUnitChange = (newUnit: 'kg' | 'lb') => {
		setUnit(newUnit);
		setWeight('');
		setBmi(null);
		setBmiMessage('');
	};

	useEffect(() => {
		const w = parseFloat(weight);
		if (!isNaN(w) && height > 0) {
			const heightMeters = height / 100;
			const weightKg = unit === 'kg' ? w : w * 0.453592;
			const calculatedBmi = weightKg / (heightMeters * heightMeters);
			setBmi(calculatedBmi);

			if (calculatedBmi < 18.5) {
				setBmiMessage(
					'Focus on muscle toning and a balanced diet. Stay positive and try to keep your daily calorie consumption in the recommended range.'
				);
			} else if (calculatedBmi < 25) {
				setBmiMessage(
					'Great job! Maintain your weight with regular pilates and a nutritious diet.'
				);
			} else if (calculatedBmi < 30) {
				setBmiMessage(
					'Try to include more movement and be consistent with your pilates sessions. A balanced diet will also help you get in shape.'
				);
			} else {
				setBmiMessage(
					'It’s important to focus on consistency. Start gently and make pilates a habit. Talk to your doctor for tailored advice.'
				);
			}
		} else {
			setBmi(null);
			setBmiMessage('');
		}
	}, [weight, unit, height]);

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
				<div className="bg-pink-600 h-full w-[32%] rounded-full" />
			</div>

			{/* Main */}
			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-6">
					What is your weight now?
				</h2>

				{/* Unit Toggle */}
				<div className="flex justify-center mb-6">
					<div className="inline-flex bg-gray-200 rounded-full p-1">
						<button
							onClick={() => handleUnitChange('kg')}
							className={`px-4 py-1 rounded-full font-medium text-sm transition ${
								unit === 'kg' ? 'bg-gray-900 text-white' : 'text-gray-700'
							}`}
						>
							kg
						</button>
						<button
							onClick={() => handleUnitChange('lb')}
							className={`px-4 py-1 rounded-full font-medium text-sm transition ${
								unit === 'lb' ? 'bg-gray-900 text-white' : 'text-gray-700'
							}`}
						>
							lb
						</button>
					</div>
				</div>

				{/* Input */}
				<div className="text-center mb-6">
					<input
						type="number"
						inputMode="numeric"
						placeholder={unit}
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						className="text-5xl text-center font-semibold border-b border-gray-300 focus:outline-none focus:border-pink-600 w-40"
					/>
					<p className="mt-2 text-sm text-gray-600 uppercase">{unit}</p>
				</div>

				{/* BMI Result */}
				{bmi && (
					<div className="border rounded-xl p-4 text-left text-sm max-w-md w-full bg-white shadow-sm">
						<div className="flex items-start gap-2">
							<span className="text-lg">⚖️</span>
							<div>
								<p className="font-semibold">
									Your BMI is {bmi.toFixed(2)}, which is{' '}
									{bmi < 18.5
										? 'considered underweight'
										: bmi < 25
										? 'in the healthy range'
										: bmi < 30
										? 'considered overweight'
										: 'considered obese'}
								</p>
								<p className="mt-1 text-gray-700">{bmiMessage}</p>
							</div>
						</div>
					</div>
				)}
			</main>

			{/* Footer */}
			<footer className="p-4 w-full max-w-md mx-auto mt-10">
				<button
					onClick={onContinue}
					disabled={!weight}
					className={`w-full bg-pink-700 text-white py-3 rounded-full font-semibold transition ${
						!weight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-800'
					}`}
				>
					Next step
				</button>
			</footer>
		</div>
	);
}
