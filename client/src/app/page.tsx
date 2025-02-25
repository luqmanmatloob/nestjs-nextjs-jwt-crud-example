import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-gray-600 mt-2">A simple authentication and post creation app.</p>
      
      <div className="mt-6 flex space-x-4">
        <Button asChild>
          <Link href="/signup">Signup</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/create-post">Create Post</Link>
        </Button>
      </div>
    </main>
  );
}