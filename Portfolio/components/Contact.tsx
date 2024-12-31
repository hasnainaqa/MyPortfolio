export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-semibold mr-2">Email:</span>
              <a href="mailto:muhammedhasnain3356@gmail.com" className="text-blue-600 hover:underline">
                muhammedhasnain3356@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">Phone:</span>
              <a href="tel:+923107257619" className="text-blue-600 hover:underline">
                +92 325 6244441
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold mr-2">GitHub:</span>
              <a href="https://github.com/hasnainaqa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                github.com/hasnainaqa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

