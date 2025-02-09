"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const [form, setForm] = useState({ title: "", content: "" });
  const [authToken, setAuthToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login first!");
      router.push("/login");
    } else {
      setAuthToken(token);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authToken) return;

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Post created successfully!");
      setForm({ title: "", content: "" });
    } else {
      alert("Post creation failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Create a Post</h2>
        <input type="text" name="title" placeholder="Post Title" className="w-full p-3 border rounded-md dark:bg-gray-700" onChange={handleChange} value={form.title} required />
        <textarea name="content" placeholder="Post Content" className="w-full p-3 border rounded-md dark:bg-gray-700" onChange={handleChange} value={form.content} required></textarea>
        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600">Create Post</button>
      </form>
    </div>
  );
}
