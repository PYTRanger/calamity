import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Calamity</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          <a href="/api/hello">Get</a>
        </button>
      </div>  
    </main>
  );
}