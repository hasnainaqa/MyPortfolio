import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">HAQA</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link></li>
          <li><Link href="#skills" className="text-gray-600 hover:text-blue-600">Skills</Link></li>
          <li><Link href="#projects" className="text-gray-600 hover:text-blue-600">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

