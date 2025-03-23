import { ChevronRight, HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function PageAboutUs() {
  return (
    <div>
          {/* Header Section */}
          <div className="bg-neutral-900 text-white py-16 px-4">
        <h1 className="text-5xl font-serif text-center mb-6">About Us</h1>
        <div className="flex items-center justify-center gap-2 text-neutral-300">
          <HomeIcon className="w-5 h-5" />
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <ChevronRight className="w-4 h-4" />
          <NavLink to="/pages" className="text-white">
            About
          </NavLink>
        </div>
      </div>
    </div>
  )
}
