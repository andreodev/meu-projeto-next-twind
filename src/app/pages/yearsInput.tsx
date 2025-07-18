'use client';

import { useState } from 'react';

interface AgeInputProps {
	onContinue: () => void;
}

export default function AgeInput({ onContinue }: AgeInputProps) {
	const [age, setAge] = useState('');

	const isValid = Number(age) >= 10 && Number(age) <= 120;

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
				<div className="bg-pink-600 h-full w-[50%] rounded-full" />
			</div>

			{/* Main */}
			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-6">What&apos;s your age?</h2>

				{/* Input */}
				<div className="flex items-end justify-center text-5xl font-semibold mb-6">
					<input
						type="number"
						min="10"
						max="120"
						inputMode="numeric"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						className="w-24 text-center border-b border-gray-300 focus:outline-none focus:border-pink-600"
					/>
					<span className="ml-2 text-gray-700 text-2xl pb-1">years</span>
				</div>

				{/* Info Card */}
				{isValid && (
					<div className="bg-white border rounded-xl p-4 text-left shadow-sm w-full max-w-md mb-6">
						<div className="flex items-start gap-3">
							<span className="text-xl text-pink-600 mt-1">⚡</span>
							<div>
								<p className="font-semibold">
									We ask your age to personalize your plan
								</p>
								<p className="text-sm text-gray-600 mt-1">
									Older people are found to have a higher body fat percentage
									than younger people with the same BMI.
								</p>
							</div>
						</div>
					</div>
				)}
			</main>

			{/* Footer */}
			<footer className="p-4 w-full max-w-md mx-auto mt-10">
				<button
					onClick={onContinue}
					disabled={!isValid}
					className={`w-full py-3 rounded-full font-semibold transition ${
						isValid
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
