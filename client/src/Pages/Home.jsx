import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import WanderMap from '../Components/WanderMap';


const quotes = [
  'In the heart of the Sahyadris, I found my soul.',
  'Every stone tells a story, every trek writes a memory.',
  'Foggy paths and golden skies — that’s where I belong.',
  'Wander where the Wi-Fi is weak, but your soul is strong.'
];

const heroImages = [
  'https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1545652985-5edd365b12eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla3xlbnwwfHwwfHx8MA%3D%3D',
  'https://t3.ftcdn.net/jpg/01/96/01/82/360_F_196018299_moUD9nFRL1OWaVTUG7YgsdCk3gCQVzj7.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZpET-Xuhi-DRO_pojv6LP5Bh0YJQ4EsHqxxzJN0LTlxbLM8OH_z6_7JFCPY_Gnarvhg&usqp=CAU'
];


const Home = () => {

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-[#f4f1ee] min-h-screen text-[#2f2f2f] font-[Lora]">
      
      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0 z-0 h-full w-full"
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
  <div
    className="h-full w-full bg-cover bg-center relative"
    style={{ backgroundImage: `url('${img}')` }}
  >
    <div className="absolute inset-0 bg- bg-opacity-50"></div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-white mb-4 drop-shadow-lg">
            WanderLens
          </h1>
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-[#f1f1f1] italic mb-8 h-12"
          >
            {quotes[quoteIndex]}
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.1, rotate: '-1deg', backgroundColor: '#678c96', boxShadow: '0 0 25px rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4f6d7a] px-8 py-3 text-lg text-white rounded-full shadow-xl transition-all cursor-pointer font-semibold"
          >
            Explore My Journey
          </motion.a>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-[Cormorant_Garamond] mb-6">
            Trekker. Explorer. Storyteller.
          </h2>
          <p className="text-lg leading-8 text-[#444] font-[Merriweather]">
            I'm Shubham Dhobale, and I've walked the rugged trails, misty forts, and deep jungles of the Sahyadris. Through WanderLens, I bring to life the moments where the clouds kissed the cliffs, the sunrise lit the valleys, and silence spoke louder than words.
          </p>
        </motion.div>
      </section>

      <section>
        <WanderMap/>
      </section>

      {/* Quote Section */}
      <section id="journal" className="py-12 bg-[#e9e6e3] text-center">
        <motion.blockquote 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="text-2xl italic font-[Cinzel_Decorative] max-w-3xl mx-auto"
        >
          “Let nature guide your next step.”
        </motion.blockquote>
      </section>
    </div>
  )
}

export default Home