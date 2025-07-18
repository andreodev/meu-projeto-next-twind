import Image from 'next/image';

interface StressSleepSectionProps {
	onContinue: () => void;
}

export default function StressSleepSection({
	onContinue,
}: StressSleepSectionProps) {
	return (
		<div className="min-h-screen flex flex-col justify-between items-center bg-white text-center px-4 py-10 text-gray-900">
			{/* Header */}
			<header className="w-full max-w-4xl mx-auto flex justify-center sm:justify-start items-center p-4">
				<div className="flex items-center gap-2 font-bold text-xl text-gray-900">
					PILATES
					<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			{/* Conteúdo principal */}
			<main className="flex flex-col items-center justify-center flex-grow max-w-md mx-auto mt-4">
				<div className="w-72 h-48 relative rounded-xl overflow-hidden">
					<Image
						src="/bro.jpg" // substitua pela URL correta se quiser usar a da internet
						alt="Muscular man"
						fill
						style={{ objectFit: 'cover', borderRadius: '1rem' }}
						priority
					/>
				</div>

				<h2 className="mt-8 text-2xl sm:text-3xl font-extrabold max-w-xl leading-snug">
					Just 7 minutes a day —{' '}
					<span className="text-pink-700">
						lower your stress levels and improve your sleep!
					</span>
				</h2>

				<p className="mt-4 text-gray-600 text-base max-w-md">
					Pilates can significantly improve sleep quality and reduce insomnia
					symptoms in <strong>women going through menopause.</strong>
				</p>
			</main>

			{/* Botão */}
			<footer className="w-full max-w-md mx-auto mt-10 px-4">
				<button
					onClick={onContinue}
					className="w-full bg-pink-700 text-white font-semibold py-3 rounded-full text-lg hover:bg-pink-800 transition"
				>
					Continue
				</button>
			</footer>
		</div>
	);
}
