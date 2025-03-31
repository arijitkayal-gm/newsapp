"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0  shadow-md bg-stone-950 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-blue-500">WorldNews</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/business" className="hover:text-gray-300">Business</Link>
            <Link href="/entertainment" className="hover:text-gray-300">Entertainment</Link>
            <Link href="/health" className="hover:text-gray-300">Health</Link>
            <Link href="/science" className="hover:text-gray-300">Science</Link>
            <Link href="/sports" className="hover:text-gray-300">Sports</Link>
            <Link href="/technology" className="hover:text-gray-300">Technology</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/business" className="block hover:text-gray-300">Business</Link>
          <Link href="/entertainment" className="block hover:text-gray-300">Entertainment</Link>
          <Link href="/health" className="block hover:text-gray-300">Health</Link>
          <Link href="/science" className="block hover:text-gray-300">Science</Link>
          <Link href="/sports" className="block hover:text-gray-300">Sports</Link>
          <Link href="/technology" className="block hover:text-gray-300">Technology</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
