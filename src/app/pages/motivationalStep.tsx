type Props = {
  onContinue: () => void;
};

export default function MotivationalStep({ onContinue }: Props) {
  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col items-center text-gray-900">
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          PILATES
          <span className="text-xs font-medium bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
            by HARNA
          </span>
        </div>
      </header>

      {/* Motivational Image */}
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <img
          src="https://s3.harna-app.com/quizes_images/ed4f98aa-77ab-4462-9814-068047916dfa.png"
          alt="Fit man"
          className="rounded-2xl mb-6 max-w-xs"
        />
        <h2 className="text-2xl font-semibold mb-2">Get Your Body Back!</h2>
        <p className="text-gray-600 text-sm max-w-sm">
          Don’t know where to start? We’ve already planned everything.
          <br />
          Not sure if you can do it? We’re ready to motivate and support you!
        </p>
      </div>

      {/* Continue Button */}
      <button
        type="button"
        onClick={onContinue}
        className="mt-auto mb-4 w-full max-w-md py-4 rounded-full font-semibold text-white bg-pink-700 hover:bg-pink-800 transition"
      >
        Continue
      </button>
    </div>
  );
}
