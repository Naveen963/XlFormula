import React, { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" bg-gradient-to-tr from-emerald-50 to-emerald-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-emerald-500 text-3xl font-bold">XlFormula</a>

                {/* Navigation Links */}
                <div className={`md:flex space-x-4 text-lg font-normal  ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="hover:text-emerald-50">ShortCuts</a>
                    <a href="#" className="hover:text-emerald-50">Formulas</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </nav>
    );
};
