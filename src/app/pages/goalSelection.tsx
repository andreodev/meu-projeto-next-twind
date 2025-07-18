import {
	FaWeight,
	FaClipboardList,
	FaMoon,
	FaBolt,
	FaRunning,
} from 'react-icons/fa';

const goals = [
	{ label: 'Lose weight', icon: <FaWeight /> },
	{ label: 'Maintain weight and get fit', icon: <FaClipboardList /> },
	{ label: 'Improve sleep and reduce stress', icon: <FaMoon /> },
	{ label: 'Boost energy', icon: <FaBolt /> },
	{ label: 'Improve physical fitness', icon: <FaRunning /> },
];

interface GoalSelectionProps {
	selectedGoal: string | null;
	setSelectedGoal: (goal: string) => void;
	setStep: (step: 'age' | 'success' | 'goal' | 'stressSleep') => void;
}

export default function GoalSelection({
	selectedGoal,
	setSelectedGoal,
	setStep,
}: GoalSelectionProps) {
	const handleGoalSelect = (goal: string) => {
		setSelectedGoal(goal);
		setStep('stressSleep');
	};
	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-6">
			{/* Header */}
			<header className="w-full max-w-md flex justify-between items-center mb-4">
				<div className="flex items-center gap-2 text-xl font-bold">
					PILATES
					<span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
						by HARNA
					</span>
				</div>
			</header>

			{/* Progress bar */}
			<div className="w-full max-w-md h-1 bg-gray-200 rounded-full relative mb-6">
				<div className="absolute top-0 left-0 h-full w-[12%] bg-pink-600 rounded-full"></div>
			</div>

			{/* Pergunta */}
			<h2 className="text-2xl font-semibold text-center mb-6">
				What is your main goal?
			</h2>

			{/* Botões */}
			<div className="w-full max-w-md flex flex-col gap-4">
				{goals.map((goal) => (
					<button
						key={goal.label}
						onClick={() => handleGoalSelect(goal.label)}
						className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition duration-200 ${
							selectedGoal === goal.label
								? 'bg-gray-100 border-gray-400 text-gray-900 font-semibold'
								: 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'
						}`}
					>
						<span className="text-pink-600 text-lg">{goal.icon}</span>
						<span className="text-base">{goal.label}</span>
					</button>
				))}
			</div>
		</div>
	);
}
