import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;