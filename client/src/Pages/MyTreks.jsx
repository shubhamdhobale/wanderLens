import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const trek = [
            {
              slug : 'Kalsubai',
              title: 'Kalsubai – Maharashtra’s Everest',
              image: 'https://images.unsplash.com/photo-1606890737304-50eb93ed03de?auto=format&fit=crop&w=800&q=80',
              location: 'Ahmednagar, Maharashtra'
            },
            {
              slug : 'rajgad',
              title: 'Rajgad – The King of Forts',
              image: 'https://images.unsplash.com/photo-1589172336470-8a30c9fc8592?auto=format&fit=crop&w=800&q=80',
              location: 'Pune District'
            },
            {
              slug : 'harihar',
              title: 'Harihar Fort – Cliff Steps Adventure',
              image: 'https://images.unsplash.com/photo-1664361113691-cc20d55e4cc6?auto=format&fit=crop&w=800&q=80',
              location: 'Nashik District'
            },
            {
              slug : 'sandhan',
              title: 'Sandhan Valley – The Valley of Shadows',
              image: 'https://images.unsplash.com/photo-1579366332056-d9f4a3478f3e?auto=format&fit=crop&w=800&q=80',
              location: 'Ratangad region'
            },
            {
              slug : 'kothaligad',
              title: 'Kothaligad – Fire Fort',
              image: 'https://images.unsplash.com/photo-1568717945279-48b29f4d80d6?auto=format&fit=crop&w=800&q=80',
              location: 'Karjat, Maharashtra'
            },
            {
              slug : 'torna',
              title: 'Torna – First Capital of Shivaji Maharaj',
              image: 'https://images.unsplash.com/photo-1623832604707-f38d15546eb3?auto=format&fit=crop&w=800&q=80',
              location: 'Velhe, Pune'
            }
          ]

const MyTreks = () => {
  return (
    <section id="treks" className="py-16 px-6 md:px-20 bg-[#f4f1ee]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] mb-10 text-center text-[#2f2f2f]">
          My Treks
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            trek.map((trek, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-lg group"
              >
                <div 
                  className="h-64 bg-cover bg-center transition-all duration-300 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${trek.image}')` }} 
                />
                <div className="bg-white p-4">
                  <h3 className="text-xl font-[Playfair_Display] mb-1 text-[#333]">{trek.title}</h3>
                  <p className="text-sm text-[#777] font-[Merriweather]">{trek.location}</p>
                  <Link to={`/treks/${trek.slug}`}>
                    <button className="mt-2 px-4 py-2 bg-[#2f2f2f] text-white text-sm rounded-lg hover:bg-[#444] transition-all">
                      View More →
                    </button>
                  </Link>
                </div>
              </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

  )
}

export default MyTreks