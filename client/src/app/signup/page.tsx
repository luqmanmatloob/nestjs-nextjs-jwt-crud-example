"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("User registered successfully! Please login.");
      router.push("/login");
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Register</h2>
        <input type="text" name="username" placeholder="Username" className="w-full p-3 border rounded-md dark:bg-gray-700" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-md dark:bg-gray-700" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-md dark:bg-gray-700" onChange={handleChange} required />
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}
