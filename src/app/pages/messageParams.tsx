'use client';

import Image from 'next/image';

interface SuccessSectionProps {
	onGoing: () => void;
}

export default function MessageParams({ onGoing }: SuccessSectionProps) {
	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-900 px-4">
			<header className="w-full max-w-4xl mx-auto flex justify-between items-center p-4">
				<div className="flex items-center gap-2 font-bold text-xl">
					PILATES
					<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			<main className="flex flex-col items-center justify-center flex-grow text-center max-w-xl mx-auto">
				<div className="overflow-hidden rounded-xl">
					<Image
						src="/man.png" // ou a URL da imagem real
						alt="Muscular man giving thumbs up"
						width={350}
						height={250}
						className="object-cover rounded-xl"
						priority
					/>
				</div>

				<h2 className="text-2xl font-bold mt-8">That&apos;s great!</h2>
				<p className="mt-2 text-gray-600 max-w-xs">
					You’re ready to move forward— get ready for transformation with
					Pilates.
				</p>

				<button
					onClick={onGoing}
					className="mt-12 bg-pink-700 text-white py-3 px-10 rounded-full font-semibold hover:bg-pink-800 transition"
				>
					Continue
				</button>
			</main>
		</div>
	);
}
