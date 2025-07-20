'use client';
import { useState } from 'react';
import Image from 'next/image';
import SuccessSection from './pages/womens';
import GoalSelection from './pages/goalSelection';
import StressSleepSection from './pages/StressSleepSection';
import Sintomas from './pages/sintomes';
import TargetZones from './pages/areaPage';
import WeightChange from './pages/peso';
import SimilarIssues from './pages/similar';
import StartingPoint from './pages/startingPoint';
import DreamBody from './pages/dreamBody';
import BestShape from './pages/bestShap';
import PilatesExperience from './pages/pilatesXp';
import Struggles from './pages/struggles';
import ComfortWithExercise from './pages/comfortWithExercise';
import MessageParams from './pages/messageParams';
import HeightInput from './pages/heigthInput';
import WeightInput from './pages/wigthInput';
import AgeInput from './pages/yearsInput';
import PilatesPriority from './pages/PilatesPriority';
import DailyActivity from './pages/dailyActivity';
import ProfileResult from './pages/ProfileResult';
import OthersActivity from './pages/othersActivity';
import DrinkDaily from './pages/drinkDaily';
import MealPreference from './pages/mealPreference';
import HabitSelection from './pages/habitSelecion';
import LifeEvents from './pages/lifeEvents';
import MotivationalStep from './pages/motivationalStep';
import TransformationPreview from './pages/transformationPreview';
import ProgressCircle from './pages/animationFinal';
import EmailForm from './pages/email';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion"
import { BsArrowRight } from 'react-icons/bs';


