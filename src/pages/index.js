import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <div className="p-6 bg-gray-900 rounded shadow-md">
        <h1 className="text-6xl font-calvier mb-4 text-white">Calamity</h1>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            <a href="/api/hello">Get</a>
          </button>
        </div>
      </div>  
    </main>
  );
}