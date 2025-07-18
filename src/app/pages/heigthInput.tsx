'use client';

import { useState } from 'react';
import { FaWeight } from 'react-icons/fa'; // ícone do peso para o BMI

interface HeightInputProps {
	onContinue: () => void;
}

export default function HeightInput({ onContinue }: HeightInputProps) {
	const [unit, setUnit] = useState<'cm' | 'ft'>('cm');
	const [height, setHeight] = useState('');

	const handleUnitChange = (newUnit: 'cm' | 'ft') => {
		setUnit(newUnit);
		setHeight('');
	};

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
				<div className="bg-pink-600 h-full w-1/5 rounded-full" />
			</div>

			{/* Main content */}
			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-6">What is your height?</h2>

				{/* Unit Toggle */}
				<div className="flex justify-center mb-6">
					<div className="inline-flex bg-gray-200 rounded-full p-1">
						<button
							onClick={() => handleUnitChange('cm')}
							className={`px-4 py-1 rounded-full font-medium text-sm transition ${
								unit === 'cm' ? 'bg-gray-900 text-white' : 'text-gray-700'
							}`}
						>
							cm
						</button>
						<button
							onClick={() => handleUnitChange('ft')}
							className={`px-4 py-1 rounded-full font-medium text-sm transition ${
								unit === 'ft' ? 'bg-gray-900 text-white' : 'text-gray-700'
							}`}
						>
							ft
						</button>
					</div>
				</div>

				{/* Input */}
				<div className="text-center">
					<input
						type="number"
						inputMode="numeric"
						placeholder={unit}
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						className="text-5xl text-center font-semibold border-b border-gray-300 focus:outline-none focus:border-pink-600 w-40"
					/>
					<p className="mt-2 text-sm text-gray-600 uppercase">{unit}</p>
				</div>

				{/* BMI info box */}
				<div className="mt-10 bg-white border border-gray-200 rounded-xl px-6 py-4 text-left max-w-sm shadow-sm">
					<div className="flex items-start gap-3">
						<div className="text-pink-600 mt-1">
							<FaWeight className="text-xl" />
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">
								Calculating your BMI
							</h3>
							<p className="text-sm text-gray-600 mt-1 leading-snug">
								Body mass index (BMI) is a metric of body fat percentage
								commonly used to estimate risk levels of potential health
								problems.
							</p>
						</div>
					</div>
				</div>
			</main>

			{/* Footer button */}
			<footer className="p-4 w-full max-w-md mx-auto mt-10">
				<button
					onClick={onContinue}
					disabled={!height}
					className={`w-full bg-pink-700 text-white py-3 rounded-full font-semibold transition ${
						!height ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-800'
					}`}
				>
					Next step
				</button>
			</footer>
		</div>
	);
}
