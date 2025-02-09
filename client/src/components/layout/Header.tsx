import React from 'react';
import { ModeToggle } from '../ModeToggle';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-semibold">My Blog</a>
                <ul className="flex space-x-6">
                    <li><a href="/signup" className="hover:text-gray-200">sign up</a></li>
                    <li><a href="/login" className="hover:text-gray-200">login</a></li>
                    <li><a href="/create-post" className="hover:text-gray-200">create post</a></li>
                    <li className=
                    "bg-white text-black  dark:bg-blue-600 dark:text-white"
                    >

                        <ModeToggle />
                    </li>
                    
                    

                </ul>
            </nav>
        </header>
    );
};

export default Header;
