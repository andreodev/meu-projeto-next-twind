import Image from 'next/image';

export default function SuccessSection({ onGoing }: { onGoing: () => void }) {
	return (
		<div className="min-h-screen flex flex-col justify-between items-center bg-white text-center px-4 py-10">
			{/* Header */}
			<header className="w-full max-w-4xl mx-auto flex justify-center sm:justify-start items-center p-4">
				<div className="flex items-center gap-2 font-bold text-xl">
					PILATES
					<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full">
						by HARNA
					</span>
				</div>
			</header>

			{/* Conteúdo principal */}
			<main className="flex flex-col items-center justify-center flex-grow max-w-md mx-auto mt-4">
				<Image
					src="/women.png"
					alt="Group of happy women"
					width={320}
					height={240}
					className="rounded-xl object-cover"
					priority
				/>

				<h2 className="text-2xl sm:text-3xl font-extrabold mt-6 text-gray-900">
					They did it, and so can you!
				</h2>
				<p className="mt-2 text-gray-700 text-sm sm:text-base">
					17 million women in menopause have transformed their lives with{' '}
					<span className="font-bold text-gray-900">HARNA</span>
				</p>
			</main>

			{/* Botão */}
			<footer className="w-full max-w-md mx-auto mt-10 px-4">
				<button
					onClick={onGoing}
					className="w-full bg-pink-700 text-white font-semibold py-3 rounded-full text-lg hover:bg-pink-800 transition"
				>
					Continue
				</button>
			</footer>
		</div>
	);
}
