import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg text-gray-700">Styled with Tailwind CSS.</p>
      <button className="px-6 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">
        Get Started
      </button>

      <button className="px-6 py-2 text-white bg-primary rounded hover:bg-secondary">
        Custom Button
      </button>

      <Button />
    </main>
  );
}
