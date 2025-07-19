import { useState } from "react";
import { FaLock } from "react-icons/fa";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("E-mail enviado:", email);
    // Aqui você pode enviar o e-mail para a API, salvar no banco etc.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
      <div className="mb-6">
        <img src="https://s3.harna-app.com/static_assets/images/quizes/steps/basic/done.png" alt="Flame" className="mx-auto h-16 w-16" />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Your Pilates Plan is ready!</h2>
      <p className="mb-6 text-sm text-gray-600">Let’s create your HARNA account</p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-2">
        <input
          type="email"
          placeholder="Enter your e-mail"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex items-center text-xs text-gray-500">
          <FaLock className="mr-1 text-sm" />
          We respect your privacy and take protecting it very seriously — no spam
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-3 bg-pink-200 hover:bg-pink-300 text-pink-800 font-semibold rounded-full transition"
        >
          See my plan
        </button>
      </form>
    </div>
  );
}
