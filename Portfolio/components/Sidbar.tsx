'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
    <div className='mt-16'>
      {/* Toggle Button for Mobile */}
      <button
        className="fixed top-6 left-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg md:hidden "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
className={`fixed top-16 left-0 z-40 w-72 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out rounded-tr-lg rounded-br-lg ${
  isOpen ? 'translate-x-0' : '-translate-x-full'
} md:translate-x-0`}

      >
        

        {/* Additional Information */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <ul className="space-y-2">
            <li className="text-md font-light">English (Proficient)</li>
            <li className="text-md font-light">Urdu (Native)</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <p className="text-md font-light">
            Bachelor in Computer Science <br />
            University of Gujrat <br />
            2021 – 2025
          </p>
        </div>
      </aside>
      </div>
    </>
  )
}
