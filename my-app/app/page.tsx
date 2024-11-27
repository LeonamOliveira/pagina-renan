'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

import Image from 'next/image';
import Imagem1 from './public/imagem1.jpg';
import Imagem2 from './public/imagem2.jpg';
import Imagem3 from './public/imagem3.jpg';

const images = [
  Imagem1,
  Imagem2,
  Imagem3,
]

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = (): void => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = (): void => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-red-500">
      <div className="w-full max-w-lg">
        <iframe
          width="100%"  // Responsivo
          height="315"
          src="https://www.youtube.com/embed/u6t_dMBezSU?autoplay=1&loop=1&playlist=u6t_dMBezSU"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <div className="relative">
        <Image 
          src={images[currentImage]} 
          alt={`Imagem ${currentImage + 1}`} 
          width={300} 
          height={200}
          className="object-cover rounded-lg"
        />
        <Button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &lt;
        </Button>
        <Button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &gt;
        </Button>
      </div>

      <p className="mt-4 text-lg text-center text-red-500">
        Privilégio é saber que tenho você ao meu lado todos os dias, é poder escutar um &quot;eu te amo&quot;, um &quot;tô com saudade&quot; ou qualquer outra coisa que vem de você.
        <br />
        Amar você foi uma escolha, que todos os dias da minha vida eu tenho mais certeza ainda que te amo, obrigado por simplesmente ser quem você é!
      </p>
    </div>
  )
}

export default Home
