import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
     <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-display text-gray-900">
            <span className="text-yellow-700">SkyWriter</span>
          </h1>
          <nav className="flex gap-6 text-gray-700 font-display">
            <Link to="/dashboard" className="hover:text-yellow-700 transition">
              Home
            </Link>
            <Link to="/features" className="hover:text-yellow-700 transition">
              Features
            </Link>
            <Link to="/about" className="hover:text-yellow-700 transition">
              About
            </Link>
            <Link to="/" className="hover:text-yellow-700 transition">
              Logout
            </Link>
          </nav>
        </div>
      </header>

     <main>
        <p>HI</p>
     </main>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} SkyWriter. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-yellow-700 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-yellow-700 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainPage