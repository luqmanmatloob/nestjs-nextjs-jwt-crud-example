import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
