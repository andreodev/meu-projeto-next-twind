import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

interface ProgressCircleProps {
  target?: number;
  onContinue: () => void;
}

export default function ProgressCircle({ target = 100, onContinue }: ProgressCircleProps) {
  const [progress, setProgress] = useState(0);

  // Atualiza o progresso gradualmente
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, target));
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  // Chama onContinue somente quando atingir o progresso alvo
  useEffect(() => {
    if (progress >= target) {
      onContinue();
    }
  }, [progress, target, onContinue]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.div
        className="relative w-48 h-48 rounded-full border-8 border-pink-500 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-600">{progress}%</div>
          <FaHeartbeat className="mx-auto mt-1 text-pink-500 text-xl animate-pulse" />
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
          Creating your personalized plan
        </h2>
      </div>
    </div>
  );
}
