import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold">
          My Blog
        </a>
        <ul className="flex space-x-6">
          <li className="flex items-center">
            <Button asChild variant="ghost" >
              <a href="/signup">Sign Up</a>
            </Button>
          </li>
          <li className="flex items-center">
            <Button asChild variant="ghost">
              <a href="/login">Login</a>
            </Button>
          </li>
          <li className="flex items-center">
            <Button asChild variant="ghost">
              <a href="/create-post">Create Post</a>
            </Button>
          </li>
          <li className="p-2 rounded-md ">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;