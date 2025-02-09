// app/page.tsx (Root Page)

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-gray-600 mt-2">A simple authentication and post creation app.</p>
      
      <div className="mt-6 flex space-x-4">
        <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Signup
        </Link>
        <Link href="/login" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Login
        </Link>
        <Link href="/create-post" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          Create Post
        </Link>
      </div>
    </main>
  );
}
