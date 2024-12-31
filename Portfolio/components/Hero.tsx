import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <Image
        src="/images/Photo_for_portfolio.jpg"
        alt="Hasnain Afzal"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Hasnain Afzal (HAQA)</h1>
      <p className="text-xl text-gray-600 mb-4">Aspiring Full-Stack Developer</p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
}

