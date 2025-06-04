import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white flex flex-col sm:flex-row items-center justify-center px-4 py-4 sm:py-6 text-center">
            <p className="max-w-[90%] sm:max-w-[70%] text-sm sm:text-base">
                © {new Date().getFullYear()} WorldNews. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
