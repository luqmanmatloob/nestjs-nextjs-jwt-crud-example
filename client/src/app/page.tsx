import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (

    <div className="
flex gap-20  items-center justify-center min-h-screen py-2
">
      <Button>
        test
      </Button>

      <button> hello</button>

      <button className="bg-black  text-white dark:bg-white dark:text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
        hello
      </button>

    </div>
  );
}