export default function HomeClient() {
	const ages = ['39-45', '46-50', '51-60', '60+'];
	const [selectedAge, setSelectedAge] = useState<string | null>(null);
	const [step, setStep] = useState<
		| 'age'
		| 'success'
		| 'goal'
		| 'stressSleep'
		| 'sintomas'
		| 'targetZones'
		| 'weightChange'
		| 'similarIssues'
		| 'startingPoint'
		| 'dreamBody'
		| 'bestShape'
		| 'pilatesExperience'
		| 'struggles'
		| 'comfortWithExercise'
		| 'successSection'
		| 'heightInput'
		| 'weightInput'
		| 'ageInput'
		| 'pilatesPriority'
		| 'dailyActivity'
		| 'profileResult'
		| 'othersActivity'
		| 'drinkDaily'
		| 'mealPreference'
		| 'habitSelection'
		| 'lifeEvents'
		| 'motivationalStep'
		| 'transformationPreview'
		| 'animationPreview'
		| 'email'
	>('age');
	const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

	const handleAgeSelect = (age: string) => {
		setSelectedAge(age);
		setStep('success');
	};

	const handleOngoing = () => {
		setStep('goal');
	};

	return (
		<AnimatePresence mode="wait">
  <motion.div
    key={step}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >

		

			{step === 'age' && (
				<div className="min-h-screen flex flex-col bg-white text-gray-900">
					<header className="w-full max-w-4xl mx-auto flex justify-between items-center p-4">
						<div className="flex items-center gap-2 font-bold text-xl">
							PILATES
							<span className="text-xs font-normal bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
								by HARNA
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm">
							<span>EN</span>
							<span className="text-xl select-none">⌄</span>
							<button className="text-2xl ml-2" aria-label="menu">
								☰
							</button>
						</div>
					</header>

					<main className="flex flex-col items-center justify-center flex-grow text-center px-4 max-w-6xl mx-auto w-full">
						<h1 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-lg mx-auto">
							Asian Pilates Program{' '}
							<span className="text-pink-700">for Menopausal Women</span>
						</h1>
						<p className="mt-4 text-gray-600">According to your age</p>
						<p className="mt-1 text-sm font-semibold text-gray-500">
							1‑MINUTE QUIZ
						</p>

						<div className="mt-12 w-full flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:min-h-[400px] gap-10">
							{/* Botões de idade */}
							<ul className="flex flex-col gap-4 w-full max-w-xs">
								{ages.map((age) => (
									<li key={age}>
										<button
											onClick={() => handleAgeSelect(age)}
											className="w-full border border-gray-300 rounded-xl py-3 px-5 text-base font-medium text-gray-800 hover:bg-gray-50 transition flex items-center justify-between tracking-wide"
										>
											{age} <BsArrowRight />
										</button>
									</li>
								))}
							</ul>

							{/* Imagem ao lado */}
							<div className="hidden sm:flex justify-center items-center">
								<Image
									src="/man.png"
									alt="Muscular man"
									width={280}
									height={380}
									className="object-contain"
									priority
								/>
							</div>
						</div>
					</main>

					<footer className="py-4 text-xs text-gray-500 text-center max-w-md mx-auto px-4">
						By choosing your age and continuing, you agree to our{' '}
						<a href="#" className="underline">
							Terms of Service
						</a>
						,{' '}
						<a href="#" className="underline">
							Privacy Policy
						</a>{' '}
						and{' '}
						<a href="#" className="underline">
							Cookie Policy
						</a>
						.
					</footer>
				</div>
			)}

			 

			{step === 'success' && <SuccessSection onGoing={handleOngoing} />}

			{step === 'goal' && (
				<GoalSelection
					selectedGoal={selectedGoal}
					setSelectedGoal={setSelectedGoal}
					setStep={setStep}
				/>
			)}

			{step === 'stressSleep' && (
				<StressSleepSection onContinue={() => setStep('sintomas')} />
			)}

			{step === 'sintomas' && (
				<Sintomas onContinue={() => setStep('targetZones')} />
			)}

			{step === 'targetZones' && (
				<TargetZones onContinue={() => setStep('weightChange')} />
			)}

			{step === 'weightChange' && (
				<WeightChange onContinue={() => setStep('similarIssues')} />
			)}

			{step === 'similarIssues' && (
				<SimilarIssues onContinue={() => setStep('startingPoint')} />
			)}

			{step === 'startingPoint' && (
				<StartingPoint onSelect={() => setStep('dreamBody')} />
			)}

			{step === 'dreamBody' && (
				<DreamBody onSelect={() => setStep('bestShape')} />
			)}

			{step === 'bestShape' && (
				<BestShape onSelect={() => setStep('pilatesExperience')} />
			)}

			{step === 'pilatesExperience' && (
				<PilatesExperience onSelect={() => setStep('struggles')} />
			)}

			{step === 'struggles' && (
				<Struggles onContinue={() => setStep('comfortWithExercise')} />
			)}

			{step === 'comfortWithExercise' && (
				<ComfortWithExercise onContinue={() => setStep('successSection')} />
			)}

			{step === 'successSection' && (
				<MessageParams onGoing={() => setStep('heightInput')} />
			)}

			{step === 'heightInput' && (
				<HeightInput onContinue={() => setStep('weightInput')} />
			)}

			{step === 'weightInput' && (
				<WeightInput onContinue={() => setStep('ageInput')} height={230} />
			)}

			{step === 'ageInput' && (
				<AgeInput onContinue={() => setStep('pilatesPriority')} />
			)}

			{step === 'pilatesPriority' && (
				<PilatesPriority onContinue={() => setStep('dailyActivity')} />
			)}

			{step === 'dailyActivity' && (
				<DailyActivity onContinue={() => setStep('profileResult')} />
			)}

			{step === 'profileResult' && (
				<ProfileResult
					bmi={13.24}
					lifestyle="Sedentary"
					bodyType="Mid-sized"
					fitnessLevel="Beginner"
					trainingType="Gentle Pilates"
					onContinue={() => setStep('othersActivity')}
				/>
			)}
			{step === 'othersActivity' && (
				<OthersActivity
					onContinue={() => setStep('drinkDaily')}
				/>
			)}
			{step === 'drinkDaily' && (
				<DrinkDaily 
					onSelect={() => setStep('mealPreference')} />
			)}
			{step === 'mealPreference' && (
				<MealPreference
				onContinue={() => setStep('habitSelection')}/>
			)}
			{step === 'habitSelection' && (
				<HabitSelection
					onContinue={() => setStep('lifeEvents')}
				/>
			)}
			{step === 'lifeEvents' && (
				<LifeEvents
					onContinue={() => setStep('motivationalStep')}
				/>
			)}
			{step === 'motivationalStep' && (
				<MotivationalStep
					onContinue={() => setStep('transformationPreview')}
				/>
			)}
			{step === 'transformationPreview' && (
				<TransformationPreview
					onContinue={() => setStep('animationPreview')}
				/>
			)}
			{step === 'animationPreview' && (
  <ProgressCircle onContinue={() => setStep('email')} />
)}
{step === 'email' && <EmailForm />}
	</motion.div>
		</AnimatePresence>
	);
}
