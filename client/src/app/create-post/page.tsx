"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="title" placeholder="Post Title" onChange={handleChange} value={form.title} required />
            <Textarea name="content" placeholder="Post Content" onChange={handleChange} value={form.content} required />
            <Button type="submit" className="w-full">Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
