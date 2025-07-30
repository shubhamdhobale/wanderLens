// TrekDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const elevationData = [
  { km: 0, elevation: 600 },
  { km: 1, elevation: 750 },
  { km: 2, elevation: 860 },
  { km: 3, elevation: 940 },
  { km: 4, elevation: 1020 },
  { km: 5, elevation: 950 },
  { km: 6, elevation: 1050 },
];

const trekData = {
  Kalsubai: {
    title: 'Kalsubai – Maharashtra’s Everest',
    description: `Kalsubai is the highest peak in Maharashtra, standing at 5,400 ft. Popular among trekkers for its scenic trails and panoramic views.`,
images: [
      'https://images.unsplash.com/photo-1605362113341-cd3d2dfb2f3c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608889173782-756ecc53e09f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590502593741-99d2fcf55643?auto=format&fit=crop&w=1200&q=80'
    ],    
    location: 'Ahmednagar, Maharashtra',
    difficulty: 'Moderate',
    bestTime: 'June to October',
  },
  harishchandragad: {
    title: 'Harishchandragad – Ancient Fort Trek',
    description: `Known for its breathtaking Konkan Kada cliff, Harishchandragad offers a blend of adventure and history. The caves and temples here date back centuries.`,
    images: [
      'https://images.unsplash.com/photo-1605362113341-cd3d2dfb2f3c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608889173782-756ecc53e09f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590502593741-99d2fcf55643?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Ahmednagar, Maharashtra',
    difficulty: 'Challenging',
    bestTime: 'October to March',
  },
  rajgad: {
    title: 'Rajgad – Capital of Shivaji Maharaj',
    description: `Rajgad Fort, the former capital of the Maratha Empire, features stunning architecture and wide views. It's a must-visit for history buffs and nature lovers.`,
    images: [
      'https://images.unsplash.com/photo-1605362113341-cd3d2dfb2f3c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608889173782-756ecc53e09f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590502593741-99d2fcf55643?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Pune, Maharashtra',
    difficulty: 'Moderate',
    bestTime: 'June to February',
  },
  visapur: {
    title: 'Visapur Fort – Monsoon Marvel',
    description: `Visapur Fort is known for its scenic monsoon treks. Waterfalls and lush greenery adorn the route, making it a perfect monsoon escape.`,
    images: [
      'https://images.unsplash.com/photo-1605362113341-cd3d2dfb2f3c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608889173782-756ecc53e09f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590502593741-99d2fcf55643?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Lonavala, Maharashtra',
    difficulty: 'Easy to Moderate',
    bestTime: 'July to September',
  },
};

const TrekDetails = () => {
   const { slug } = useParams();
  const trek = trekData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trek) return <div className="p-10 text-center text-xl">Trek not found.</div>;

  return (
    <div className="bg-[#f4f1ee] min-h-screen text-[#2f2f2f] font-[Lora]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-[Playfair_Display] mb-4 text-center"
        >
          {trek.name}
        </motion.h1>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
        >
          {trek.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Trek view ${i + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition duration-300 object-cover h-64 w-full"
            />
          ))}
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p>{trek.location}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Difficulty</h3>
            <p>{trek.difficulty}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Best Time to Visit</h3>
            <p>{trek.bestTime}</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg leading-8 font-[Merriweather] mb-10"
        >
          {trek.description}
        </motion.p>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="aspect-video overflow-hidden rounded-xl shadow-lg"
        >
          <iframe
            title="Kalsubai Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2345569939045!2d73.70374671441936!3d19.603570486792585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc6cbab98944e9%3A0xd8e76b4c40641ea1!2sKalsubai%20Peak!5e0!3m2!1sen!2sin!4v1627124001951!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>

      <div className="my-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-200">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
    🌄 Elevation Profile
  </h2>
  <div className="h-[300px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={elevationData}>
        <CartesianGrid strokeDasharray="4 4" stroke="#ccc" />
        <XAxis
          dataKey="km"
          tick={{ fill: '#4f4f4f' }}
          label={{
            value: 'Distance (km)',
            position: 'insideBottomRight',
            offset: -5,
            fill: '#6b7280',
          }}
        />
        <YAxis
          tick={{ fill: '#4f4f4f' }}
          label={{
            value: 'Elevation (m)',
            angle: -90,
            position: 'insideLeft',
            fill: '#6b7280',
          }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: '#ffffffdd', borderRadius: '10px', borderColor: '#ddd' }}
          itemStyle={{ color: '#374151' }}
        />
        <Line
          type="monotone"
          dataKey="elevation"
          stroke="#16a34a"
          strokeWidth={3}
          dot={{ r: 5, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
};

export default TrekDetails;