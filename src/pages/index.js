import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>Calamity</h1>
        <button>
          <a href="/api/hello">Get</a>
        </button>
      </div>  
    </main>
  );
}