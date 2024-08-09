import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinkClasses = ({ isActive, isPending }) => (isActive ? "text-emerald-50" : isPending ? "pending" : "") + " hover:text-emerald-50"
    return (
        <nav className=" bg-gradient-to-tr from-emerald-50 to-emerald-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to='/' className="text-emerald-500 text-3xl font-bold">XlFormula</NavLink>

                {/* Navigation Links */}
                <div className={`md:flex space-x-6 text-lg font-normal  ${isOpen ? 'block' : 'hidden'}`}>
                    <NavLink to='/keyboardshortcuts' className={navLinkClasses}>ShortCuts</NavLink>
                    <NavLink to='/functions' className={navLinkClasses}>Functions</NavLink>
                    <NavLink to="/formulas" className={navLinkClasses}>Formulas</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </nav>
    );
};
